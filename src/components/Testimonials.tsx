import React from "react";
import Client from "./Client";
import emilyProfile from "../../public/images/image-emily.jpg";
import thomasProfile from "../../public/images/image-thomas.jpg";
import jennieProfile from "../../public/images/image-jennie.jpg";

const Testimonials = () => {
  return (
    <div className="py-12 lg:py-20 text-center bg-neutral-white">
      <h1 className="uppercase font-fraunces text-xl tracking-widest text-neutral-dark-grayish-blue">
        Client Testimonials
      </h1>
      <div className="flex flex-col mt-5 lg:flex-row max-w-7xl mx-auto">
        <Client
          src={emilyProfile}
          name="Emily R."
          text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          role="Marketing Director"
        />
        <Client
          src={thomasProfile}
          name="Thomas S."
          text="Sunnyside&#39;s enthusiasm coupled with their keen interest in our brand&#39;s success made it a satisfying and enjoyable experience."
          role="Chief Operating Officer"
        />
        <Client
          src={jennieProfile}
          name="Jennie F."
          text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          role="Bussiness Owner"
        />
      </div>
    </div>
  );
};

export default Testimonials;
