import React from "react";
import PropTypes from "prop-types";

const Box = props => {
  return <div className="p-4 shadow-box m-8 max-w-xs">{props.children}</div>;
};

Box.propTypes = {
  children: PropTypes.node
};

export default Box;
