import React from "react";

const Logo = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      viewBox="0 0 20 26"
    >
      <defs>
        <rect id="a" width="14" height="20" />
        <rect id="b" width="14" height="20" x="3" y="3" />
        <rect id="c" width="14" height="20" x="6" y="6" />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <use fill="#FFFFFF" xlinkHref="#a" />
        <rect width="13" height="19" x=".5" y=".5" stroke="#231F20" />
        <use fill="#FFFFFF" xlinkHref="#b" />
        <rect width="13" height="19" x="3.5" y="3.5" stroke="#231F20" />
        <g>
          <use fill="#FFFFFF" xlinkHref="#c" />
          <rect width="13" height="19" x="6.5" y="6.5" stroke="#231F20" />
        </g>
        <circle cx="13" cy="16" r="3" stroke="#231F20" />
      </g>
    </svg>
  );
};

export default Logo;
