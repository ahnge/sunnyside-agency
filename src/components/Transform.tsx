import React from "react";
import Title from "./Title";

const Transform = () => {
  return (
    <div className="flex w-full flex-col md:flex-row-reverse">
      <div className="bg-egg-mobile sm:bg-egg-desktop flex-1 bg-cover bg-center min-h-[50vh] lg:min-h-[65vh]"></div>
      <div className="flex-1 text-center md:text-left flex items-center">
        <div className="p-10 max-w-lg mx-auto">
          <Title text="Transform your brand" />
          <p className="text-neutral-dark-grayish-blue mt-5">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="font-fraunces uppercase text-neutral-very-dark-desaturated-blue mt-10 hover:border-b-primary-yellow hover:border-b-4 border-b-4">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transform;
