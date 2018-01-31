import React from "react";
import { Link } from "react-router-dom";

const style = {
  textAlign: "center",
  btnStyle: {
    backgroundColor: "#607D8B",
    margin: 10
  }
}

export default class Home extends React.Component {
  render() {
    return(
      <div style={style}>
        <h1>Welcome to Night Out</h1>
        <h3>Night Out is an event planning platform designed to help groups plan the perfect night out.</h3>
        <p>Create an account and share your "night code" with your group.</p>
        <p>Each member of the group can add to the night board and allow others to vote on it.</p>
        <p>Start planning your perfect Night Out today!</p>
        <Link style={style.btnStyle} to="/login" className="mdc-button mdc-button--raised">Login</Link>
        <Link style={style.btnStyle} to="/newuser" className="mdc-button mdc-button--raised">New User</Link>
      </div>
    );
  }
}
