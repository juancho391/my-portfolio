"use client";
import { ProjectCard } from "./ui/projectsCard";
import { Project } from "@/app/type";

type Props = {
  projects: Project[];
};

export function Projects({ projects }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <h1 className="text-3xl font-extrabold">Mis Proyectos</h1>
      <div className="w-20 bg-white h-1 mt-4 mb-6 rounded-full "></div>
      <div className="flex flex-col w-full h-full gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
