"use client";
import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import Contact from "./components/Contact";
import projects from "@/app/projects/projects.json";
import Testimonials from "./components/Testimonials";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

        <div className="absolute top-[-20%] left-[-20%] h-[1200px] w-[1200px] rounded-full bg-[radial-gradient(circle_400px_at_30%_300px,#fbfbfb36,transparent)]" />
      </div>
      <main className="relative z-10 flex flex-col items-center gap-16 p-8 sm:p-20">
        <Hero />
        {/* <Stack /> */}
        <Projects projects={projects} />
        <Contact />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
