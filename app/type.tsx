export type Tecnology = {
  id: number;
  name: string;
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
  tecnologiesBack: Tecnology[];
  tecnologiesFront: Tecnology[];
  additionalTools: Tecnology[];
};
