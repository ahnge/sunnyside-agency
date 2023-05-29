import React from "react";

interface PropsType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ open, setOpen }: PropsType) => {
  return (
    <>
      <div
        className={`fixed lg:hidden inset-0 cursor-pointer ${
          open ? "" : "hidden"
        }`}
        onClick={() => setOpen((p) => !p)}
      ></div>
      <div
        className={`bg-neutral-white z-10 flex-col items-center p-8 fixed top-28 w-10/12 left-1/2 -translate-x-1/2 text-neutral-dark-grayish-blue space-y-5 font-bold} lg:hidden  ${
          open ? "flex" : "hidden"
        }`}
      >
        <a href="#" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#" onClick={() => setOpen(false)}>
          Services
        </a>
        <a href="#" onClick={() => setOpen(false)}>
          Projects
        </a>
        <a
          href="#"
          className="px-6 py-3 bg-primary-yellow text-neutral-very-dark-desaturated-blue uppercase rounded-full font-fraunces"
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default MobileMenu;
