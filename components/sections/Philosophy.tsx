import React from 'react';
import Image from 'next/image';

const Philosophy = () => {
  return (
    <section className="relative w-full max-w-7xl xl:max-w-[1700px] h-72 sm:h-96 md:h-[520px] overflow-hidden mx-auto rounded-md mb-20 bg-white px-4 sm:px-6">
      {/* Background Image */}
      <Image
        src="/philo.jpg" // Change this to your image path
        alt="A barista pouring latte art"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="brightness-50"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-end p-8 md:p-16">
        <h2 className="text-white text-2xl md:text-4xl font-bold leading-snug font-body">
          BLENDING TRADITION, WELLNESS, AND SCIENCE IN EVERY CUP
        </h2>
      </div>
    </section>
  );
};

export default Philosophy;