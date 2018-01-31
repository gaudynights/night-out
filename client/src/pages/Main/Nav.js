import React from "react";
import { Link } from "react-router-dom";

const style = {
  backgroundColor: "#607D8B",
  linkStyle: {
    color: "white"
  }
}

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav style={style} className="mdc-tab-bar">
          <Link style={style.linkStyle} className="mdc-tab" to="/"><strong>Night Out</strong></Link>
          <Link style={style.linkStyle} className="mdc-tab" to="/board">My Board</Link>
          <Link style={style.linkStyle} className="mdc-tab" to="/login">Login</Link>
          <Link style={style.linkStyle} className="mdc-tab" to="/newuser">New User</Link>
          <span style={style.linkStyle} className="mdc-tab-bar__indicator"></span>
        </nav>
      </div>
    );
  }
}
