import React from "react";
import Modal from "react-modal";

const style = {
  margin: 20,
  buttonStyle: {
    backgroundColor: "#607D8B",
    marginBottom: 10
  }
}

export default class Board extends React.Component {
  state = {
    modalIsOpen: false,
    category: "",
    location: "",
    time: ""
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
    this.setState({
      category: "",
      location: "",
      time: ""
    });
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
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div style={style}>
        <h1>Board Name</h1>
        <hr />
        <button onClick={this.openModal} style={style.buttonStyle} className="mdc-fab material-icons">
          <span className="mdc-fab__icon">add</span>
        </button>
        <Modal isOpen={this.state.modalIsOpen} ariaHideApp={false}>
          <button onClick={this.closeModal}>X</button>
          <h1>Add To Your Board</h1>
          <form>
            <div className="mdc-text-field">
              <input name="category" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.category} placeholder="Category" />
            </div><br />
            <div className="mdc-text-field">
              <input name="location" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.location} placeholder="Location" />
            </div><br />
            <div className="mdc-text-field">
              <input name="time" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.time} placeholder="Time" />
            </div><br />
            <button onClick={this.handleClick} style={style.buttonStyle} className="mdc-button mdc-button--raised">Submit</button>
          </form>
        </Modal>
        <div>
          <p>{this.state.title}</p>
          <p>{this.state.category}</p>
          <p>{this.state.location}</p>
          <p>{this.state.time}</p>
        </div>
      </div>
    );
  }
}
