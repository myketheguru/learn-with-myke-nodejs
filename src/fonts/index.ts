import { Inter, Poppins, Outfit, DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dmSans" });

export { inter, poppins, outfit, dmSans };
