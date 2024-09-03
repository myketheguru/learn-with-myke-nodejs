import type { Metadata } from "next";
import { inter, poppins, outfit, dmSans } from "@/fonts";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./globals.scss";

export const metadata: Metadata = {
  title:
    "Learn Node.js | 12-Week Comprehensive Course with Hands-On Projects & Expert Guidance",
  description:
    "Join our Node.js course designed for aspiring developers. Learn through live classes, hands-on projects, and expert guidance. Limited spots available—enroll today!",
  keywords:
    "Node.js course, learn Node.js, Node.js training, 11-week Node.js course, online Node.js course, Node.js certification",
  openGraph: {
    title:
      "Master Node.js in 12 Weeks | Live Classes, Quizzes, and Project-Based Learning",
    description:
      "Join our comprehensive Node.js course and learn from industry experts. Complete quizzes, projects, and collaborate with peers. Limited spots available—enroll today",
  },
  twitter: {
    title: "Learn Node.js in 12 Weeks | Hands-On Projects & Expert Guidance",
    description:
      "Enroll in our Node.js course today. Live classes, weekly quizzes, and real-world projects await you. Secure your spot now!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${poppins.variable} ${outfit.variable} ${dmSans.variable}`}>
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
