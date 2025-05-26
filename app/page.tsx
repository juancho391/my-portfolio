"use client";
import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import { Contact } from "@/app/components/Contact";
import { useContext } from "react";
import { Context } from "@/context/Context";

export default function Home() {
  const { projects } = useContext(Context);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Hero />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}
