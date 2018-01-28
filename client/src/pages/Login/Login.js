import React from "react";

const style = {
  margin: 20,
  buttonStyle: {
    marginRight: 5,
    backgroundColor: "#607D8B"
  }
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div style={style}>
        <h1>Login to get started</h1>
        <hr />
        <form>
          <div className="mdc-text-field">
            <input type="text" name="username" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.username} placeholder="username" />
          </div><br />
          <div className="mdc-text-field">
            <input type="password" name="password" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.password} placeholder="password" />
          </div><br />
        <button style={style.buttonStyle} className="mdc-button mdc-button--raised" type="submit" onClick={this.handleClick}>Login</button>
          <button style={style.buttonStyle} className="mdc-button mdc-button--raised" type="submit">New User</button>
        </form>
      </div>
    );
  }
}
