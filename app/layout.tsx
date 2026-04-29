import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnoucementBar";



const roboto = Roboto({
  variable: "--font-heading", 
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700', '800', '900'] 
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://influencecafe.com'),
  title: {
    default: "Influence Café",
    template: "%s | Influence Café",
  },
  description:
    "Discover Influence Café at Central & Secor in Toledo, OH — premium coffee, naturally sweetened desserts, and science-backed wellness insights. Every sip and bite comes with knowledge and flavor.",
  keywords: ["Influence Café", "Toledo OH coffee shop", "premium coffee", "natural desserts", "wellness cafe", "science-backed coffee"],
  authors: [{ name: "Influence Café" }],
  openGraph: {
    title: "Influence Café | Premium Coffee & Wellness in Toledo, OH",
    description: "Discover Influence Café at Central & Secor in Toledo, OH — premium coffee, naturally sweetened desserts, and science-backed wellness insights.",
    url: "/",
    siteName: "Influence Café",
    images: [
      {
        url: "/bannerz.webp",
        width: 1200,
        height: 630,
        alt: "Influence Café",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influence Café | Premium Coffee & Wellness",
    description: "Discover Influence Café at Central & Secor in Toledo, OH — premium coffee, naturally sweetened desserts, and science-backed wellness insights.",
    images: ["/bannerz.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={`${roboto.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnnouncementBar />
          <Header />
          {children}
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}
