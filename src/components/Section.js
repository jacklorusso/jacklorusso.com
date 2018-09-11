import React from "react";
import PropTypes from "prop-types";

const Section = props => {
  return (
    <section className="py-p2">
      <div className="max-w-p15 mx-auto px-base md:px-0">{props.children}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node
};

export default Section;
