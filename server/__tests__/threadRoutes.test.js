const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { Thread, Comment } = require("../persistence/thread.js");

chai.use(chaiHttp);

const app = require("../index");

const testThread = new Thread({
  userName: "testman",
  subject: "testing threads",
  rating: 5,
  reviewBody: "This is a test thread that we are using for testing",
  comments: [],
});

const tDeleteThread = new Thread({
  userName: "deleteman",
  subject: "testing threads",
  rating: 5,
  reviewBody: "This is a test thread that we are using for testing",
  comments: [],
});

const testComment = new Comment({
  username: "testCommenter",
  text: "wow a test comment",
});

describe("Thread Routes", () => {
  before((done) => {
    chai
      .request(app)
      .post("/threadRoutes/create")
      .send(tDeleteThread)
      .end(() => {
        done();
      });
  });

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
          expect(Thread).to.contain.key("reviewBody");
          expect(Thread).to.contain.key("comments");

          expect(Thread.userName).to.be.a("string");
          expect(Thread.subject).to.be.a("string");
          expect(Thread.reviewBody).to.be.a("string");
          expect(Thread.comments).to.be.a("array");
        });
        done();
      });
  });

  it("Get Thread By ID", (done) => {
    chai
      .request(app)
      .get(`/threadRoutes/getThread/${tDeleteThread._id}`)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.not.be.null;
        done();
      });
  });

  it("Delete Thread By ID", (done) => {
    chai
      .request(app)
      .delete(`/threadRoutes/deleteThread/${tDeleteThread._id}`)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(err).to.be.null;
        expect(res).to.not.be.undefined;
        expect(res).to.have.status(204);
        done();
      });
  });

  it("Add Comment to Thread", (done) => {
    chai
      .request(app)
      .post(`/threadRoutes/addComment/${tDeleteThread._id}`)
      .send(testComment)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(err).to.be.null;
        expect(res).to.not.be.null;
        expect(res).to.not.be.undefined;
        done();
      });
  });

  it("Get Comment by id", (done) => {
    chai
      .request(app)
      .get(`/threadRoutes/getComment/${tDeleteThread._id}/${testComment._id}`)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(err).to.be.null;
        expect(res).to.not.be.null;
        expect(res).to.not.be.undefined;
        const body = res.body;

        body.map((Comment) => {
          expect(Comment).to.be.a("Object");
          expect(body).to.be.a("Array");
          expect(body).to.contain.key("username");
          expect(body).to.contain.key("text");
        });
        done();
      });
  });

  it("Delete Comment by ID", (done) => {
    chai
      .request(app)
      .delete(`/threadRoutes/deleteComment/${testComment._id}`)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(err).to.be.null;
        expect(res).to.not.be.undefined;
        expect(res).to.have.status(204);
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
