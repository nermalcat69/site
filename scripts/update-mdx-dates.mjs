#!/usr/bin/env node

/**
 * Updates datePublished and dateModified in MDX frontmatter based on git status.
 *
 * - New files (untracked): Sets both datePublished and dateModified to current date
 * - Modified files: Updates only dateModified to current date
 *
 * Usage: node scripts/update-mdx-dates.js
 */

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

function getCurrentDateISO() {
  const now = new Date();
  const offset = -now.getTimezoneOffset();
  const sign = offset >= 0 ? "+" : "-";
  const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0");
  const minutes = String(Math.abs(offset) % 60).padStart(2, "0");

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hour}:${minute}:${second}${sign}${hours}:${minutes}`;
}

function getGitStatus() {
  try {
    const output = execSync("git status --porcelain", {
      cwd: rootDir,
      encoding: "utf-8",
    });
    return output.trim().split("\n").filter(Boolean);
  } catch {
    console.error(
      "Failed to get git status. Make sure you're in a git repository.",
    );
    process.exit(1);
  }
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  return {
    raw: match[0],
    body: match[1],
    startIndex: 0,
    endIndex: match[0].length,
  };
}

function updateFrontmatterField(frontmatterBody, field, value) {
  const regex = new RegExp(`^(${field}:\\s*).*$`, "m");
  if (regex.test(frontmatterBody)) {
    return frontmatterBody.replace(regex, `$1${value}`);
  }
  // If field doesn't exist, add it
  return `${frontmatterBody}\n${field}: ${value}`;
}

function processFile(filePath, isNew) {
  const fullPath = resolve(rootDir, filePath);
  const content = readFileSync(fullPath, "utf-8");
  const frontmatter = parseFrontmatter(content);

  if (!frontmatter) {
    console.log(`  Skipping ${filePath}: No frontmatter found`);
    return false;
  }

  const currentDate = getCurrentDateISO();
  let updatedFrontmatterBody = frontmatter.body;

  if (isNew) {
    // New file: set both datePublished and dateModified
    updatedFrontmatterBody = updateFrontmatterField(
      updatedFrontmatterBody,
      "datePublished",
      currentDate,
    );
    updatedFrontmatterBody = updateFrontmatterField(
      updatedFrontmatterBody,
      "dateModified",
      currentDate,
    );
    console.log(
      `  ${filePath}: Set datePublished and dateModified to ${currentDate}`,
    );
  } else {
    // Modified file: update only dateModified
    updatedFrontmatterBody = updateFrontmatterField(
      updatedFrontmatterBody,
      "dateModified",
      currentDate,
    );
    console.log(`  ${filePath}: Updated dateModified to ${currentDate}`);
  }

  const newFrontmatter = `---\n${updatedFrontmatterBody}\n---`;
  const newContent =
    content.slice(0, frontmatter.startIndex) +
    newFrontmatter +
    content.slice(frontmatter.endIndex);

  writeFileSync(fullPath, newContent, "utf-8");
  return true;
}

function main() {
  console.log("Checking for MDX files with changes...\n");

  const statusLines = getGitStatus();
  const mdxFiles = { modified: [], new: [] };

  for (const line of statusLines) {
    const status = line.substring(0, 2);
    const filePath = line.substring(3).trim();

    if (!filePath.endsWith(".mdx")) continue;

    // Git status codes:
    // ?? = untracked (new file)
    // M  = modified in index (staged)
    //  M = modified in working tree (unstaged)
    // A  = added (new file, staged)
    // AM = added and modified
    if (status === "??" || status.includes("A")) {
      mdxFiles.new.push(filePath);
    } else if (status.includes("M")) {
      mdxFiles.modified.push(filePath);
    }
  }

  if (mdxFiles.new.length === 0 && mdxFiles.modified.length === 0) {
    console.log("No MDX files with changes found.");
    return;
  }

  let processed = 0;

  if (mdxFiles.new.length > 0) {
    console.log("New MDX files:");
    for (const file of mdxFiles.new) {
      if (processFile(file, true)) processed++;
    }
    console.log();
  }

  if (mdxFiles.modified.length > 0) {
    console.log("Modified MDX files:");
    for (const file of mdxFiles.modified) {
      if (processFile(file, false)) processed++;
    }
    console.log();
  }

  console.log(`Done! Processed ${processed} file(s).`);
}

main();
