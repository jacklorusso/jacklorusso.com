import React from "react";
import PropTypes from "prop-types";

const Box = props => {
  return (
    <div
      className={`shadow-box-${
        props.color
      } p-p1 m-p2 max-w-p10 w-full min-h-p10 theme-ignore`}
    >
      {props.children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

export default Box;
