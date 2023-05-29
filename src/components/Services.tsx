import React from "react";
import GraphicDesign from "./GraphicDesign";
import Photography from "./Photography";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <GraphicDesign />
      <Photography />
    </div>
  );
};

export default Services;
