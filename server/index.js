const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const movie = require("./routes/moviesRoutes.js");
const screening = require("./routes/screeningRoutes.js");
const booking = require("./routes/bookingRoutes.js");

const app = express();

app.use(express.json());
//cors installed and app.use added for cors
app.use(cors());

const errorLogger = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.message);
};

mongoose.connect(
  "mongodb+srv://Mystic:root@qacinemas.j3eem.mongodb.net/QACinemas?retryWrites=true&w=majority",
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

//simple usage tutorial followed, hopefully should work
app.get("/movieRoutes/getAll", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

// PORT
PORT = 5000 || process.env.PORT;
app.listen(PORT, console.log(`listening on port: ${PORT}`));
