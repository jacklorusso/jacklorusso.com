import React from "react";
import styled from "styled-components";

const Hero = styled.section`
  height: 30vh;
`;

const HomeHero = props => {
  return (
    <Hero>
      <h1>Jack Lo Russo — designer & developer</h1>
    </Hero>
  );
};

export default HomeHero;
