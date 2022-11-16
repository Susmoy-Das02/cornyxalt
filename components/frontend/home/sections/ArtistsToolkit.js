import Image from "next/image";
import React from "react";

const ArtistsToolkit = () => {
  return (
    <section className="update-template-2 magentabirds">
      <div className="decorationbox1 magentabox"></div>
      <div className="decorationbox2">
        <Image alt=" " src="/artisttoolkit.png" width="300px" height="300px" />
      </div>
      <div className="text-container bluebottomborder">
        <div className="title">Customized Artists Toolkit</div>
        <div className="description">
          Choose an image and well handpaint it on a 32pcs Artists Toolkit
          (sketchbook included) so that you can gift your artist friends a gift
          theyll never forget on their special day, for Tk. 1300.
        </div>
      </div>
    </section>
  );
};

export default ArtistsToolkit;
