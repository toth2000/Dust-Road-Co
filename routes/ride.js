const express = require("express");

const { getRides, createRide } = require("../controller/ride");

const router = express.Router();

router.get("/", (req, res) => res.send("Ride Route"));
router.get("/:lat/:lon", getRides);
router.post("/createRide", createRide);

module.exports = router;
