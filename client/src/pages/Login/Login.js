import React from "react";
import API from "../../utils/API";

const style = {
  margin: 20,
  buttonStyle: {
    marginRight: 5,
    backgroundColor: "#607D8B"
  }
}

export default class Login extends React.Component {

    state = {
      email: "",
      password: ""
    };
  

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
    // console.log("state: "+JSON.stringify(this.state));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
        console.log(this.state);
      API.login({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {alert("logged in!"); console.log(res);})
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <div style={style}>
        <h1>Log in to get started</h1>
        <hr />
        <form>
          <div className="mdc-text-field">
            <input type="text" name="email" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.email} placeholder="email" />
          </div><br />
          <div className="mdc-text-field">
            <input type="password" name="password" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.password} placeholder="password" />
          </div><br />
        <button style={style.buttonStyle} className="mdc-button mdc-button--raised" type="submit" onClick={this.handleFormSubmit}>Login</button>
          <button style={style.buttonStyle} className="mdc-button mdc-button--raised" type="submit">New User</button>
        </form>
      </div>
    );
  }
}
