import React from "react";
import CornyxArtStore from "./sections/CornyxArtStore";
import Hoodies from "./sections/Hoodies";
import PhoneCovers from "./sections/PhoneCovers";
import Hero from "./sections/Hero";
import JournalKit from "./sections/JournalKit";
import ArtistsToolkit from "./sections/ArtistsToolkit";
import SpotifyCodes from "./sections/SpotifyCodes";
import Portraits from "./sections/Portraits";
import WallMurals from "./sections/WallMurals";
import Blogs from "./sections/Blogs";
import LineDesigns from "./sections/LineDesigns";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Blogs />
      <CornyxArtStore />
      <PhoneCovers />
      <Hoodies />
      <JournalKit />
      <ArtistsToolkit />
      <SpotifyCodes />
      <Portraits />
      <WallMurals />
      <LineDesigns />
    </div>
  );
};

export default Landing;
