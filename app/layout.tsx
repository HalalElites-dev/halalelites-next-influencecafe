import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import { Tajawal, Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal", // It's good practice to name the variable after the font
  subsets: ["latin", "arabic"], // Tajawal supports Arabic, so include it
  weight: ['200', '300', '400', '500', '700', '800', '900'] // Specify weights as an array of strings
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hadramout Restaurant: Toledo's Authentic Yemeni & Middle Eastern Cuisine. Experience Mandi, Haneeth, and more!",
  description: "Toledo Yemeni food, Middle Eastern restaurant, Mandi, Haneeth, Fahsah, Zurbian, Halal food Toledo, Hadramout menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${tajawal.variable} ${openSans.variable} antialiased`}
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
