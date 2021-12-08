require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const movie = require("./routes/moviesRoutes.js");
const screening = require("./routes/screeningRoutes.js");
const booking = require("./routes/bookingRoutes.js")

const app = express();

app.use(express.json());

const errorLogger = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.message);
};



const DBURL = () => {
  const combinedString = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + process.env.DB_HOST
  return ("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + process.env.DB_HOST);
}
//The .env requires a username, a password, and a host. The first part of the host is automatically added, and then the rest is constructed as a string.

const DatabaseUrl = DBURL();

mongoose.connect(
  DatabaseUrl,
  { useNewUrlParser: true },
  (error) => {
    if (error) {
      console.log(`Error, cant connect to database: ${error}`);
    } else {
      console.log("No error!");
    }
  }
);

app.use("/movieRoutes", movie);
app.use("/screeningRoutes", screening);
app.use("/bookingRoutes", booking);
app.use(errorLogger);

// PORT
PORT = 5000 || process.env.PORT;
app.listen(PORT, console.log(`listening on port: ${PORT}`));
