import React from "react";
import PropTypes from "prop-types";

const Section = props => {
  return (
    <section className={`py-p5 md:p-0`}>
      <div className="max-w-p15 mx-auto px-p2">{props.children}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf("blue", "pink", "white")
};

export default Section;
