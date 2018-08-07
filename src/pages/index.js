import React from "react";
import Layout from "../components/Layout";
import Box from "../components/Box";
import A from "../components/A";
import Blob from "../components/Blob";

const IndexPage = () => (
  <Layout>
    <section className="m-10 h-64">
      <h1 className="md:m-10 text-3xl md:text-4xl font-medium leading-normal text-center">
        Jack Lo Russo is a Design Engineer based in Sydney, but he's{" "}
        <A href="#">currently in Greece.</A>
      </h1>
    </section>
    <section className="my-8">
      <Blob />
      <h2 className="my-8 font-medium z-10 relative text-center">Projects</h2>
      <hr className="relative" />
      <div className="flex items-start justify-center flex-wrap relative">
        <Box>
          <h3 className="font-medium text-center">hello, world</h3>
          <p className="font-light text-center">
            an experiment using Mapbox and GeoJSON to put my best travel photos
            in context
          </p>
        </Box>
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
    <section>
      <h2 className="my-8 font-medium">Writing</h2>
      <ul className="list-reset">
        <li className="my-6 text-3xl">
          <A>Getting started with Accessibility</A>
        </li>
        <li className="my-6 text-3xl">
          <A>I learnt React before I learnt JavaScript</A>
        </li>
        <li className="my-6 text-3xl">
          <A>Design is a process, not a job title</A>
        </li>
        <li className="my-6 text-3xl">
          <A>8 things that CSS / JS Conf AU got really, really right</A>
        </li>
        <li className="my-6 text-3xl">
          <A>On perfectionism</A>
        </li>
      </ul>
    </section>
    <section>
      <h2 className="my-8 font-medium">Speaking</h2>
      <ul className="list-reset">
        <li className="my-6 text-3xl">
          <A href="#">
            Inspecting the Accessibility Inspector
            <p className="text-lg font-light mt-2 mb-6">
              A11y Bytes Sydney on Global Accessibility Awareness Day
            </p>
          </A>
        </li>
        <li className="my-6 text-3xl">
          <A href="#" className="">
            Design Systems for Small Teams
            <p className="text-lg font-light mt-2 mb-6">
              Design System Sydney meetup
            </p>
          </A>
        </li>
      </ul>
    </section>
  </Layout>
);

export default IndexPage;
