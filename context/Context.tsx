"use client";
import { createContext, ContextType } from "react";
import { Project } from "@/app/type";

const Context = createContext<any>(null);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const projects = [
    {
      id: 1,
      title: "Aplicacion de gestión de sorteos",
      description:
        "Sistema para gestionar sorteos, incluye gestion de pagos, generacion de numeros aleatorios, envio de correos y un panel de administracion.",
      link: "sorteos",
      tecnologies: [
        { id: 1, name: "NextJs" },
        { id: 2, name: "Postgresql" },
        { id: 3, name: "Python" },
        { id: 4, name: "FastApi" },
        { id: 5, name: "Docker" },
      ],
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Descripción del proyecto 2",
      tecnologies: [{ id: 1, name: "Python" }],
    },
  ];

  return (
    <Context.Provider
      value={{
        projects,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
