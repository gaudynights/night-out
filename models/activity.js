const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const activitySchema = new Schema({
  activityName: { type: String, required: true },
  activityDescription: { type: String, required: true },
  activityTime: {type: String},
  locationSimple: {type: String},
  locationExtended: {type: Object},
  link: {type: String},
  notes: {type: String},
  date: { type: Date, default: Date.now },
  votes:{ type: Number, default:1},
  lovers: {type: Array, default:[]},
  nightID: {type: String, default:1}
});


const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
