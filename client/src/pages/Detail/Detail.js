import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

const style = {
  margin: 20,
  btnStyle: {
    backgroundColor: "#607D8B"
  },
  locationStyle: {
    cursor: "pointer"
  }
}



class Detail extends Component {
  state = {
    activity: []
  };





  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.props.match.params.id);
    API.getActivity(this.props.match.params.id)
      .then(res => {
        this.setState({ activity: res.data });
      console.log(this.state.activity);
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log("rendering");
    return (
      <div style={style}>
        <h1>{this.state.activity.activityName}</h1>
        <hr />
        <h3>More Details</h3>
        <p>{this.state.activity.locationSimple}</p>
        <a href=""> {this.state.activity.locationExtended ? this.state.activity.locationExtended.formatted_address : this.state.activity.locationSimple}</a>
        <br/>
        <a href="">{this.state.activity.locationExtended ? this.state.activity.locationExtended.formatted_phone_number : ""}</a>
        <p>Description: {this.state.activity.activityDescription}</p>
        <p>Google rating: {this.state.activity.locationExtended ? this.state.activity.locationExtended.rating : ""}</p>
        <p></p>
<iframe id="map-embed" width="400px" height="400px" src="//www.google.com/maps/embed/v1/place?q=usa&zoom=15&key=AIzaSyCijGORV-k4rRc1KhNlXGZ0YkdrL81xyss">
  </iframe>
        <Link style={style.btnStyle} to="/board" className="mdc-button mdc-button--raised">← Back to board</Link>
    </div>
    );
  }
}

export default Detail;
