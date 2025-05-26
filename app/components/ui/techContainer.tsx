import { Tecnology } from "@/app/type";

export const TechContainer = ({ id, name }: Tecnology) => {
  return (
    <div className="border-1 rounded-lg p-2  flex-grow-1 text-center">
      <span>{name}</span>
    </div>
  );
};
