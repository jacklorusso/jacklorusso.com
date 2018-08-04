import React from "react";
import PropTypes from "prop-types";

const Box = props => {
  return (
    <div className="bg-white p-4 shadow-box m-8 max-w-xs w-full min-h-1">
      {props.children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node
};

export default Box;
