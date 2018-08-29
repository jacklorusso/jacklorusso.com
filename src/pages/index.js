import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

import Section from "../components/Section";

import "../styles/built.css";

const IndexPage = () => (
  <Layout>
    <Section>
      <h1 className="text-xl md:text-2xl md:max-w-p13 mt-p6 mb-p3 font-medium leading-tight">
        Jack Lo Russo is a design engineer from Sydney, but he's currently
        in&nbsp;Egypt.
      </h1>

      <p className="md:text-md md:max-w-p13 font-serif">
        Most recently, he was at <a href="https://digivizer.com">Digivizer</a>{" "}
        for 2.5 years, working across product design and front-end development
        with a particular focus on improving collaboration between design and
        engineering. Since July he's been backpacking around the world with his
        partner, and will most likely be travelling until early 2019.{" "}
        <Link to="/been">See where he's&nbsp;been.</Link>
      </p>
    </Section>
    {/* <Section>
      <h2 className="mt-p2 mb-p3 font-medium" id="projects">
        Projects (coming soon)
      </h2>
      <div className="box-grid flex items-start justify-start flex-wrap">
        <Box color="primary">
          <a href="https://designsystems.email" className=" no-underline">
            <h3 className="font-medium mb-m2">design systems digest</h3>
            <p className="font-light">
              a curated newsletter about design systems & front-end architecture
            </p>
          </a>
        </Box>
        <Box color="primary">
          <h3 className="font-medium mb-m2">hello, world</h3>
          <p className="font-light">
            an experiment using Mapbox and GeoJSON to put my best travel photos
            in context
          </p>
        </Box>
        <Box color="primary">
          <h3 className="font-medium mb-m2">trak</h3>
          <p className="font-light">a CLI time tracker written in Go</p>
        </Box>
        <Box color="primary">
          <h3 className="font-medium mb-m2">dotsandcrosses</h3>
          <p className="font-light">
            a customisable journal app optimised for habit tracking
          </p>
        </Box>
        <Box color="primary">
          <h3 className="font-medium mb-m2">nootab</h3>
          <p className="font-light">
            a browser extension that turns your new tab into a scratchpad
          </p>
        </Box>
      </div>
    </Section> */}
    {/* <Section>
      <h2 className="mt-p2 mb-p3 font-medium" id="projects">
        Work
      </h2>
      <div className="box-grid flex items-center justify-center md:justify-start flex-wrap">
        <Box color="secondary">
          <h3 className="font-medium mb-m2">
            Rebranding for the next growth phase
          </h3>
          <p className="font-light">How we built</p>
        </Box>
        <Box color="secondary">
          <h3 className="font-medium mb-m2">Building a</h3>
        </Box>
        <Box color="secondary">
          <h3 className="font-medium mb-m2">Launching an MVP</h3>
        </Box>
      </div>
    </Section> */}
    <Section>
      <h2 className="font-medium my-p5" id="writing">
        Writing
      </h2>

      <ul className="list-reset font-regular">
        {/* <li className="my-p3 text-2xl">
          <A>Getting started with Accessibility</A>
        </li>
        <li className="my-p3 text-2xl">
          <A>I learnt React before I learnt JavaScript</A>
        </li>
        <li className="my-p3 text-2xl">
          <A>About this site</A>
        </li>
        <li className="my-p3 text-2xl">
          <A>Design is a process, not a job title</A>
        </li> */}
        <li className="my-p3 text-2xl">
          <a href="https://medium.com/@lol_russo/8-things-that-cssconf-and-jsconf-au-got-really-really-right-cf514ed4a6f7">
            8 things that CSS / JS Conf AU got really, really right
          </a>
        </li>
        <li className="my-p3 text-2xl">
          <a href="https://medium.com/@lol_russo/on-perfectionism-7ac65fe36c99">
            On perfectionism
          </a>
        </li>
      </ul>
    </Section>
    <Section>
      <h2 className="font-medium">Speaking</h2>

      <ul className="list-reset">
        <li className="my-p3 text-2xl">
          Inspecting the Accessibility Inspector
          <p className="text-base font-light mt-base">
            A11y Bytes Sydney, Global Accessibility Awareness Day — May 2018
          </p>
        </li>
        <li className="my-p3 text-2xl">
          <a href="https://www.youtube.com/watch?v=t1_tA2CqcMw&t=5s">
            Design Systems for Small Teams
          </a>

          <p className="text-base font-light mt-base">
            Design System Sydney meetup — February 2018
          </p>
        </li>
      </ul>
    </Section>
  </Layout>
);

export default IndexPage;
