import React from "react";
import API from "../../utils/API";

const style = {
  margin: 20,
  buttonStyle: {
    backgroundColor: "#607D8B"
  }
}

export default class NewUser extends React.Component {
    state = {
      firstName: "",
      lastName:"",
      email: "",
      password: ""
    }


  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
    // console.log("state: "+JSON.stringify(this.state));
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
  };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password && this.state.firstName && this.state.lastName) {
        console.log(this.state);
      API.createUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {alert("user created");
          // console.log("newUser ------------ ");
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userID", res.data.user._id);
          localStorage.setItem("email", res.data.user.email);
          localStorage.setItem("name", res.data.user.firstName.concat(" ",res.data.user.lastName.charAt(0),"."));
          // console.log(this.props);
          this.props.history.push("/board")
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div style={style}>
        <h1>Please enter your information</h1>
        <hr />
        <form>
          <div className="mdc-text-field">
            <input name="firstName" type="text" className="mdc-text-field__input" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
          </div>
          <br />
          <div className="mdc-text-field">
            <input name="lastName" type="text" className="mdc-text-field__input" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} />
          </div>
          <br />
          <div className="mdc-text-field">
            <input name="email" type="text" className="mdc-text-field__input" placeholder="name@example.com" value={this.state.email} onChange={this.handleChange} />
          </div>
          <br />
          <div className="mdc-text-field">
            <input name="password" type="password" className="mdc-text-field__input" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <br/>
          <button className="mdc-button mdc-button--raised" style={style.buttonStyle} onClick={this.handleFormSubmit} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
