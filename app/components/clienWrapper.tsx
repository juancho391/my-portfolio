"use client";

import { Menu, NavLink } from "@/app/components/ui/Navbar";

const navItems = [
  {
    name: "Sobre mí",
    link: "/#about",
  },
  {
    name: "Proyectos",
    link: "/#projects",
  },
  {
    name: "Contacto",
    link: "/#contact",
  },
];

export default function ClientMenuWrapper() {
  return (
    <Menu>
      {navItems.map((item) => (
        <NavLink key={item.name} href={`${item.link}`}>
          {item.name}
        </NavLink>
      ))}
    </Menu>
  );
}
