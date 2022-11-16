import Image from "next/image";
import React from "react";

const PhoneCovers = () => {
  return (
    <section className="update-template-2 orangebirds">
      <div className="decorationbox1 orangebox"></div>
      <div className="decorationbox2">
        <Image alt=" " src="/phonecover.png" width="300px" height="300px" />
      </div>
      <div className="text-container magentabottomborder">
        <div className="title">Handpainted Phone Covers</div>
        <div className="description">
          Choose an image for us to paint that image on your phone cover for Tk.
          500 or a new phone cover for Tk. 700 or commission an original artwork
          on your phone cover for a higher price depending on the artwork
          decided.
        </div>
      </div>
    </section>
  );
};

export default PhoneCovers;
