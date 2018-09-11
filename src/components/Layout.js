import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import jlogo from "../images/jlogo32x32.png";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="font-sans  text-inherit">
    <Helmet
      title="Jack Lo Russo"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: jlogo }]}
      link={[
        {
          href: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,500",
          rel: "stylesheet"
        }
      ]}
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
