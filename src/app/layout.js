import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Mulish } from 'next/font/google';
import Footer from "@/components/footer";

const mulish = Mulish({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tour buddy",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-full max-w-[1440px] bg-[#E6E6E6] ${mulish.className}`}
      >
         <div className="flex items-center justify-center  bg-[#fff] border-b-[0.53px] border-[#E8EAEB]">
           <Navbar/>
         </div>
        {children}
        <div className="flex items-center justify-center bg-[#13253F] ">
          <Footer/>
        </div>
      </body>
    </html>
  );
}
