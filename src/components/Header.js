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
    <nav className="bg-inherit flex flex-wrap items-center justify-between py-p2 px-p2 max-w-p15 mx-auto w-full">
      <Link
        to="/"
        className="flex items-center text-inherit hover:bg-primary p-base rounded-full -ml-m1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-p2 md:w-p3 stroke-current"
        >
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".803"
            d="M3.2,0.96 L14.2,0.96 L14.2,16.36 L3.2,16.36 L3.2,0.96 M6.5,4.26 L17.5,4.26 L17.5,19.66 L6.5,19.66 L6.5,4.26 M9.8,7.56 L20.8,7.56 L20.8,22.96 L9.8,22.96 L9.8,7.56"
            transform="rotate(90 12 11.96)"
          />
        </svg>
      </Link>

      <button
        className="block md:hidden flex items-center rounded text-inherit font-light"
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
          className="block md:inline-block no-underline text-inherit md:mr-p1"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block md:inline-block no-underline text-inherit md:mr-p1"
        >
          About
        </Link>
        <a
          href="https://twitter.com/lol_russo"
          className="block md:inline-block no-underline text-inherit md:mr-base"
        >
          Twitter
        </a>
        <a
          href="https://github.com/lol-russo"
          className="block md:inline-block no-underline text-inherit"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Header;
