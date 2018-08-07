import React, { Component } from "react";
import anime from "animejs";

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

export default Blob;
