import React from "react";
import PropTypes from "prop-types";

const Box = props => {
  return (
    <div className={`m-p2 ml-0  max-w-p10 w-full min-h-p10 theme-ignore`}>
      {props.children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node
};

export default Box;
