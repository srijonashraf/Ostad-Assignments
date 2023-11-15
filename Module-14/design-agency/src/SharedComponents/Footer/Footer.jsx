import React from "react";
import fb from "../../assets/icons/fb.svg";
import tweeter from "../../assets/icons/tweter.svg";
import linkedin from "../../assets/icons/34.svg";
import insta from "../../assets/icons/ins.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#000] text-white px-[4vw] justify-between items-center">
      <nav>
        <h2 className="text-2xl font-bold">
          Design<span className="text-[#F55F1D]">AGENCY</span>
        </h2>
        <div className="max-w-[320px] text-lg space-y-12">
          <p>
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </p>
        </div>
        <div className="grid grid-flow-col gap-4">
          <div>
            <img src={fb} alt="" />
          </div>
          <div>
            <img src={tweeter} alt="" />
          </div>
          <div>
            <img src={linkedin} alt="" />
          </div>
          <div className="bg-[#20B15A] rounded-full">
            <img src={insta} alt="" />
          </div>
        </div>
        <aside className="max-w-[320px] text-lg">
          <p>Copyright Design Agency 2022</p>
        </aside>
      </nav>
      <nav>
        <header className="text-lg font-medium">Quick Links</header>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Portfolio</a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact Us</a>
      </nav>
      <nav>
        <header className="text-lg font-medium">Address</header>
        <a className="link link-hover">Design Agency Head Office.</a>
        <a className="link link-hover">Airport Road</a>
        <a className="link link-hover">United Arab Emirate</a>
      </nav>
    </footer>
  );
};

export default Footer;
