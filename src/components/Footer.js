import React from "react";

import ThemeSwitch from "./ThemeSwitch";

const SocialLink = props => (
  <a href={props.href} className="text-inherit nav-link m-p1">
    {props.children}
  </a>
);

const Footer = () => (
  <footer className="flex justify-end items-center mt-p2">
    <SocialLink href="https://github.com/lol-russo">GitHub</SocialLink>
    <SocialLink href="https://twitter.com/lol_russo">Twitter</SocialLink>
    <SocialLink href="https://instagram.com/lol_russo">Instagram</SocialLink>
    <SocialLink href="https://linkedin.com/in/jacklorusso">LinkedIn</SocialLink>
  </footer>
);

export default Footer;
