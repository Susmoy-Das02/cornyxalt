import Image from "next/image";
import React from "react";

const JournalKit = () => {
  return (
    <section className="update-template-2 magentabirds">
      <div className="decorationbox1 magentabox"></div>
      <div className="decorationbox2">
        <Image
          alt=" "
          src="/homelesstoforbeslist.png"
          width="300px"
          height="300px"
        />
      </div>
      <div className="text-container magentabottomborder">
        <div className="title">
          {" "}
          <div className="subtitle">Homeless To Forbes List Journal Kit</div>
        </div>
        <div className="description">
          Design your life using our The Weeknd themed kit named Homeless To
          Forbes List, and motivate yourself to get out of your lowest point to
          your highest, by listening to The Weeknds music and looking at your
          walls, your phone, your computer or your diary after using our kit
          items on them.
        </div>
      </div>
    </section>
  );
};

export default JournalKit;
