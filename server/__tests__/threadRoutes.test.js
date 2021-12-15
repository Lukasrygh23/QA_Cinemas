const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { Thread } = require("../persistence/thread.js");

chai.use(chaiHttp);

const app = require("../index");

const testThread = new Thread({
  userName: "testman",
  subject: "testing threads",
  rating: 5,
  reviewBody: "This is a test thread that we are using for testing",
  comments: [],
});

// const testComment = new Comment({
//   username: "testCommenter",
//   text: "wow a test comment",
// });


describe("Thread Routes", () => {
  
  it("Create Thread Test", (done) => {
    chai
      .request(app)
      .post("/threadRoutes/create")
      .send(testThread)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res).to.not.be.null;
        expect(res).to.have.status(201);
        expect(res).to.have.property(
          "text",
          `${testThread} saved to database!`
        );
        done();
      });
  });


  it("Get All Thread Test", (done) => {
    chai
      .request(app)
      .get("/threadRoutes/getAll")
      .end((err, res) => {
        if (err) {
          done(err);
        }
        const body = res.body;
        expect(res).to.have.status(200);
        expect(body).to.not.be.null;

        body.map((Thread) => {
          expect(Thread).to.be.a("Object");

          expect(Thread).to.contain.key("_id");
          expect(Thread).to.contain.key("userName");
          expect(Thread).to.contain.key("subject");
          expect(Thread).to.contain.key("reviewBody")
          expect(Thread).to.contain.key("comments");
          
          expect(Thread.userName).to.be.a("string");
          expect(Thread.subject).to.be.a("string");
          expect(Thread.reviewBody).to.be.a("string");
          expect(Thread.comments).to.be.a("array");

        });
        done();
      });
  });

  after((done) => {
    console.log("Thread Tests done");
    Thread.deleteOne({ userName: "testman" }).then(() => {
      done();
    });
  });
});
