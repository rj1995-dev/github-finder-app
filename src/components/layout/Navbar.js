import React, { Component } from "react";
import "./navbar.css";
export class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder"
  };
  render() {
    return (
      <nav className="navbar nav-style mx-auto  bg-danger ">
        <h2 className="text-white ">
          <i className="fab fa-github p-1" />
          {this.props.title}
        </h2>
      </nav>
    );
  }
}

export default Navbar;
