const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  postedby: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("event", eventSchema)
