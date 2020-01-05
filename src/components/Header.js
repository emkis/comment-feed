import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="wrapper">
          <div className="brand">Comment feed</div>
          <ul>
            <li>Login</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
