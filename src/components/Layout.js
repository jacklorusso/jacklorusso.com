import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import jlogo from "../images/jlogo32x32.png";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="font-sans font-light min-h-screen text-text-inherit">
    <Helmet
      title="Jack Lo Russo"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: jlogo }]}
    />
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
