import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmacology & Science",
  description: "Discover the science behind our ingredients at Influence Café. Learn about how caffeine, hibiscus, and natural sweeteners affect the body.",
};

export default function PharmacologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
