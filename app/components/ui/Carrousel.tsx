"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

export interface SlideData {
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

export function CurrentSlide() {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center"></div>
  );
}
const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  return <img className="w-30" src={slide.src} alt="imagen del carrousel" />;
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

// const CarouselControl = ({
//   type,
//   title,
//   handleClick,
// }: CarouselControlProps) => {
//   return (
//     <button
//       className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
//         type === "previous" ? "" : ""
//       }`}
//       title={title}
//       onClick={handleClick}
//     >
//       <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
//     </button>
//   );
// };

interface CarouselProps {
  slides: SlideData[];
}

//Carrousel component that displays a list of slides
export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handleSlideClick = (index: number) => {
    console.log(`Slide ${index} clicked`);
  };

  return (
    <div className="relative w-[70vmin] h-[70vmin] mx-auto">
      <div className="flex flex-wrap justify-center w-full gap-1 ">
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </div>
    </div>
  );
}
