import { Toaster } from "react-hot-toast";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import React from "react";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }:{children:React.ReactNode}) => {
    return (
        <>
      <Navbar />
      <main className={`${inter.className} max-w-[1200px] mx-auto`}>{children}</main>
      <Toaster />
      <Footer />
    </>
    );
};

export default RootLayout;