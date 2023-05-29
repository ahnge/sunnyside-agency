import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <h1 className="font-fraunces font-bold text-4xl text-neutral-very-dark-desaturated-blue">
      {text}
    </h1>
  );
};

export default Title;
