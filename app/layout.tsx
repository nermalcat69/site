import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Arjun Aditya | Focusing on Sustainablity and Technology",
  description: "Arjun Aditya is the founder/director of Gray Cup Enterprises, building sustainable tea, matcha, and coffee business. He has a background in software development and is passionate about using technology to make a positive impact on the environment.",
  keywords: ["Arjun Aditya", "Gray Cup", "Arjun Aditya's website", "Gray Cup's Founder", "Arjun Aditya's Tea", "Arjun Aditya's Matcha", "Arjun Aditya's Coffee"],
  icons: [
    {
      rel: "icon",
      url: "/favicon-light.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      url: "/favicon-dark.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
