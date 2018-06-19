import React from "react";

import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <div className="text-center">
      <h2 className="bg-yellow inline-block my-8 p-3">
        Hey there! Welcome to your first Gatsby site.
      </h2>
      <p className="leading-loose">
        This is a barebones starter for Gatsby styled using{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-bold no-underline text-grey-darkest"
        >
          Tailwind
        </a>, a utility-first CSS framework.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
