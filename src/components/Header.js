import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import Logo from "./Logo";

const Banner = styled.header`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderNav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    padding-left: 24px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: blue;
  }
`;

const Header = props => {
  return (
    <Banner role="banner">
      <a href="/">
        <Logo />
      </a>
      <HeaderNav>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/work">Work</NavLink>
          </li>
          <li>
            <NavLink to="/writing">Writing</NavLink>
          </li>
        </ul>
      </HeaderNav>
    </Banner>
  );
};

export default Header;
