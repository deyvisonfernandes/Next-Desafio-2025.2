import type { Metadata } from "next";
import { Geist, Geist_Mono, Saira, Bebas_Neue } from "next/font/google";
import "./globals.css";



/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

const saira = Saira({
  variable: "--font-saira",
  weight:['100', '200', '600', '900'],

});


const bebasneue = Bebas_Neue({
  variable: "--font-bebasneue",
  weight:['400'],

});

export const metadata: Metadata = {
  title: "RetroSell",
  description: "Conservando o passado e garantindo o futuro.",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${saira.variable} ${bebasneue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
