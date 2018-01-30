const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/datenite",
  {
    useMongoClient: true
  }
);

const activitySeed = [
  {
    activityName: "See a movie at the Draft House",
    activityDescription: "They've got The Disater Artist and I, Tonya. I already saw LadyBird, but I'd see it again!",
    activityTime: "",
    location: "1120 S Lamar Blvd, Austin, TX 78704",
    link: "https://drafthouse.com/austin/theater/south-lamar",
    notes: "We want to see I, Tonya - Michael and Kate",
    date: new Date(Date.now()),
    votes: 2,
    nightID: "ABCD"
  },
  {
    activityName: "Eat Pizza",
    activityDescription: "",
    activityTime: "",
    location: "Rockin Tomato",
    link: "http://rockintomatotx.com/10912",
    notes: "",
    date: new Date(Date.now()),
    votes: 2,
    nightID: "ABCD"
  },
  {
    activityName: "Play Putt-Putt",
    activityDescription: "Peter Pan Mini Golf is BYOB! Cash only, tho",
    activityTime: "",
    location: "1207 Barton Springs Rd, Austin, TX 78704",
    link: "http://peterpanminigolf.com/",
    notes: "",
    date: new Date(Date.now()),
    votes: 1,
    nightID: "ABCD"
  },
  {
    activityName: "Eat Ice Cream at Amy's",
    activityDescription: "If you tip them they will throw the ice cream across the street",
    activityTime: "",
    location: "1301 S Congress Ave, Austin, TX 78704",
    link: "http://amysicecreams.com/",
    notes: "",
    date: new Date(Date.now()),
    votes: 1,
    nightID: "ABCD"
  },
  {
    activityName: "Boot Scoot!!",
    activityDescription: "Dale Watson is playing at the Broken Spoke at 9",
    activityTime: "9 PM",
    location: "Broken Spoke",
    link: "https://www.brokenspokeaustintx.net/",
    notes: "",
    date: new Date(Date.now()),
    votes: 2,
    nightID: "ABCD"
  }

];

db.Activity
  .remove({})
  .then(() => db.Activity.collection.insertMany(activitySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
