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
    <header className="md:px-0 flex flex-wrap items-center justify-between font-normal ">
      <Link
        to="/"
        className="text-foreground-faded nav-link hover:bg-background"
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-p3"
        >
          <path
            fill="none"
            stroke="#424242"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".803"
            d="M3.2,0.96 L14.2,0.96 L14.2,16.36 L3.2,16.36 L3.2,0.96 M6.5,4.26 L17.5,4.26 L17.5,19.66 L6.5,19.66 L6.5,4.26 M9.8,7.56 L20.8,7.56 L20.8,22.96 L9.8,22.96 L9.8,7.56"
            transform="rotate(90 12 11.96)"
          />
        </svg> */}
        Jack Lo Russo
      </Link>

      <button
        className="block md:hidden text-foreground-faded p-base font-normal"
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
          className="block md:inline-block no-underline text-foreground-faded md:mr-p1 nav-link"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block md:inline-block no-underline text-foreground-faded md:mr-p1 nav-link"
        >
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
