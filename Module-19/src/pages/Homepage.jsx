import React from "react";
import Banner from "../component/Banner.jsx";
import Slider from "../component/Slider";

const Homepage = () => {
  return (
    <div className="container">
      <Slider />
      <Banner />
    </div>
  );
};

export default Homepage;
