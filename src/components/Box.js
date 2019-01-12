import React from "react";
import PropTypes from "prop-types";

const Box = props => {
  return (
    <div className="bg-white shadow-box p-p2 m-p1 max-w-p10 w-full min-h-p10">
      {props.children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node
};

export default Box;
