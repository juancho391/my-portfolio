"use client";
import { Project } from "@/app/type";
import { useRouter } from "next/navigation";
import { TechContainer } from "./techContainer";
type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  const router = useRouter();
  const handlerClick = (projectId: number) => {
    console.log(`Proyecto ${projectId} clickeado`);
    router.push(`projects/${project.link}`);
  };
  return (
    <div className=" border-l-4 border-white w-full h-full p-3 justify-self-center flex flex-col gap-3 rounded-lg bg-blue- hover:scale-105 transition-all duration-200">
      <h1 className="font-extrabold text-xl">{project.title}</h1>
      <p className="text-lg ">{project.description}</p>
      <div className="flex gap-2 flex-wrap ">
        {project.tecnologies.map((tech) => (
          <TechContainer
            key={tech.id}
            id={tech.id}
            name={tech.name}
          ></TechContainer>
        ))}
      </div>
      <button
        onClick={() => handlerClick(project.id)}
        className="w-full p-2 border-1 border-white rounded-lg cursor-pointer"
      >
        Ver mas detalles
      </button>
    </div>
  );
};
