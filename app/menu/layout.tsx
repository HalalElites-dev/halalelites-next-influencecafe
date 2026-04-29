import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore the delicious and scientifically-backed menu of premium coffees, teas, and naturally sweetened desserts at Influence Café.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
