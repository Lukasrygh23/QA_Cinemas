const express = require("express");
const mongoose = require("mongoose");
const movie = require("./routes/moviesRoutes.js");

const app = express();

app.use(express.json());

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
app.use(errorLogger);

// PORT
PORT = 5000 || process.env.PORT;
app.listen(PORT, console.log(`listening on port: ${PORT}`));
