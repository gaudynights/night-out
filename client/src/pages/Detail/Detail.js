import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

const style = {
  margin: 20,
  btnStyle: {
    backgroundColor: "#607D8B"
  }
}

class Detail extends Component {
  state = {
    activity: []
  };

  componentDidMount() {
    API.getActivity(this.props.match.params.id)
      .then(res => this.setState({ activity: res.data }))
      .catch(err => console.log(err));
  }

  searchLocation = (loc) => {
    API.search(loc)
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
  }

  handleClick = () => {
    this.searchLocation(this.state.location);
  }

  render() {
    return (
      <div style={style}>
        <h1>{this.state.activity.activityName}</h1>
        <hr />
        <h3>More Details</h3>
        <p>Location: {this.state.activity.location}</p>
        <p>Description: {this.state.activity.activityDescription}</p>
        <Link style={style.btnStyle} to="/board" className="mdc-button mdc-button--raised">← Back to board</Link>
    </div>
    );
  }
}

export default Detail;
