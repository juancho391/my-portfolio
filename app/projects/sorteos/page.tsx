"use client";
import { use, useContext } from "react";
import { Context } from "@/context/Context";
import { ProjectDetailCard } from "@/app/components/ui/ProjectDetailCard";
import { Project } from "@/app/type";

export default function Sorteos() {
  return <ProjectDetailCard link="sorteos" />;
}
