import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Container = styled.main`
  padding: 1.5rem;
`;

const Layout = props => {
  return (
    // TODO: work out how to get Fragments working with Gatsby
    <div>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
