import type { Metadata } from "next";
import { Bodoni_Moda, Manrope, Shippori_Mincho } from "next/font/google";
import "./globals.css";

// Display: a high-contrast italic serif, like the English copy on 80s Japanese ads
const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Headings and body: a clean, modern sans
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Japanese: an elegant mincho serif for オウェン
const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Owen Miller ⚗🇦🇺✨",
  description: "Owen Miller (オウェン): software engineer in Melbourne, founder of the Non-Human Party, and co-host of the My First Party podcast.",
  metadataBase: new URL("https://owen.engineer"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${manrope.variable} ${shipporiMincho.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
