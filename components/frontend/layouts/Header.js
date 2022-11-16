import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Image src="/cornyx-logo.png" width={40} height={40} alt="" />
      </div>
      <div className="brandname">CORNYX ART STUDIO</div>
    </div>
  );
};

export default Header;
