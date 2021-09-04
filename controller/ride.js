const Ride = require("../model/Ride");

const getDistance = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c * 1000; // Distance in km
  return d;
};

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

const getRides = async (req, res) => {
  try {
    const { lat, lon } = req.params;
    
    const rides = await Ride.find();
    const ridesInRange = rides.filter((ride) => {
      const { lat: rideLat, lon: rideLon } = ride.sourceCoordinate;
      return getDistance(lat, lon, rideLat, rideLon) <= 5;
    });

    return res.status(200).json({ rides: ridesInRange });
  } catch (error) {
    console.log("Ride Controller getRides", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createRide = async (req, res) => {
  try {
    const { ride } = req.body;
    console.log("ride", ride);
    const newRide = await Ride.create(ride);
    res.status(200).json(newRide);
  } catch (error) {
    console.log("Ride Controller createRide", error);
    res.status(500).json({
      message:
        "Ride could not be created. Check if you have provided all the required data.",
    });
  }
};

module.exports = { getRides, createRide };
