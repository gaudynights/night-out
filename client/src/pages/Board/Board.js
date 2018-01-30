import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
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

  handleClick = (e) => {
    e.preventDefault();
    alert("click");
  };

  handleLike = (e) => {
    e.preventDefault();
    alert("like");
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
    nightID: ""
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.activityName && this.state.activityDescription) {
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
    }
  };

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
                    <button onClick={this.handleLike}className="mdc-fab material-icons" aria-label="Favorite">
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
