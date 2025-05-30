"use client";
import { Project } from "@/app/type";
import { useContext } from "react";
import { Context } from "@/context/Context";

export default function ProjectDetail() {
  const { projects } = useContext(Context);

  return <div>proyecto</div>;
}
