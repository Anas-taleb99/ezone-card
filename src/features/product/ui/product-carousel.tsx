"use client";
import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getProductImageUrl } from "@/shared/utils";

interface ProductImageCarouselProps {
  images: TProductImages[];
}

export function ProductCarousel({ images }: ProductImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  console.log({ images });
  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="relative w-[377px] h-[377px] shrink-0 bg-gray-200 rounded-lg overflow-hidden">
      <Image
        src={getProductImageUrl(images[currentImageIndex].Src)}
        alt={`Product image ${currentImageIndex + 1}`}
        fill
        priority
        sizes="(max-width: 377px) 100vw, 377px"
        className={`object-cover transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft size={80} strokeWidth={0.75} color="#007aff" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight size={80} strokeWidth={0.75} color="#007aff" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentImageIndex(index);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
              currentImageIndex === index ? "bg-[#007aff]" : "bg-gray-300"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
