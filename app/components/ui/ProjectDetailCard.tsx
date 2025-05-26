"use client";
import { useContext } from "react";
import { Context } from "@/context/Context";
import { Project } from "@/app/type";
import { TechContainer } from "./techContainer";
import { SlideData } from "./Carrousel";
import { Carousel } from "./Carrousel";
type Props = {
  link: string;
};

export function ProjectDetailCard({ link }: Props) {
  const { projects } = useContext(Context);
  const project: Project = projects.find(
    (project: Project) => project.link === link
  );
  if (!project) return <div>Proyecto no encontrado</div>;

  const slides: SlideData[] = [
    {
      src: "/images/sorteos/sortesHome.png",
    },
    {
      src: "/images/sorteos/sorteosCompra.png",
    },
    {
      src: "/images/sorteos/sortesHome.png",
    },
    {
      src: "/images/sorteos/sorteosCompra.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-full gap-10 mt-5">
      <h1 className="font-extrabold text-2xl">{project.title}</h1>
      <div className="flex flex-wrap">
        {project.tecnologies.map((tech) => (
          <TechContainer key={tech.id} id={tech.id} name={tech.name} />
        ))}
      </div>
      <div>
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
