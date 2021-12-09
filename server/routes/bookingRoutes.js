const router = require('express').Router();

const { Booking } = require('../persistence/booking.js');
const error = require;

router.post('/create', (req, res, next) => {
  const booking = new Booking(req.body);
  console.log(req.body);
  console.log(booking);

  booking
    .save()
    .then((result) => {
      res.status(201).send(`${result} saved to database!`);
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/getAll', (req, res) => {
  Booking.find((error, bookingList) => {
    if (error) {
      console.log(`Error: (: ${error})`);
    }
    res.status(200).send(bookingList);
  });
});

module.exports = router;
