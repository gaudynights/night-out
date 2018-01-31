import axios from "axios";

export default {
  // Gets all activities
  getActivities: function() {
    return axios.get("/api/activities");
  },
  // Gets the activity with the given id
  getActivity: function(id) {
    return axios.get("/api/activities/" + id);
  },
  // Deletes the activity with the given id
  deleteActivity: function(id) {
    return axios.delete("/api/activities/" + id);
  },
  updateActivity: function(id, votes){
    return axios.put("/api/activities/"+id,votes);
  },
  // Saves an activity to the database
  saveActivity: function(activityData) {
    return axios.post("/api/activities", activityData);
  },
  createUser: function(userData){
    return axios.post("/api/authenticate/register", userData);
  },
  login:function(userData){
    return axios.post("/api/authenticate/login",userData);
  }
};
