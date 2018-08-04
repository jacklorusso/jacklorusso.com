import React, { Component } from "react";
import anime from "animejs";
import Layout from "../components/Layout";
import Box from "../components/Box";
import A from "../components/A";

class Blob extends Component {
  componentDidMount() {
    var morphing = anime({
      targets: ".blob",
      d: [
        {
          value:
            "M508.279825,439.441822 C768.458661,316.139792 917.610531,450.10088 969.55965,297.431808 C1021.50877,144.762736 763.037638,21 508.279825,21 C253.522012,21 47,144.762736 47,297.431808 C47,450.10088 248.100989,562.743852 508.279825,439.441822 Z"
        },
        {
          value:
            "M332.31967,481.984375 C557.905184,481.984375 921.735009,462.993192 980.785171,367 C1039.83533,271.006808 1020.75366,138.78125 800.503662,83.71875 C580.25367,28.65625 332.215835,-14.296875 102.405036,152.523438 C-127.405763,319.34375 106.734156,481.984375 332.31967,481.984375 Z"
        },
        {
          value:
            "M420.179688,440.875 C680.321737,508.995678 917.610531,450.10088 969.55965,297.431808 C1021.50877,144.762736 771.25717,30.90625 516.499357,30.90625 C261.741544,30.90625 61.75,57.6640625 61.75,172.648438 C61.75,287.632813 160.037638,372.754322 420.179688,440.875 Z"
        },
        {
          value:
            "M349.820313,469.851562 C534.90625,540.007813 913.828125,433.028809 971.585938,258.322998 C1029.34375,83.6171875 886.039063,61.265625 631.28125,61.265625 C376.523437,61.265625 90.9921875,-36.7578125 41.4375,172.234375 C-8.1171875,381.226562 164.734375,399.695312 349.820313,469.851562 Z"
        }
      ],
      transform: [
        { value: "translate(-47 -21)" },
        { value: "translate(-8 -34)" },
        { value: "translate(-61 -30)" },
        { value: "translate(-32 -38)" }
      ],
      easing: "easeInOutSine",
      delay: function(el, i) {
        return i * 250;
      },
      direction: "alternate",
      duration: 25000,
      loop: true
    });
  }

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1002 471"
        preserveAspectRatio="none"
        className="center z-0 absolute w-5/6 h-full md:h-128 ml-8"
      >
        <path
          className="blob"
          fill="#E5F8FF"
          fill-rule="evenodd"
          d="M420.179688,440.875 C680.321737,508.995678 917.610531,450.10088 969.55965,297.431808 C1021.50877,144.762736 771.25717,30.90625 516.499357,30.90625 C261.741544,30.90625 61.75,57.6640625 61.75,172.648438 C61.75,287.632813 160.037638,372.754322 420.179688,440.875 Z"
          transform="translate(-47 -21)"
        />
      </svg>
    );
  }
}

const IndexPage = () => (
  <Layout>
    <section className="m-10 h-64">
      <h1 className="m-10 text-4xl font-medium leading-normal text-center">
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
        <li className="font-medium my-6 text-3xl">
          <A href="#">
            Inspecting the Accessibility Inspector
            <p className="text-lg font-light mt-2 mb-6">
              A11y Bytes Sydney on Global Accessibility Awareness Day
            </p>
          </A>
        </li>
        <li className="font-medium my-6 text-3xl">
          <A href="#" className="font-medium">
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
