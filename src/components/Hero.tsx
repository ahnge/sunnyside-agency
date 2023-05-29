import React from "react";
import Image from "next/image";
import downArrow from "../../public/images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <div className="bg-hero-mobile flex flex-col justify-center items-center w-full min-h-screen bg-center md:bg-hero-desktop bg-cover p-10">
      <h1 className="font-fraunces text-5xl/tight tracking-widest text-neutral-white text-center">
        WE ARE CREATIVES
      </h1>
      <Image
        src={downArrow}
        className="mt-16 animate-bounce"
        alt="Down arrow icon"
      ></Image>
    </div>
  );
};

export default Hero;
