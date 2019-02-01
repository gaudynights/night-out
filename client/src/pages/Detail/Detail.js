import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

const style = {
  margin: 20,
  btnStyle: {
    backgroundColor: "#607D8B",
    marginTop: 5
  },
  locationStyle: {
    cursor: "pointer"
  }
}


class Detail extends Component {
  state = {
    activity: [],
    mapLocation: "garwood lanes"
  };


  componentWillMount() {
    console.log("componentWillMount");
    console.log(this.props.match.params.id);
    API.getActivity(this.props.match.params.id)
      .then(res => {
        this.setState({ activity: res.data });
      console.log(this.state.activity);
      let mapSpot=this.state.activity.locationSimple;
      console.log(mapSpot);
      // console.log("wheres the & "+mapSpot.indexOf('&'));
      mapSpot=mapSpot.replace('&','%26');
      this.setState({mapLocation:mapSpot})
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
        <p><a href={this.state.activity.locationExtended ? this.state.activity.locationExtended.website : ""} target="_blank">{this.state.activity.locationExtended ? this.state.activity.locationExtended.website : ""}</a></p>
        <p><a href=""> {this.state.activity.locationExtended ? this.state.activity.locationExtended.formatted_address : this.state.activity.locationSimple}</a></p>
        <p><a href="">{this.state.activity.locationExtended ? this.state.activity.locationExtended.formatted_phone_number : ""}</a></p>
        <p>Description: {this.state.activity.activityDescription}</p>
        <p>Google rating: {this.state.activity.locationExtended ? this.state.activity.locationExtended.rating : ""}</p>
        <iframe title="map-embed" id="map-embed" width="auto" height="400" src={`//www.google.com/maps/embed/v1/place?q=${this.state.mapLocation}&zoom=15&key=AIzaSyCijGORV-k4rRc1KhNlXGZ0YkdrL81xyss`}>
        </iframe>
        <br />
        <Link style={style.btnStyle} to="/board" className="mdc-button mdc-button--raised">← Back to board</Link>
    </div>
    );
  }
}

export default Detail;
