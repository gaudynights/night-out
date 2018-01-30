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

        <div></div>
        <div></div>
        <div>            
        {this.state.activities.length ? (
              <List>
                {this.state.activities.map(activity => (
                  <ListItem key={activity._id}>
                    <Link to={"/activities/" + activity._id}>
                      <h2>
                        {activity.activityName} 
                      </h2>
                    </Link>
                    <button onClick={() => this.upvoteActivity(activity._id, activity.votes)} className="mdc-fab material-icons" aria-label="Favorite">
                      <span className="mdc-fab__icon">
                        favorite
                      </span>
                    </button>
                    <p>{activity.activityDescription}</p>
                    <p>{activity.activityTime}</p>
                    <p>{activity.location}</p>
                    <p>{activity.link}</p>
                    <p>{activity.notes}</p>
                    <p>{activity.date}</p>
                    <p>{activity.votes}</p>
                    <p>{activity.nightID}</p>
                    <DeleteBtn onClick={() => this.deleteActivity(activity._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
      </div>
    );
  }
}
