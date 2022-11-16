import Image from "next/image";
import React from "react";

const Hoodies = () => {
  return (
    <section className="update-template-2 magentabirds">
      <div className="decorationbox1 magentabox"></div>
      <div className="decorationbox2 ">
        <Image alt=" " src="/hoodie.png" width="300px" height="300px" />
      </div>
      <div className="text-container magentabottomborder">
        <div className="title">Handpainted Hoodies</div>
        <div className="description">
          Choose an image and well handpaint it on a quality hoodie for you or
          as a gift for someone you care about, for Tk. 1500.
        </div>
      </div>
    </section>
  );
};

export default Hoodies;
