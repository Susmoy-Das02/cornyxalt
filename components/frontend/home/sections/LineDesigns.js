import Image from "next/image";
import React from "react";

const LineDesigns = () => {
  return (
    <section className="update-template-2">
      <div className="decorationbox1"></div>
      <div className="decorationbox2">
        <Image alt=" " src="/patterndesign.png" width="300px" height="300px" />
      </div>
      <div className="text-container">
        <div className="title">Pattern & Line Designs</div>
        <div className="description">
          Buy the rights to our existing patterns or commission original
          patterns, lineworks, icons, tattoo designs, etc. by contacting us.
        </div>
      </div>
    </section>
  );
};

export default LineDesigns;
