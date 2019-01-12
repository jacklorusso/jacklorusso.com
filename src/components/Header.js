import React from "react";
import { Link } from "gatsby";

const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-p4:ns p-p2 max-w-p15 mx-auto w-full">
      <Link to="/" className="flex items-center no-underline text-grey">
        <svg
          className="stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="30"
          viewBox="0 0 312 252"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="11"
            d="M0,0 L150,0 L150,210 L0,210 L0,0 M45,45 L195,45 L195,255 L45,255 L45,45 M90,90 L240,90 L240,300 L90,300 L90,90"
            transform="rotate(90 150 156)"
          />{" "}
          // stroke="#000000"
        </svg>
      </Link>

      {/* <button
        className="block md:hidden flex items-center rounded text-grey"
        onClick={handleClick}
      >
        Menu
      </button>

      <div
        id="nav"
        className="hidden md:flex md:items-center w-full md:w-auto text-base"
      >
        <Link
          to="/"
          className="block md:inline-block no-underline text-grey md:mr-p1"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="block md:inline-block no-underline text-grey md:mr-p1"
        >
          About
        </Link>

        <Link
          to="/#projects"
          className="block md:inline-block no-underline text-grey"
        >
          Contact
        </Link>
      </div> */}
    </nav>
  );
};

export default Header;
