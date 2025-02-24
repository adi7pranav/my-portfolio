  import { ThemeProvider } from "@/context/ThemeContext";
  import type { Metadata } from "next";
  import { Geist, Geist_Mono } from "next/font/google";
  import Navbar from "@/components/Navbar";
  import Background from "@/components/background"
  import "./globals.css";

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
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
