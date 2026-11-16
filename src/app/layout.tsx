import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import Ether from "@/components/Ether";
import Footer from "@/components/Footer";
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

export const metadata: Metadata = {
  title: "Owen Miller 🦘💽🔮",
  description: "Owen Miller: software engineer in Melbourne, founder of the Non-Human Party, and co-host of the My First Party podcast.",
  metadataBase: new URL("https://owen.engineer"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${manrope.variable}`}>
      <body className="antialiased">
        {/* Every page shares the backdrop and footer. Since the layout stays mounted
            when following a <Link>, the backdrop keeps drifting between pages. */}
        <div className="relative min-h-screen overflow-hidden">
          <Ether/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
