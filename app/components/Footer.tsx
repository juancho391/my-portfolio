import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="flex items-center w-full justify-between p-10 relative">
      <p>CopyRight © Juan Esteban Bedoya Vasquez</p>
      <div className="flex gap-3">
        <Link href={"https://www.linkedin.com/in/juan-esteban-bedoya-vasquez/"}>
          <FaLinkedin className="text-4xl cursor-pointer" />
        </Link>
        <Link href={"https://github.com/juancho391"}>
          <FaGithub className="text-4xl cursor-pointer" />
        </Link>
      </div>
    </footer>
  );
};
