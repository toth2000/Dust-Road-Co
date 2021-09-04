const mongoose = require("mongoose");

const RideSchema = mongoose.Schema({
  creatorId: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  sourceCoordinate: {
    lat: { type: String, required: true },
    lon: { type: String, required: true },
  },
  destinationCoordinate: {
    lat: { type: String, required: true },
    lon: { type: String, required: true },
  },
  sourceAddress: { type: String, required: true },
  destinationAddress: { type: String, required: true },
});

module.exports = mongoose.model("Ride", RideSchema);
