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
    <nav className="">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
        <Link
          to="/"
          className="flex items-center no-underline text-grey-darkest"
        >
          <svg
            className="stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="30"
            viewBox="0 0 312 252"
          >
            <path
              fill="none" // stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="11"
              d="M0,0 L150,0 L150,210 L0,210 L0,0 M45,45 L195,45 L195,255 L45,255 L45,45 M90,90 L240,90 L240,300 L90,300 L90,90"
              transform="rotate(90 150 156)"
            />
          </svg>
        </Link>

        <button
          className="block md:hidden flex items-center px-3 py-2 rounded text-grey-darkest"
          onClick={handleClick}
        >
          Menu
        </button>

        <div
          id="nav"
          className="hidden md:flex md:items-center w-full md:w-auto"
        >
          <div className="text-sm">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-grey-darkest"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-darkest"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
