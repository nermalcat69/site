---
title: Colophon
description: Colophon is a designer-y word for “how it’s made”—here’s what powers eva.town.
datePublished: 2023-09-26 03:47:00-04:00
dateModified: 2025-09-12 20:42:28-04:00
img: ["./img600.webp", "./img900.webp", "./img1200.webp"]
imgAlt: The spines of 12 books, including Visual Explanations, The Display of Quantitative Information, The Geometry of Type, Understanding Comics, Nicely Said, Don't Make Me Think!, Queer by Design, The 99% Invisible City, Interaction of Color, The Elements of Style, Thinking Fast and Slow, and The Death and Life of Great American Cities.
ogImage: ./img1200.webp
---

## About this site

This website is a forked version of [Eva Decker](https://www.linkedin.com/in/evadecker)'s [eva.town](https://eva.town/) and it's open source and available on [Github](https://github.com/evadecker/eva.town).

I started this website to express my thoughts.


## Technology

This site is built using [Astro](https://astro.build). Astro handles the content-heavy views (written in [MDX](https://mdxjs.com)), but for more interactive components I use [React](https://react.dev) and [TypeScript](https://www.typescriptlang.org).

End-to-end tests are written using [Playwright](https://playwright.dev), and I use [Polypane](https://polypane.app) to preview devices, test accessibility, and toggle user preferences like `prefers-reduced-motion`.

Domain registration on Namecheap, DNS on Cloudflare and deployment are via [Vercel](https://netlify.com/). 

## Typography

Text is set in [HEX Franklin Variable](https://hex.xyz/HEX_Franklin/) with code in [`MonoLisa`](https://www.monolisa.dev/). Typography is scaled using a lot of math and a [fluid type scale](https://utopia.fyi/blog/designing-with-fluid-type-scales) by [Utopia](https://utopia.fyi/type/calculator/), meaning that font sizes will interpolate between mobile and desktop to optimize for the current browser width.

Type inspiration can be found anywhere, from comic art and video games to [bodega window displays](https://www.are.na/eva-decker/nyc-bodega-art), but I often return to a handful of resources:

- [_The Elements of Typographic Style_](https://bookshop.org/a/97627/9780881792126) by Robert Bringhurst
- [Butterick’s Practical Typography](https://practicaltypography.com)
- Bethany Heck’s [Font Review Journal](https://fontreviewjournal.com)
- [Fonts In Use](https://fontsinuse.com)

## Styling

I use [Radix Colors](https://www.radix-ui.com/colors) to apply palettes consistently, ensure accessibility, and seamlessly switch between light and dark mode. Icons are from [Remix Icon](https://remixicon.com). Styles are written using plain 'ol CSS. Pixel portraits of me were created by [@NullTheFool](https://mastodon.gamedev.place/@NullTheFool) on the [Pixel Art Discord](https://discord.com/invite/pixelart). Pixelated header images are created using the Atkinson dithering algorithm via [Dithermark](https://app.dithermark.com).

## Energy

I minimize energy usage on this site by avoiding unnecessary scripts (such as trackers, analytics, or resource-intensive animations) and compressing images and video.

> The internet consumes a lot of electricity. 416.2TWh per year to be precise. To give you some perspective, that's more than the entire United Kingdom.
> <cite>[Website Carbon Calculator](https://www.websitecarbon.com)</cite>

As of September 12, 2025, [carbon results for arjunaditya.xyz](https://www.websitecarbon.com/website/arjunaditya-xyz/) indicate that the home page is cleaner than 96% of web pages tested, producing **0.03g of CO<sub>2</sub>** per page view.

## Notice an issue?

If you spot a typo, encounter a broken feature, or have a recommendation for an improvement, [file an issue on GitHub](https://github.com/nermalcat69/site/issues).
