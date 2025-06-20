import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="relative inline-block w-full">
      <div className="flex items-center justify-between w-full p-10 gap-x-3">
        <p>CopyRight © Juan Esteban Bedoya Vasquez</p>
        <div className="gap-3 sm:flex">
          <Link
            href={"https://www.linkedin.com/in/juan-esteban-bedoya-vasquez/"}
          >
            <FaLinkedin className="text-4xl cursor-pointer" />
          </Link>
          <Link href={"https://github.com/juancho391"}>
            <FaGithub className="text-4xl cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
