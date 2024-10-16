import Header from "@/components/header";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sign Up for Node.js Course | Secure Your Spot in Our 11-Week Program",
  description:
    "Secure your spot in our Node.js course. Sign up with Google and start your journey to becoming a Node.js expert. Flexible payment options available.",
  keywords:
    "Node.js course sign-up, enroll in Node.js course, Node.js course registration, Node.js course payment options, Node.js course voucher",
};

export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className='relative bg-[url(/desktop-bg.svg)] bg-[center_0] bg-no-repeat bg-cover w-full h-screen'>
        <Header />
        <div className="h-full px-[5%]">

      {children}
        </div>
      </div>
      <Script src='https://js.paystack.co/v2/inline.js' />
    </>
  );
}
