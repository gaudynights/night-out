import axios from "axios";
// axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
const frontURL = "https://api.giphy.com/v1/gifs/search?q=";
const backURL = "&api_key=dc6zaTOxFJmzC&limit=20";

const getToken = () => {
  const token=localStorage.getItem("token");
  axios.defaults.headers.common['authorization'] = token;
}

export default {

  // Gets all activities
  getActivities: function() {
    getToken();
    return axios.get("/api/activities");
  },
  // Gets the activity with the given id
  getActivity: function(id) {
    getToken();
    return axios.get("/api/activities/" + id);
  },
  getNight: function(nightID) {
    getToken();
    console.log("get night");
    return axios.post("/api/activities/" + nightID);
  },
  // Deletes the activity with the given id
  deleteActivity: function(id) {
    getToken();
    return axios.delete("/api/activities/" + id);
  },
  updateActivity: function(id, votes){
    getToken();
    return axios.put("/api/activities/"+id,votes);
  },
  // Saves an activity to the database
  saveActivity: function(activityData) {
    getToken();
    return axios.post("/api/activities", activityData);
  },
  createUser: function(userData){
    return axios.post("/api/authenticate/register", userData);
  },
  login:function(userData){
    return axios.post("/api/authenticate/login",userData);
  },
  search:function(loc){
    return axios.get(frontURL + loc + backURL);
  }
};
