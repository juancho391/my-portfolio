"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

export interface SlideData {
  id: number;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

export function Carousel({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(1);
  const currentSlide = slides.find((slide) => slide.id === current);

  const handleClickSlide = (id: number) => {
    console.log(id);
    setCurrent(id);
  };
  return (
    <div className="flex flex-col w-full h-full gap-3">
      <div>
        {currentSlide ? (
          <img className="border-white border-1" src={currentSlide.src} />
        ) : null}
      </div>
      <div className="w-full flex flex-wrap gap-2 items-center justify-center">
        {slides.map((slide) => (
          <img
            src={slide.src}
            key={slide.id}
            className={`w-30 ${
              slide.id === current
                ? "border-3 border-white"
                : "border-1 border-gray-300"
            }`}
            onClick={() => handleClickSlide(slide.id)}
          />
        ))}
      </div>
    </div>
  );
}
