import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex items-center border border-white w-full justify-between p-10 mt-10 relative bottom-0">
      <p>CopyRight © Juan Esteban Bedoya Vasquez</p>
      <div className="flex gap-3">
        <FaLinkedin className="text-4xl" />
        <FaGithub className="text-4xl" />
      </div>
    </footer>
  );
};
