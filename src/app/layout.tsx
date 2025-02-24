  import { ThemeProvider } from "@/context/ThemeContext";
  import type { Metadata } from "next";
  import { Montserrat } from "next/font/google";
  import Navbar from "@/components/Navbar";
  import Background from "@/components/background"
  import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: "Pranav Aditya",
    description: "Portfolio",
  };

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          <ThemeProvider>
            <Background/>
              <Navbar />
              {children}
          </ThemeProvider>
        </body>
      </html>
    );
  }
