import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Arjun Aditya",
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
