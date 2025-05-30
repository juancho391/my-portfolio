"use client";
import React from "react";

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
    >
      {children}
    </a>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="fixed mx-auto left-1/2 transform -translate-x-1/2 top-4 z-50 rounded-full border border-transparent bg-black  dark:border-white/[0.2] shadow-input flex justify-center space-x-8 px-8 py-4 w-85 sm:w-full  md:w-[40rem] lg:w-[50rem]">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </a>
  );
};
