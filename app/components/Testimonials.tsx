"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Jhostin Posada",
      title: "GANADOR BECA UNILIBRE",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <div className="">
      <div className="text-center h-full">
        <h2 className="font-extrabold text-2xl">
          Lo que dicen mis clientes y compañeros
        </h2>
      </div>
      <div className="h-50 rounded-md ">
        <InfiniteMovingCards
          direction="right"
          speed="slow"
          items={testimonials}
          pauseOnHover={true}
        />
      </div>
    </div>
  );
};

export default Testimonials;
