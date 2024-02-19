import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], weight: ["500", "800"] });

// created a root page where all the lenis and other stuff will be added
import Root from "./Root";

export const metadata = {
  title: "Berozgar Engineers",
  description:
    "Elevate your engineering journey with comprehensive study resources, class notes, expert advice, and inspiring motivation for academic excellence.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Root>{children}</Root>
      </body>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      />
      <Script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      />
    </html>
  );
}
