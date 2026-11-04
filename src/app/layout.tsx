import type { Metadata } from "next";
import { Akatab, Carter_One, Geist_Mono, Fredoka, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const akatab = Akatab({
  variable: "--font-akatab",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"]
})

const carterOne = Carter_One({
  variable: "--font-carter-one",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const mPlusRounded1c = M_PLUS_Rounded_1c({
  variable: "--font-m-plus-rounded-1c",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
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
    <html lang="en" className={`${akatab.variable} ${carterOne.variable} ${geistMono.variable} ${fredoka.variable} ${mPlusRounded1c.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
