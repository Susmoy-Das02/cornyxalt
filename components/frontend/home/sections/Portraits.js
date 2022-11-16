import Image from "next/image";
import React from "react";

const Portraits = () => {
  return (
    <section className="update-template-2">
      <div className="decorationbox1"></div>
      <div className="decorationbox2">
        <Image alt=" " src="/portrait.png" width="300px" height="300px" />
      </div>
      <div className="text-container orangebottomborder">
        <div className="title">Original Artworks & Portraits</div>
        <div className="description">
          Tell us if you want a sword going through a star, a monster in the
          middle of a lake or whatever your imagination brings up and well draw
          it for you at a price depending on the idea, our artist and the canvas
          size and materials used.
        </div>
      </div>
    </section>
  );
};

export default Portraits;
