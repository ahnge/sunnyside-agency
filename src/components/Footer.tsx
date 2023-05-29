import React from "react";
import Image from "next/image";
import facebookLogo from "../../public/images/icon-facebook.svg";
import instagramLogo from "../../public/images/icon-instagram.svg";
import twitterLogo from "../../public/images/icon-twitter.svg";
import pinterestLogo from "../../public/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="p-10 bg-primary-dark-moderate-cyan text-primary-dark-desaturated-cyan">
      <div className="flex flex-col max-w-md mx-auto">
        <h1 className="text-center font-bold text-3xl">sunnyside</h1>
        <div className="flex justify-between mt-5">
          <a href="#" className="hover:text-neutral-white transition">
            About
          </a>
          <a href="#" className="hover:text-neutral-white transition">
            Services
          </a>
          <a href="#" className="hover:text-neutral-white transition">
            Projects
          </a>
        </div>
        <div className="flex mt-10 justify-center space-x-5">
          <Image
            src={facebookLogo}
            alt="facebook logo"
            className="max-w-[5rem]"
          ></Image>
          <Image
            src={instagramLogo}
            alt="instagram logo"
            className="max-w-[5rem]"
          ></Image>
          <Image
            src={twitterLogo}
            alt="twitter logo"
            className="max-w-[5rem]"
          ></Image>
          <Image
            src={pinterestLogo}
            alt="pinterest logo"
            className="max-w-[5rem]"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Footer;
