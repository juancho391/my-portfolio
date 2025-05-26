"use client";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

export function Hero() {
  return (
    <div className="h-full w-full text-center sm:p-8">
      <h1 className="sm:mb-7 font-extrabold inline-block ">
        <TextGenerateEffect words="Hola, soy" className="text-3xl sm:text-5xl"/>
        </h1>
        <h1 className="mb-7 font-extrabold inline-block">
        < TextGenerateEffect words="Juan Esteban" className="text-3xl sm:text-5xl"/>
        </h1>
      <h2 className="text-2xl sm:text-3xl font-bold mb-7 ">Desarrollador de software</h2>
      <p className="text-lg sm:text-xl">
        Desarrollador full stack apasionado por la tecnología y la creacion de
        soluciones eficientes y escalables, me encanta crear aplicaciones que le
        hagan la vida mas facil a las personas y solucionar problemas, lo cual me llevo a estudiar 
        ingenieria de sistemas, mi enfoque se centra en escribir codigo limpio y mantenible, siguiendo las mejores practicas,
        mi punto fuerte es el backend, pero tengo solidos conocimientos en frontend
      </p>
    </div>
  );
}
