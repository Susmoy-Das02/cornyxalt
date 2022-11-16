import Image from "next/image";
import React from "react";

const SpotifyCodes = () => {
  return (
    <section className="update-template-2 bluebirds">
      <div className="decorationbox1 bluebox"></div>
      <div className="decorationbox2">
        <Image
          alt=" "
          src="/spotifycodedrop.png"
          width="300px"
          height="300px"
        />
      </div>
      <div className="text-container redbottomborder">
        <div className="title">Handpainted Spotify Codes</div>
        <div className="description">
          Choose a song and an image for us to make a cuter version of that
          image and make a plaque of our art and your song. Order for yourself
          or a dear one to make their day special, for Tk. 200.
        </div>
      </div>
    </section>
  );
};

export default SpotifyCodes;
