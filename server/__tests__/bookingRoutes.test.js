const { expect } = require("chai");
const chai = require("chai");
const { Booking } = require("../persistence/booking");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = "../routes/bookingRoutes";

const testBooking = new Booking({
  bookingName: "Alfred",
  movieTitle: "No Time To Die",
  screenType: "Regular",
  numberOfSeats: 2,
  adult: 1,
  child: 1,
  date: 2021 - 12 - 19,
  time: "18:45",
  consessions: false, //Considered changing to array.
  price: 19,
});

describe("Booking Routes", () => {
  it("Create Booking Test", (done) => {
    chai
      .request(app)
      .post("/create")
      .send(testBooking)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res).to.not.be.null;
        expect(res).to.have.status.apply(201);
        expect(res).to.have.property(
          "text",
          `${testBooking} saved to database!`
        );
        done();
      });
  });

  it("Get All Bookings Test", (done) => {
    chai
      .request(app)
      .get("/getAll")
      .end((err, res) => {
        if (err) {
          done(err);
        }
        const body = res.body;
        expect(res).to.have.status(200);
        expect(body).to.not.be.null;

        body.map((Booking) => {
          expect(Booking).to.be.a("Object");
          expect(Booking).to.contain.keys("bookingName");
          expect(Booking.bookingName).to.be.a("string");
          expect(Booking).to.contain.keys("movieTitle");
          expect(Booking.movieTitle).to.be.a("string");
          expect(Booking).to.contain.keys("screenType");
          expect(Booking.screenType).to.be.a("string");
          expect(Booking).to.contain.keys("numberOfSeats");
          expect(Booking.numberOfSeats).to.be.a("number");
          expect(Booking).to.contain.keys("adult");
          expect(Booking.adult).to.be.a("number");
          expect(Booking).to.contain.keys("child");
          expect(Booking.child).to.be.a("number");
          expect(Booking).to.contain.keys("date");
          expect(Booking.date).to.be.a("date");
          expect(Booking).to.contain.keys("time");
          expect(Booking.time).to.be.a("String");
          expect(Booking).to.contain.keys("concessions");
          expect(Booking.concessions).to.be.a("boolean");
          expect(Booking).to.contain.keys("price");
          expect(Booking.price).to.be.a("number");
        });
      });
  });
});
