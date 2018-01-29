import React from "react";

const style = {
  margin: 20,
  buttonStyle: {
    backgroundColor: "#607D8B",
    marginBottom: 10
  }
}

export default class Board extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    alert("click");
  }

  render() {
    return (
      <div style={style}>
        <h1>Board Name</h1>
        <hr />
        <button onClick={this.handleClick} style={style.buttonStyle} className="mdc-fab material-icons">
          <span className="mdc-fab__icon">add</span>
        </button>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
