import React from "react";
import PropTypes from "prop-types";

const A = props => {
  return (
    <a className="bg-yellow no-underline text-grey" href={props.href}>
      {props.children}
    </a>
  );
};

A.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default A;
