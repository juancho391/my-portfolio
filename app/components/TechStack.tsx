import { TechWithIcon } from "@/app/type";
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
  MongoDBLogo,
  LinuxLogo,
} from "./ui/StackCard";

export const TechCards = () => {
  const tecnologies = [
    { id: 1, icon: <NextjsLogo />, name: "Next.js" },
    { id: 2, icon: <PythonIcon />, name: "Python" },
    { id: 3, icon: <DockerLogo />, name: "Docker" },
    { id: 4, icon: <FastAPiLogo />, name: "FastAPI" },
    { id: 5, icon: <PostgresqLogo />, name: "PostgreSQL" },
    { id: 6, icon: <GitLogo />, name: "Git" },
    { id: 7, icon: <GitHubLogo />, name: "GitHub" },
    {
      id: 8,
      icon: <SiTailwindcss className="text-5xl text-[#38B2AC]" />,
      name: "TailwindCSS",
    },
    { id: 9, icon: <DjangoIcon />, name: "Django" },
    { id: 10, icon: <ReactLogo />, name: "React" },
    { id: 11, icon: <MongoDBLogo />, name: "MongoDB" },
    { id: 12, icon: <LinuxLogo />, name: "Linux" },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-xl">
      <h1 className="text-3xl font-extrabold">Teconologias</h1>
      <div className="w-20 bg-white h-1 mt-4 mb-6 rounded-full "></div>
      <div className="flex flex-wrap gap-3">
        {tecnologies.map((tech) => (
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
    </div>
  );
};
