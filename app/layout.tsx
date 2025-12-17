import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Arjun Aditya",
  description: "Arjun Aditya's website",
  keywords: ["Arjun Aditya", "Gray Cup", "Arjun Aditya's website", "Gray Cup's Founder", "Arjun Aditya's Tea", "Arjun Aditya's Matcha", "Arjun Aditya's Coffee"],
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
