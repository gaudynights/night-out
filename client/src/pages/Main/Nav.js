import React from "react";
import { Link } from "react-router-dom";

const style = {
  width: "100vw",
  backgroundColor: "#607D8B",
  // textShadow: "1px 1px 3px  black",
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
