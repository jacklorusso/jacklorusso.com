import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import nepal from "../images/nepal.jpg";

const Hero = props => {
  return (
    <section className="min-h-screen py-p2">
      <div className="max-w-p15 mx-auto px-base md:px-0">
        <h1 className="text-3xl md:text-4xl md:max-w-p14 mt-p7 mb-p4 font-medium leading-tight text-left ">
          A designer that&nbsp;codes.
          <br />
          An engineer that&nbsp;designs.
        </h1>
        {/* <div className="z-100 ml-p10 mt-p6 h-80vh w-p13 background-secondary" /> */}
        <p className="max-w-p12 mt-p7 text-lg relative">
          Most recently, I was a Design Technologist at{" "}
          <a href="https://digivizer.com">Digivizer</a>. Since July I've been
          backpacking around the world with my partner, and will most likely be
          travelling until early 2019.{" "}
          <Link to="/been">Take a look where I've&nbsp;been.</Link>
        </p>
      </div>
    </section>
  );
};

export default Hero;
