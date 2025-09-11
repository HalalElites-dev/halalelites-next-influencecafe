import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";


const playfair = Playfair_Display({
  variable: "--font-heading", 
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700', '800', '900'] 
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title:
    "Influence Café | Specialty Coffee, Modern Desserts & Wellness Hub in Toledo",
  description:
    "Discover Influence Café at Central & Secor in Toledo, OH — premium coffee, sugar-free desserts, and science-backed wellness insights. Every sip and bite comes with knowledge and flavor.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
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
