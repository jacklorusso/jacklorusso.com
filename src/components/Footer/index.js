import React from "react";

const Footer = () => (
  <div className="">
    <div className="flex justify-between align-center max-w-xl mx-auto p-4 md:p-8 text-sm">
      <p className="text-gray-darkest text-xs">¯\_(ツ)_/¯</p>
      <p>
        <a
          href="https://github.com/lol-russo"
          className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-grey-darkest"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/lol_russo"
          className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-grey-darkest"
        >
          Twitter
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
