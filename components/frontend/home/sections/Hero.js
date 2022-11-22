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
          <Image alt=" " src="/cornyxcard.png" width={300} height={300} />
        </div>
        <div className="right-column"></div>
        <div className="midleimg">
          <Image className="" alt=" " src="/website-header.png" layout="fill" />
        </div>
      </div>
      <div className="text-container">
        <div className="motto">
          Flex your personality on everything you own, with Cornyx.
        </div>
        <div class="bottom-container">
          <ul class="categories">
            <li>&#x2022; UNIQUE ARTWORKS &#x2022;</li>
            <li>&#x2022; CUTOMIZATION SERVICES &#x2022;</li>
            <li>&#x2022; ARTSY PRODUCTS &#x2022;</li>
          </ul>
          <div class="header-contact-buttons">
            <a href="tel:+880 1602 666 956">
              <div class="icon flex justify-center">
                <FaPhoneVolume />
              </div>
              <div class="name">Call Us</div>
            </a>
            <a href="mailto:cornyxart@gmail.com">
              <div class="icon flex justify-center">
                <FaEnvelope />
              </div>
              <div class="name">Mail Us</div>
            </a>
            <a href="https://www.facebook.com/cornyx.art">
              <div class="icon flex gap-2">
                <FaInstagram />
                <FaFacebook />
                <FaTiktok />
              </div>
              <div class="name">Inbox Us</div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
