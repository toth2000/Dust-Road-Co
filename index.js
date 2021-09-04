const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const rideRoute = require("./routes/ride");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUrl = process.env.mongoURL;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server running");
});

app.use("/auth", authRoute);
app.use("/ride", rideRoute);

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening to PORT ${PORT}`);
    });
  })
  .catch((error) => console.log("Mongoose Connect Error", error));
