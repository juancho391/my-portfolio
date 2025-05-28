"use client";
import { createContext, ContextType } from "react";
import { Project } from "@/app/type";
// import { desc } from "motion/react-client";

const Context = createContext<any>(null);

function ContextProvider({ children }: { children: React.ReactNode }) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}

export { Context, ContextProvider };
