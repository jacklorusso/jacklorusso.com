import React from "react";

import Layout from "../components/Layout";
import Box from "../components/Box";

const IndexPage = () => (
  <Layout>
    <section className="text-left">
      <h1 className="my-8 max-w-lg font-medium leading-normal">
        Jack Lo Russo is a Design Engineer based in Sydney, but he's{" "}
        <a href="#" className="bg-yellow no-underline text-grey">
          currently in Croatia.
        </a>
      </h1>
    </section>
    <section>
      <h2 className="my-8 font-medium">Projects</h2>
      <div className="flex items-center justify-start flex-wrap">
        <Box>
          <h3 className="font-medium text-center">Trak</h3>
          <p className="font-light text-center">
            a CLI time tracker written in Go
          </p>
        </Box>
        <Box>
          <h3 className="font-medium text-center">dotsandcrosses</h3>
          <p className="font-light text-center">
            a customisable journal app optimised for habit tracking
          </p>
        </Box>
        <Box>
          <h3 className="font-medium text-center">nootab</h3>
          <p className="font-light text-center">
            a browser extension that turns your new tab into a scratchpad
          </p>
        </Box>
      </div>
    </section>
    <hr />
    <section>
      <h2 className="my-8 font-medium">Writing</h2>
      <ul>
        <li>Getting started with Accessibility</li>
        <li>I learnt React before I learnt JavaScript</li>
        <li>Design is a process, not a job title</li>
        <li>8 things that CSS / JS Conf AU got really, really right</li>
        <li>On perfectionism</li>
      </ul>
    </section>
    <hr />
    <section>
      <h2 className="my-8 font-medium">Speaking</h2>
      <ul>
        <li>
          <p className="font-medium">
            Inspecting the Accessibility Inspector in the Firefox DevTools
          </p>
          <p>A11y Bytes Sydney on Global Accessibility Awareness Day</p>
        </li>
        <li>
          <p className="font-medium">Design Systems for Small Teams</p>
          <p>Design System Sydney meetup</p>
        </li>
      </ul>
    </section>
  </Layout>
);

export default IndexPage;
