"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/image1.jpg",
    "/image2.jpg",
    "/banner1.jpg",
    "/gallery1.jpg",
    "/gallery2.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Whitechapel Khela Ghar
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Food, Games, and Entertainment
          </p>
          <a
            href="#services"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
