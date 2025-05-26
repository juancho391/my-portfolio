export interface Tecnology {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  tecnologies: Tecnology[];
}
