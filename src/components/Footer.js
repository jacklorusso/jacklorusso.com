import React from "react";

import ThemeSwitch from "./ThemeSwitch";

const SocialLink = props => (
  <a href={props.href} className="text-inherit mr-p1 nav-link">
    {props.children}
  </a>
);

const Footer = () => (
  <footer className="bg-foreground text-background flex flex-col md:flex-row md:justify-between md:items-center py-p2 px-p1 mt-p2 max-w-p15">
    <div className="flex items-start md:items-center flex-row capitalise">
      <SocialLink href="https://github.com/lol-russo">GitHub</SocialLink>
      <SocialLink href="https://twitter.com/lol_russo">Twitter</SocialLink>
      <SocialLink href="https://instagram.com/lol_russo">Instagram</SocialLink>
      <SocialLink href="https://linkedin.com/in/jacklorusso">
        LinkedIn
      </SocialLink>
    </div>
  </footer>
);

export default Footer;
