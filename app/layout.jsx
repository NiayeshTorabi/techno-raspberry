import localFont from "next/font/local";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "تکنورزبری",
  description: "TechnoRaspberry",
};

export const viewport = {
  themeColor: 'black',
}
 
export default function RootLayout({ children }) {
  return <html lang="fa" dir="rtl">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
        </body>
    </html>
}
