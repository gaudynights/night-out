import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

const style = {
  margin: 20,
  buttonStyle: {
    backgroundColor: "#607D8B",
    marginBottom: 10
  },
  favBtn: {
    backgroundColor: "#ddd",
    color: "#F06292",
    marginLeft: 10
  },
  divStyle: {
    backgroundColor: "#607D8B",
    color: "#fff",
    float: "left",
    paddingTop: 5,
    paddingBottom: 5,
    margin: 10,
    borderRadius: 10,
    boxShadow: "2px 2px #ccc"
  },
  headStyle: {
    color: "#fff",
    margin: 10,
    textTransform: "none"
  },
  elementStyle: {
    margin: 10
  },
  inputStyle: {
    margin: 15
  },
  subBtn: {
    margin: 10,
    backgroundColor: "#607D8B"
  }
}

export default class Board extends React.Component {


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

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ modalIsOpen: false });
  };

    state = {
    activities: [],
    activityName: "",
    activityDescription: "",
    activityTime: "",
    location: "",
    link: "",
    notes: "",
    votes: "",
    nightID: "",
    modalIsOpen: false
    };

  componentDidMount() {
    this.loadActivities();
  }

  loadActivities = () => {
    API.getActivities()
      .then(res =>
        this.setState({ activities: res.data, activityName: "", activityDescription: "", activityTime: "", location: "", link: "", notes: "", votes: "", nightID: ""})
      )
      .catch(err => console.log(err));
  };

  deleteActivity = id => {
    API.deleteActivity(id)
      .then(res => this.loadActivities())
      .catch(err => console.log(err));
  };

  upvoteActivity = (id , votes) => {
        alert("current votes "+votes);
    API.updateActivity(id,{
      votes: votes+1
    })
      .then(res => this.loadActivities())
      .catch(err => console.log(err));
  }


  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.activityName && this.state.activityDescription) {
        console.log(this.state);
      API.saveActivity({
        activityName: this.state.activityName,
        activityDescription: this.state.activityDescription,
        activityTime: this.state.activityTime,
        location: this.state.location,
        link: this.state.link,
        notes: this.state.notes,
        votes: this.state.votes,
        nightID: this.state.nightID
      })
        .then(res => this.loadActivities())
        .catch(err => console.log(err));
        this.setState({ modalIsOpen: false });
    }
  };

  render() {
    return (
      <div style={style}>
        <h1>Board Name</h1>
        <hr />

        <button onClick={this.openModal} style={style.buttonStyle} className="mdc-fab material-icons">
          <span className="mdc-fab__icon">add</span>
        </button>

        <div className="mdc-text-field">
          <input style={style.inputStyle} name="nightcode" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.nightcode} placeholder="Night Code" />
        </div>
        <button style={style.subBtn} className="mdc-button mdc-button--raised">Submit</button>

        <Modal isOpen={this.state.modalIsOpen} ariaHideApp={false}>
          <button onClick={this.closeModal}>X</button>
          <h1>Add To Your Board</h1>
          <form>
            <div className="mdc-text-field">
              <input name="activityName" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.activityName} placeholder="activityName" />
            </div><br />
            <div className="mdc-text-field">
              <input name="activityDescription" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.activityDescription} placeholder="activityDescription" />
            </div><br />
            <div className="mdc-text-field">
              <input name="activityTime" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.activityTime} placeholder="activityTime" />
            </div><br />
            <div className="mdc-text-field">
              <input name="location" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.location} placeholder="location" />
            </div><br />
            <div className="mdc-text-field">
              <input name="link" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.link} placeholder="link" />
            </div><br />
            <div className="mdc-text-field">
              <input name="nightID" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.nightID} placeholder="nightID" />
            </div><br />

            <button onClick={this.handleFormSubmit} style={style.buttonStyle} className="mdc-button mdc-button--raised">Submit</button>
          </form>
        </Modal>

        <div>
        {this.state.activities.length ? (
              <div>
                <List>
                    {this.state.activities.map(activity => (
                      <div style={style.divStyle}>
                      <ListItem key={activity._id}>
                        <Link to={"/activities/" + activity._id}>
                          <DeleteBtn onClick={() => this.deleteActivity(activity._id)} />
                          <h2 style={style.headStyle}>
                            {activity.activityName}
                          </h2>
                          <button onClick={this.handleLike} style={style.favBtn} className="mdc-fab mdc-fab--mini material-icons" aria-label="Favorite">
                            <span className="mdc-fab__icon">
                              favorite
                            </span>
                          </button>
                        </Link>
                        <p style={style.elementStyle}><strong>Description: </strong>{activity.activityDescription}</p>
                        <p style={style.elementStyle}><strong>Time: </strong>{activity.activityTime}</p>
                        <p style={style.elementStyle}><strong>Location: </strong>{activity.location}</p>
                        <p style={style.elementStyle}><strong>Link: </strong>{activity.link}</p>
                        <p style={style.elementStyle}><strong>Notes: </strong>{activity.notes}</p>
                        <p style={style.elementStyle}><strong>Date: </strong>{activity.date}</p>
                        <p style={style.elementStyle}><strong>Votes: </strong>{activity.votes}</p>
                        <p style={style.elementStyle}><strong>Night Code: </strong>{activity.nightID}</p>
                      </ListItem>
                      </div>
                    ))}
                </List>
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
      </div>
    );
  }
}
