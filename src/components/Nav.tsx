"use client";

import React, { useState } from "react";
import Image from "next/image";
import logoImage from "../../public/images/logo.svg";
import hamburgerImage from "../../public/images/icon-hamburger.svg";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="w-full p-10 fixed top-0 mx-0">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div>
            <Image src={logoImage} alt="Logo of the sunnyside agency" />
          </div>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Image src={hamburgerImage} alt="Humberger menu"></Image>
          </div>
          <div className="hidden lg:flex items-center text-neutral-white space-x-10 font-bold">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a
              href="#"
              className="px-6 py-3 bg-neutral-white text-neutral-very-dark-desaturated-blue uppercase rounded-full font-fraunces hover:bg-opacity-30 transition hover:text-neutral-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Nav;
