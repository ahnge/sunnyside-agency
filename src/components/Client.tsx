import React from "react";
import Image, { StaticImageData } from "next/image";

type PropsTypes = {
  src: StaticImageData;
  text: string;
  name: string;
  role: string;
};

const Client = ({ src, text, name, role }: PropsTypes) => {
  return (
    <div className="flex flex-col items-center p-5 max-w-md mx-auto">
      <Image
        src={src}
        alt="client profile picture"
        className="rounded-full max-w-[4rem]"
      ></Image>
      <p className="mt-5 text-neutral-very-dark-grayish-blue">{text}</p>
      <div className="mt-5 font-bold font-fraunces">{name}</div>
      <div className="text-base text-neutral-grayish-blue">{role}</div>
    </div>
  );
};

export default Client;
