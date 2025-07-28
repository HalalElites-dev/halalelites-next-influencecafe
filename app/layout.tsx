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
  title: "Maryam's Halal Taste of New York : Come and try our delicious Halal food Chicken & Lamb Tikka Platter comes with our signature sauce !",
  description: "Columbus Halal Chicken over rice, Maryam's halal menu",
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
