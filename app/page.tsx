"use client";
import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import Contact from "./components/Contact";
import projects from "@/app/projects/projects.json";
import Testimonials from "./components/Testimonials";
import { TechCards } from "./components/TechStack";
export default function Home() {
  return (
    <main className="relative z-10 flex flex-col items-center gap-16 p-8 sm:p-20">
      <Hero />
      <Projects projects={projects} />
      <TechCards />
      <Contact />
      {/* <Testimonials /> */}
    </main>
  );
}
