"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoImage from "../../public/images/logo.svg";
import hamburgerImage from "../../public/images/icon-hamburger.svg";
import MobileMenu from "./MobileMenu";
import { debounce } from "../utilities/helpers";

const Nav = () => {
  // Mobile menu state
  const [open, setOpen] = useState(false);

  // Sticky navbar that hides on scroll
  // https://www.rolandwrites.com/blog/sticky-navbar-hides-scroll

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav>
      <div
        className={`w-full p-10 ${
          visible ? "top-0" : "-top-32 shadow-sm"
        } transition bg-neutral-white/5 backdrop-blur-md fixed mx-0`}
      >
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
