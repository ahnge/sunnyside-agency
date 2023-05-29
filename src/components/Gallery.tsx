import React from "react";
import Image from "next/image";
import milkImage from "../../public/images/desktop/image-gallery-milkbottles.jpg";
import orangeImage from "../../public/images/desktop/image-gallery-orange.jpg";
import coneImage from "../../public/images/desktop/image-gallery-cone.jpg";
import sugarcubesImage from "../../public/images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      <Image
        src={milkImage}
        alt="milk bottles"
        className="aspect-square md:aspect-auto"
      ></Image>
      <Image
        src={orangeImage}
        alt="orange Image"
        className="aspect-square md:aspect-auto"
      ></Image>
      <Image
        src={coneImage}
        alt="milk bottles"
        className="aspect-square md:aspect-auto"
      ></Image>
      <Image
        src={sugarcubesImage}
        alt="sugar cube images"
        className="aspect-square md:aspect-auto"
      ></Image>
    </div>
  );
};

export default Gallery;
