import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import { Bebas_Neue, Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400"
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snapper’s Fried Chicken & Seafood is Toledo’s go-to spot for hot, crispy chicken and fresh seafood platters. Order now or call 419-407-5670!",
  description: "Toledo fried chicken, seafood restaurant, chicken wings, fish combos, carryout seafood Toledo, Snapper's menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bebasNeue.variable} ${openSans.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <Header />
             {children}
             <Footer />
  
          </ThemeProvider>
      </body>
    </html>
  );
}
