import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { FaRocket } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";

// Ícono SVG personalizado
const ContactForm = () => {
  return (
    <div className="w-full h-full border-1 border-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-5">
        Listo para llevar tu presencia digital al siguiente nivel?
      </h2>
      <form className="flex flex-col gap-3">
        <label htmlFor="">Nombre</label>
        <input
          id="name"
          type="text"
          placeholder="Tu nombre"
          className="border border-gray-500 rounded-md p-2"
        />
        <label htmlFor="">Correo electrónico</label>
        <input
          id="email"
          type="email"
          placeholder="tu@gmail.com"
          className="border border-gray-500 rounded-md p-2"
        />
        <label htmlFor="">Mensaje</label>
        <textarea
          id="message"
          placeholder="Hablemos de tu proyecto, objetivos y plazos"
          className="border border-gray-500 rounded-md p-2 h-40"
        />
        <button className="border border-gray-500 bg-gray-700 rounded-md p-1 cursor-pointer">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};
const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const Card = ({
  title,
  text,
  icon,
  children,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      {/* Iconos decorativos en las esquinas */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      {/* Efecto revelado al pasar el mouse */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido del Card */}
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {text}
        </p>
      </div>
    </div>
  );
};

// Componente principal Contact
const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-extrabold">Contacto</h1>
      <div className="w-20 bg-white h-1 mt-4 rounded-full "></div>
      <div className="py-15 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto">
        <Card
          title="Software a medida"
          icon={<FaRocket className="text-5xl" />}
          text="Desarrollo adaptado exactamente a tus necesidades específicas"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          title="Comunicación constante"
          icon={<IoChatbubblesOutline className="text-5xl" />}
          text="Seguimiento y actualización durante todo el proceso"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [255, 0, 0], // rojo puro
              [220, 38, 38], // rojo oscuro
            ]}
            dotSize={5}
          />
          {/* Gradiente radial decorativo */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>

        <Card
          title="Tecnología moderna"
          icon={<IoCodeSlash className="text-5xl" />}
          text="Implementaciones con las últimas tecnologías del mercado"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
