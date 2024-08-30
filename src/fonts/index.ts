import { Inter, Poppins, Outfit } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export { inter, poppins, outfit };
