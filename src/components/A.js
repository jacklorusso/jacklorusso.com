import React from "react";
import PropTypes from "prop-types";

const A = props => {
  return (
    <a className="hover:bg-primary text-inherit" href={props.href}>
      {props.children}
    </a>
  );
};

A.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default A;
