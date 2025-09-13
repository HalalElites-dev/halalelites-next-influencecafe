"use client";
import React from "react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  backgroundColor = "bg-blue-100",
}) => {
  return (
    <section
      className={`${backgroundColor} relative px-6 text-center`}
    >
      {/* Background extends behind navbar */}
      <div className="absolute inset-0 -z-10 " />

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
