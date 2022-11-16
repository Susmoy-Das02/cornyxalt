import React from "react";

const Footer = () => {
  return (
    <footer className="grid p-10 gap-5">
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center space-x-5">
        <div class="contactcontent">
          <a href="tel:+880 1602 666 956">
            <div class="icondiv">
              <div class="icon">
                <i class="fa-solid fa-phone-volume"></i>
              </div>
              <div class="name">Number</div>
            </div>
            <div class="contactvalue">+880-1602-666-956</div>
          </a>
        </div>
        <div class="contactcontent">
          <a href="mailto:cornyxart@gmail.com">
            <div class="icondiv">
              <div class="icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div class="name">Gmail</div>
            </div>
            <div class="contactvalue">cornyxart@gmail.com</div>
          </a>
        </div>
        <div class="contactcontent">
          <a href="https://www.instagram.com/cornyx.art/">
            <div class="icondiv">
              <div class="icon">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div class="name">Instagram</div>
            </div>
            <div class="contactvalue">@cornyx.art</div>
          </a>
        </div>
        <div class="contactcontent ">
          <a href="https://www.facebook.com/cornyx.art">
            <div class="icondiv">
              <div class="icon">
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div class="name">Facebook</div>
            </div>
            <div class="contactvalue">@cornyx.art</div>
          </a>
        </div>
        <div class="contactcontent">
          <a href="https://www.tiktok.com/@cornyx.art">
            <div class="icondiv">
              <div class="icon">
                <i class="fa-brands fa-tiktok"></i>
              </div>
              <div class="name">Tiktok</div>
            </div>
            <div class="contactvalue">@cornyx.art</div>
          </a>
        </div>
      </div>
      <div class="footer-description">
        Cornyx Art Studio&#8482; 2022, based in Dhaka, Bangladesh. Shipping
        available internationally.
      </div>
    </footer>
  );
};

export default Footer;
