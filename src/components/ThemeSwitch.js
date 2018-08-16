// small modifications from Heydon Pickering's inclusive components example https://github.com/Heydon/react-theme-switch
import React, { Component } from "react";

class ThemeSwitch extends Component {
  constructor(props) {
    super(props);

    this.css = `html { background: var(--dark); color: var(--light);
                }`;

    this.state = {
      active: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active
    });
  }

  componentDidMount() {
    if (this.props.store) {
      this.setState({
        active: this.props.store.getItem(this.props.storeKey) || false
      });
    }
  }

  componentDidUpdate() {
    if (this.props.store) {
      this.props.store.setItem(this.props.storeKey, this.state.active);
    }
  }

  render() {
    return (
      <div>
        <button
          className="text-inherit"
          aria-pressed={this.state.active}
          onClick={this.toggle}
        >
          Dark mode:{" "}
          <span aria-hidden="true">{this.state.active ? "on" : "off"}</span>
        </button>
        <style media={this.state.active ? "screen" : "none"}>
          {this.state.active ? this.css.trim() : this.css}
        </style>
      </div>
    );
  }
}

ThemeSwitch.defaultProps = {
  preserveRasters: true,
  store: localStorage,
  storeKey: "ThemeSwitch"
};

export default ThemeSwitch;
