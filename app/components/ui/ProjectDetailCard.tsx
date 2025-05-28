"use client";
import { TechContainer } from "./techContainer";
import { Carousel } from "./Carrousel";
import projects from "@/app/projects/projects.json";
import { Tecnology } from "@/app/type";
type Props = {
  link: string;
};

type PropsTechCard = {
  tecnologies: Tecnology[];
  name: string;
};
const TechCards = ({ tecnologies, name }: PropsTechCard) => {
  return (
    <div className="text-left flex flex-col gap-3">
      <div className="w-20 bg-white h-1 rounded-full self-center"></div>

      <h2 className="text-xl font-semibold">{name}:</h2>
      <ol className="list-disc">
        {tecnologies?.map((tool) => (
          <li key={tool.id}>{tool.name}</li>
        ))}
      </ol>
    </div>
  );
};

export function ProjectDetailCard({ link }: Props) {
  const project = projects.find((project) => project.link === link);

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-full gap-10 mt-5">
      <h1 className="font-extrabold text-2xl">{project.title}</h1>
      <div className="flex flex-wrap gap-3">
        {project.tecnologies.map((tech) => (
          <TechContainer key={tech.id} id={tech.id} name={tech.name} />
        ))}
      </div>
      <div>
        <Carousel slides={project.images} />
      </div>
      <div className="flex flex-col gap-5 w-full h-full ">
        <h1 className="text-2xl font-extrabold">Descripcion del proyecto</h1>
        <div className="w-20 bg-white h-1 rounded-full self-center"></div>

        <p>{project.descriptionDetail}</p>
        <h1 className="text-2xl font-extrabold">Desafios tecnicos</h1>
        <div className="w-20 bg-white h-1 rounded-full self-center"></div>

        <p>{project.desafio}</p>
        <h1 className="text-2xl font-extrabold">Tecnologias utilizadas</h1>
        <TechCards tecnologies={project.tecnologiesBack} name={"Backend"} />
        <TechCards tecnologies={project.tecnologiesFront} name={"Frontend"} />
        <TechCards
          tecnologies={project.additionalTools}
          name={"Herramientas adicionales"}
        />
      </div>
    </div>
  );
}
