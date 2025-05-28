"use client";
import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import { Contact } from "@/app/components/Contact";
import projects from "@/app/projects/projects.json";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Hero />
      {/* <Stack/> */}
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}
