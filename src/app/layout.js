import { Geist, Geist_Mono } from "next/font/google";
import NavigationMenuDemo from '@/shared/NavigationMenu'
import Footer from '@/shared/footer'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "sarimdev",
  description: "sarimdev portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationMenuDemo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
