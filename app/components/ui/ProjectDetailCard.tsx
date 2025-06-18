"use client";
import { TechContainer } from "./techContainer";
import { Carousel } from "./Carrousel";
import projects from "@/app/projects/projects.json";
import { TechWithIcon } from "@/app/type";
import { StackCard } from "./StackCard";
// Icons
import { SiTailwindcss } from "react-icons/si";
import {
  PythonIcon,
  DockerLogo,
  NextjsLogo,
  FastAPiLogo,
  PostgresqLogo,
  DjangoIcon,
  GitHubLogo,
  GitLogo,
  ReactLogo,
} from "./StackCard";

type Props = {
  link: string;
};

type PropsTechCard = {
  tecnologies: TechWithIcon[];
};

const iconsList = [
  { id: 1, icon: <NextjsLogo /> },
  { id: 2, icon: <PythonIcon /> },
  { id: 3, icon: <DockerLogo /> },
  { id: 4, icon: <FastAPiLogo /> },
  { id: 5, icon: <PostgresqLogo /> },
  { id: 6, icon: <GitLogo /> },
  { id: 7, icon: <GitHubLogo /> },
  { id: 8, icon: <SiTailwindcss className="text-5xl text-[#38B2AC]" /> },
  { id: 9, icon: <DjangoIcon /> },
  { id: 10, icon: <ReactLogo /> },
];

const TechCards = ({ tecnologies }: PropsTechCard) => {
  const tecnologiesWithIcons = tecnologies.map((tech) => {
    const icon = iconsList.find((icon) => icon.id === tech.id);
    return { ...tech, icon: icon ? icon.icon : null };
  });

  return (
    <div className="flex flex-wrap gap-3">
      {tecnologiesWithIcons.map((tech) => (
        <div
          key={tech.id}
          className="border-1 border-white rounded-lg p-2 h-25 text-center flex flex-col justify-center items-center gap-2 flex-grow-1"
        >
          <span className="flex items-center justify-center gap-2 grow-0">
            {tech.icon}
          </span>
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export function ProjectDetailCard({ link }: Props) {
  const project = projects.find((project) => project.link === link);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  const tecnologiesWithIcons = project.tecnologies.map((tech) => {
    const icon = iconsList.find((icon) => icon.id === tech.id);
    return { ...tech, icon: icon ? icon.icon : null };
  });

  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-full gap-10 mt-5 relative">
      <h1 className="font-extrabold text-2xl">{project.title}</h1>
      <div className="flex flex-wrap gap-3">
        {project.tecnologies.map((tech) => (
          <TechContainer key={tech.id} id={tech.id} name={tech.name} />
        ))}
      </div>
      <div>
        <Carousel slides={project.images} />
      </div>
      <div className="flex flex-col gap-5 w-full h-full items-center">
        <h1 className="text-2xl font-extrabold">Descripcion del proyecto</h1>
        <div className="w-20 bg-white h-1 rounded-full self-center"></div>
        <p>{project.descriptionDetail}</p>
        <h1 className="text-2xl font-extrabold">Desafios tecnicos</h1>
        <div className="w-20 bg-white h-1 rounded-full self-center"></div>
        <p>{project.desafio}</p>
        <h1 className="text-2xl font-extrabold">Tecnologias utilizadas</h1>
        <StackCard
          description={tecnologiesWithIcons.map((tech) => tech.name).join(", ")}
          tecnologies={tecnologiesWithIcons}
        />
      </div>
    </div>
  );
}
