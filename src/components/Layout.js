import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import "../styles/index.css";

const Layout = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey">
    <Helmet
      title="Jack Lo Russo"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <main className="flex flex-col flex-1 md:justify-center max-w-p15 mx-auto w-full">
      {children}
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
