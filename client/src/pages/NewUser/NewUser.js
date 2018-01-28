import React from "react";

const style = {
  margin: 20,
  buttonStyle: {
    backgroundColor: "#607D8B"
  }
}

export default class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div style={style}>
        <h1>Please enter your information</h1>
        <hr />
        <form>
          <div className="mdc-text-field">
            <input name="name" type="text" className="mdc-text-field__input" placeholder="Full Name" value={this.state.name} onChange={this.handleChange} />
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
          <button className="mdc-button mdc-button--raised" style={style.buttonStyle} onClick={this.handleClick} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
