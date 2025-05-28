import { FaRocket } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
type CardProps = {
  title: string;
  text: string;
  icon?: React.ReactNode;
};
const Card = ({ title, text, icon }: CardProps) => {
  return (
    <div className="border-l-4 rounded-lg border-white p-5 w-full h-full mt-3 bg-gray-900 flex flex-col gap-3 items-center text-center">
      <div className="text-5xl">{icon}</div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-md text-center">{text}</p>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full">
      <h1 className="text-3xl font-extrabold ">Contacto</h1>
      <p className="text-md text-center">
        ¿tienes alguna duda o un proyecto en mente? ¡no dudes en contactarme
        para ayudarte alcanzar tus objetivos de negocio!
      </p>
      <div>
        <Card
          title="Desarrollo a la medida"
          text="Desarrollo adaptado a las necesidades especificas de tu negocio"
          icon={<FaRocket className="text-5xl" />}
        />
      </div>
    </div>
  );
};
