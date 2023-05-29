import React from "react";
import Title from "./Title";

const Standout = () => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="bg-standout-mobile lg:bg-standout-desktop flex-1 bg-cover bg-center min-h-[50vh] lg:min-h-[65vh]"></div>
      <div className="flex-1 text-center md:text-left flex items-center">
        <div className="p-10 max-w-lg mx-auto">
          <Title text="Stand out to the right audience" />
          <p className="text-neutral-dark-grayish-blue mt-5">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we&#39;ll build and
            extend your brand in digital places.
          </p>
          <button className="font-fraunces uppercase text-neutral-very-dark-desaturated-blue mt-10 hover:border-b-primary-soft-red border-b-4">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Standout;
