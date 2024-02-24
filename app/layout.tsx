import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import NavBar from "./NavBar";
import "./globals.css";

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "vietnamese"],
});
export const metadata: Metadata = {
  title: "Banking Website",
  description: "Awesome App for your Financial.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className="!scroll-smooth">
      <body
        className={`barlow.className container bg-color-primary text-color-white  tracking-wider`}
      >
          <header className='sticky top-0 z-50'>
            <NavBar/>
          </header>
          <main>{children}</main>
      </body>
    </html>
  );
}
