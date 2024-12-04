// ClientRootLayout.tsx
"use client";

import "./globals.css";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import Nav from "./_component/Nav";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import GoogleAnalytics from "./_component/GoogleAnalytics/GoogleAnalytics";
import usePageView from "./hooks/usePageView";

config.autoAddCss = false;

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  usePageView();

  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={"antialiased"}>
        <div className="p-5">
          <Header />
          <main className="pb-[15rem]">{children}</main>
        </div>
        <div className="fixed bottom-0 w-full">
          <Nav />
          <Footer />
        </div>
      </body>
    </html>
  );
}
