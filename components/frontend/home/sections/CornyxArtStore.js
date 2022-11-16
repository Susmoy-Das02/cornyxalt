import Image from "next/image";
import React from "react";

const CornyxArtStore = () => {
  return (
    <section className="update-template-1">
      <div className="decoration-container">
        <div className="decorationbox1">
          <Image
            alt=" "
            src="/latestproduct2.png"
            width="300px"
            height="300px"
          />
        </div>
        <div className="decorationbox2"></div>
        <div className="decorationbox3">
          <Image alt=" " src="/latestproduct1.png" layout="fill" />
        </div>
      </div>
      <div className="text-container">
        <div className="title">Cornyx Art Store</div>
        <div className="subtitle">New Goth Till Death Journal Kit dropped!</div>
        <div className="description">
          Design your life in a gothic way by using our new Goth Till Death
          journal kit, to put on your walls, your phone, your computer or your
          diary.
        </div>
        <a href="www.cornyx.art" className="store-button">
          Go to the Cornyx Art Store
        </a>
      </div>
    </section>
  );
};

export default CornyxArtStore;
