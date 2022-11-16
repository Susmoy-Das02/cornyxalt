import Image from "next/image";
import React from "react";

const WallMurals = () => {
  return (
    <section className="update-template-2 orangebirds">
      <div className="decorationbox1 orangebox"></div>
      <div className="decorationbox2">
        <Image alt=" " src="/wallmural2.png" width="300px" height="300px" />
      </div>
      <div className="text-container redbottomborder">
        <div className="title">Handpainted Wall Murals</div>
        <div className="description">
          Choose an image for us to paint that image on your personal wall or
          commission original artworks for your store or house walls for a price
          depending on the idea, our artists and the wall size required and the
          material of the surface to be painted on, for a minimum of Tk. 300 per
          square feet.
        </div>
      </div>
    </section>
  );
};

export default WallMurals;
