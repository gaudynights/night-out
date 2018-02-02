import React from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

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
        .then(res => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userID", res.data.user._id);
          localStorage.setItem("email", res.data.user.email);
          localStorage.setItem("name", res.data.user.firstName.concat(" ",res.data.user.lastName.charAt(0),"."));
          this.props.login();
          alert("logged in!"); 
          // console.log(res);
          // console.log(this.props);
          this.props.history.push("/board")
        })
        .catch(err => console.log(err));
    }
  };


  // // this.login

  // login = () => {
  //   // this.props.login
  //   this.props.login();
  // }


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
          <Link to="/newuser" style={style.buttonStyle} className="mdc-button mdc-button--raised">New User</Link>
        </form>
      </div>
    );
  }
}
