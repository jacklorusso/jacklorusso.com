// // small modifications from Heydon Pickering's inclusive components example https://github.com/Heydon/react-theme-switch
// // using CSS custom properties instead of filter: invert(100); and added icons (aria-hidden)

// import React, { Component, Fragment } from "react";

// import SunIcon from "./SunIcon";
// import MoonIcon from "./MoonIcon";

// class ThemeSwitch extends Component {
//   constructor(props) {
//     super(props);

//     this.css = `:root { --background: hsl(0, 0%, 0%); --foreground: hsl(0, 0%, 95%); --accent-primary: hsl(266, 100%, 67%}`;

//     this.state = {
//       active: false
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState({
//       active: !this.state.active
//     });
//   }

//   componentDidMount() {
//     if (this.props.store) {
//       this.setState({
//         active: this.props.store.getItem(this.props.storeKey) || false
//       });
//     }
//   }

//   componentDidUpdate() {
//     if (this.props.store) {
//       this.props.store.setItem(this.props.storeKey, this.state.active);
//     }
//   }

//   render() {
//     return (
//       <Fragment>
//         <button
//           className="text-foreground border-2 border-foreground p-base rounded flex items-center justify-center"
//           aria-pressed={this.state.active}
//           onClick={this.toggle}
//         >
//           Dark theme
//           <div aria-hidden="true" className="flex items-center">
//             {this.state.active ? <MoonIcon /> : <SunIcon />}
//           </div>
//         </button>
//         <style media={this.state.active ? "screen" : "none"}>
//           {this.state.active ? this.css.trim() : this.css}
//         </style>
//       </Fragment>
//     );
//   }
// }

// ThemeSwitch.defaultProps = {
//   store: localStorage,
//   storeKey: "ThemeSwitch"
// };

// export default ThemeSwitch;
