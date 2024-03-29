import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import { ReduxProvider } from "../redux/Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer />
        <ReduxProvider>
          <NextTopLoader color="#0acf83" />
          <Root>{children}</Root>
        </ReduxProvider>
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
