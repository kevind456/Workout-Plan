//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let bookModel = mongoose.Schema({
    PlanNum: String,
    Muscles: String,
    Day: String,
    Workouts:String,
    Duration:String
},
{
    collection:"Workout"
});
module.exports =mongoose.model('Book',bookModel);
