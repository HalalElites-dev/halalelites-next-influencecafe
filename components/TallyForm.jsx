"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TallyModalButton({
  id = "lbal8W",
  children = "Take Quiz",
  className = "",
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = () => window.Tally?.loadEmbeds();
    document.body.appendChild(script);
  }, []);

  return (
    <Button
      data-tally-open={id}
      data-tally-layout="modal"
      data-tally-width="500"
      className={
        "px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform " +
        className
      }
    >
      {children}
    </Button>
  );
}
