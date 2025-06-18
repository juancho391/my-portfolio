export type Tecnology = {
  id: number;
  name: string;
};

export type TechWithIcon = {
  id: number;
  name: string;
  icon?: React.ReactNode;
};

export type Image = {
  id: number;
  src: string;
};
export type Project = {
  id: number;
  title: string;
  description: string;
  descriptionDetail: string;
  desafio: string;
  link: string;
  images: Image[];
  tecnologies: Tecnology[];
};
