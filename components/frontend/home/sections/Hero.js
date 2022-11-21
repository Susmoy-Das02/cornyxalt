import Image from "next/image";
import React from "react";
import {
  FaPhoneVolume,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
const Hero = () => {
  return (
    <header>
      <div className="background-items">
        <div className="left-column">
          <Image alt=" " src="/cornyxcard.png" width="300px" height="300px" />
        </div>
        <div className="right-column"></div>
        <Image
          alt=" "
          className="headerbg"
          src="/website-header.png"
          layout="fill"
        />
      </div>
      <div className="text-container">
        <div className="motto">
          Flex your personality on everything you own, with Cornyx.
        </div>
        <div className="bottom-container">
          <ul className="categories">
            <li>&#x2022; UNIQUE ARTWORKS &#x2022;</li>
            <li>&#x2022; CUTOMIZATION SERVICES &#x2022;</li>
            <li>&#x2022; ARTSY PRODUCTS &#x2022;</li>
          </ul>
          <div className="flex items-center justify-center gap-5 ">
            <div className="header-contact-buttons">
              <a href="tel:+880 1602 666 956">
                <div className="flex justify-center text-primary icons">
                  <FaPhoneVolume />
                </div>
                <div className="name">Call Us</div>
              </a>
            </div>
            <div className="header-contact-buttons">
              <a href="mailto:cornyxart@gmail.com">
                <div className="flex justify-center  text-primary icons">
                  <FaEnvelope />
                </div>
                <div className="name">Mail Us</div>
              </a>
            </div>
            <div className="header-contact-buttons">
              <a href="https://www.facebook.com/cornyx.art">
                <div className="flex gap-2  text-primary icons">
                  <FaInstagram />
                  <FaFacebook />
                  <FaTiktok />
                </div>
                <div className="name">Inbox Us</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
