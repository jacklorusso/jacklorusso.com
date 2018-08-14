import React from "react";
import Layout from "../components/Layout";
import Box from "../components/Box";
import A from "../components/A";
import Blob from "../components/Blob";

const IndexPage = () => (
  <Layout>
    <section className="my-p8 mx-p4 flex justify-center items-center">
      <h1 className="text-xl md:text-2xl font-medium leading-normal text-center">
        Jack Lo Russo is a Design Engineer based in Sydney, but he's{" "}
        <A href="#">currently in Turkey.</A>
      </h1>
    </section>
    <section className="mb-p8">
      <Blob color="#E5F8FF" />
      <h2 className="my-p4 font-medium z-10 relative text-center" id="projects">
        Projects
      </h2>
      <hr className="relative" />
      <div className="flex items-start justify-center flex-wrap relative">
        <Box>
          <h3 className="font-medium text-center mb-m2">hello, world</h3>
          <p className="font-light text-center">
            an experiment using Mapbox and GeoJSON to put my best travel photos
            in context
          </p>
        </Box>
        <Box>
          <h3 className="font-medium text-center mb-m2">Trak</h3>
          <p className="font-light text-center">
            a CLI time tracker written in Go
          </p>
        </Box>
        <Box>
          <h3 className="font-medium text-center mb-m2">dotsandcrosses</h3>
          <p className="font-light text-center">
            a customisable journal app optimised for habit tracking
          </p>
        </Box>
        <Box>
          <h3 className="font-medium text-center mb-m2">nootab</h3>
          <p className="font-light text-center">
            a browser extension that turns your new tab into a scratchpad
          </p>
        </Box>
        <Box>
          <h3 className="font-medium text-center mb-m2">
            Design Systems Digest
          </h3>
          <p className="font-light text-center">
            a curated newsletter covering all things design systems, styleguides
            & front-end architecture
          </p>
        </Box>
      </div>
    </section>
    <section className="text-center mb-p7">
      <h2 className="font-medium" id="writing">
        Writing
      </h2>
      <hr />

      <ul className="list-reset">
        <li className="my-p3 text-2xl">
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
        </li>
        <li className="my-p3 text-2xl">
          <A>8 things that CSS / JS Conf AU got really, really right</A>
        </li>
        <li className="my-p3 text-2xl">
          <A>On perfectionism</A>
        </li>
      </ul>
    </section>
    <section className="text-center my-p7" id="speaking">
      <h2 className="font-medium">Speaking</h2>
      <hr />

      <ul className="list-reset">
        <li className="my-p3 text-2xl">
          <A href="#">
            Inspecting the Accessibility Inspector
            <p className="text-lg font-light mt-base">
              A11y Bytes Sydney on Global Accessibility Awareness Day
            </p>
          </A>
        </li>
        <li className="my-p3 text-2xl">
          <A href="#" className="">
            Design Systems for Small Teams
            <p className="text-lg font-light mt-base">
              Design System Sydney meetup
            </p>
          </A>
        </li>
      </ul>
    </section>
    <section className="mb-p8">
      <Blob color="#FFE8FF" />
      <h2 className="my-p4 font-medium z-10 relative text-center" id="projects">
        Newsletter
      </h2>
      <hr className="relative" />
    </section>
  </Layout>
);

export default IndexPage;
