import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { List, X } from "phosphor-react";

const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const openMenu = () => {
    setMenuIsOpen(true);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <header className="w-full px-6 py-4 h-20 bg-primary flex items-center justify-between fixed top-0 left-0 z-[999]">
      {/* logo */}
      <h1 className="text-white font-header text-2xl lg:text-4xl">
        Xbos Series S
      </h1>

      {/* Hamburguer button */}
      <button className="lg:hidden" onClick={openMenu}>
        <List size={32} color="#e1e1e1" weight="bold" />
      </button>

      {/* List navbar */}
      <nav
        className={`fixed right-0 top-0 bottom-0 text-3xl w-screen h-screen bg-white p-8 text-black md:w-1/3 md:text-2xl lg:relative lg:w-auto lg:h-auto lg:bg-opacity-0 lg:flex lg:text-white lg:text-lg ${
          !menuIsOpen && "hidden"
        }`}
      >
        {/* close button */}
        <button
          className="absolute right-4 top-4 lg:hidden"
          onClick={closeMenu}
        >
          <X size={32} color="#211a1d" weight="bold" />
        </button>

        {/* Link list */}
        <ul className="flex items-center flex-col justify-center gap-10 w-full h-full lg:w-auto lg:h-auto lg:gap-8 lg:flex-row font-sans">
          <li
            className="hover:font-extrabold hover:text-grey lg:hover:text-white transition-all ease duration-75"
            onClick={closeMenu}
          >
            <Link href="#initial">INÍCIO</Link>
          </li>
          <li
            className="hover:font-extrabold hover:text-grey lg:hover:text-white transition-all ease duration-100"
            onClick={closeMenu}
          >
            <Link href="#specifications">ESPECIFICAÇÕES</Link>
          </li>
          <li
            className="hover:font-extrabold hover:text-grey lg:hover:text-white transition-all ease duration-100"
            onClick={closeMenu}
          >
            <Link href="#images">IMAGENS</Link>
          </li>
          <li
            className="hover:font-extrabold hover:text-grey lg:hover:text-white transition-all ease duration-100"
            onClick={closeMenu}
          >
            <Link href="#videos">VÍDEOS</Link>
          </li>
          <li
            className="hover:font-extrabold hover:text-grey lg:hover:text-white  transition-all ease duration-100"
            onClick={closeMenu}
          >
            <Link href="#contact">CONTATAR</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
