import React from "react";
import Layout from "../components/Layout";
import Box from "../components/Box";
import A from "../components/A";

const IndexPage = () => (
  <Layout>
    <section className="my-p8:ns my-p7 ml-p4:ns ml-p1 mr-p2 text-left">
      <h1 className="text-2xl md:text-4xl font-medium leading-title ">
        A designer who codes.<br />A developer who designs.
      </h1>
      <p className="text-xl mt-p6">Jack Lo Russo builds products in Sydney.</p>
      <p className="text-xl mt-base">
        <a
          href="mailto:jack.lorusso@gmail.com"
          className="no-underline text-grey"
        >
          Let's talk about building yours.
        </a>
      </p>
    </section>
    <section>
      <p />
    </section>
    <section className="mb-p7 ml-p4:ns ml-p1 mr-p1">
      <h2 className="my-p4 font-medium z-10 relative text-left" id="projects">
        Projects
      </h2>
      <div className="flex items-start justify-start flex-wrap relative">
        <Box>
          <a
            href="https://www.ninetyninedays.com.au/"
            className="no-underline text-grey"
          >
            <h3 className="font-medium text-center mb-m2">ninety-nine days</h3>
            <p className="font-light text-center">
              a travel and lifestyle blog, designed and built from scratch using
              React, Gatsby, Netlify-CMS and&nbsp;Tachyons
            </p>
          </a>
        </Box>

        <Box>
          <h3 className="font-medium text-center mb-m2">
            nootab (launching soon)
          </h3>
          <p className="font-light text-center">
            a browser extension that turns your new tab into a scratchpad using
            LocalStorage&nbsp;APIs
          </p>
        </Box>

        <Box>
          <a
            href="https://twitter.com/helveticabot"
            className="no-underline text-grey"
          >
            <h3 className="font-medium text-center mb-m2">Helvetica Bot</h3>
            <p className="font-light text-center">
              a Twitter bot that sources content from Wikipedia and generates
              occasionally hilarious&nbsp;designs
            </p>
          </a>
        </Box>

        <Box>
          <a
            href="https://designsystems.email/"
            className="no-underline text-grey"
          >
            <h3 className="font-medium text-center mb-m2">
              Design Systems Digest
            </h3>
            <p className="font-light text-center">
              a curated newsletter covering design systems, styleguides &
              front-end architecture<br />(over 300&nbsp;subscribers)
            </p>
          </a>
        </Box>
      </div>
    </section>
    <section className="mb-p4 ml-p4:ns ml-p1 mr-p1">
      <h2 className="font-medium" id="writing">
        Writing
      </h2>

      <ul className="list-reset">
        <li className="my-p3 text-2xl">
          <A>Travel, growth & gratitude: 2018 in review</A>
        </li>
        <li className="my-p3 text-2xl">
          <A href="https://medium.com/@lol_russo/8-things-that-cssconf-and-jsconf-au-got-really-really-right-cf514ed4a6f7">
            8 things that CSS / JS Conf AU got really, really right
          </A>
        </li>
        <li className="my-p3 text-2xl">
          <A href="https://medium.com/@lol_russo/on-perfectionism-7ac65fe36c99">
            On perfectionism
          </A>
        </li>
      </ul>
    </section>
    <section className="my-p4 ml-p4:ns ml-p1 mr-p1" id="speaking">
      <h2 className="font-medium">Speaking</h2>

      <ul className="list-reset">
        <li className="my-p3 text-2xl">
          Inspecting the Accessibility Inspector
          <p className="text-lg font-light mt-base">
            A11y Bytes Sydney on Global Accessibility Awareness Day,
            April&nbsp;2018
          </p>
        </li>
        <li className="my-p3 text-2xl">
          <A href="https://www.youtube.com/watch?v=t1_tA2CqcMw" className="">
            Design Systems for Small Teams
            <p className="text-lg font-light mt-base">
              Design System Sydney Meetup, February&nbsp;2018
            </p>
          </A>
        </li>
      </ul>
    </section>
  </Layout>
);

export default IndexPage;
