
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Movie } = require("../persistence/movie.js");

chai.use(chaiHttp);

const app = require('../index');


describe('Testing the movie Route', () => {

    //Test Objects
    const createMovie = new Movie({
        movieTitle: "How to Test",
        id: 20,
        runTime: 250,
        BBFCRating: "U",
        criticRating: 59,
        director: "Derp",
        cast: ["herp", "derp"],
        synopsis: "Don't ask me",
        imageUrl: "Lol",
        newRelease: false
    });

    const movieToBeCreated = new Movie({
        movieTitle: "If you see this something is wrong",
        id: 21,
        runTime: 250,
        BBFCRating: "U",
        criticRating: 59,
        director: "Derp",
        cast: ["herp", "derp"],
        synopsis: "Don't ask me",
        imageUrl: "Lol",
        newRelease: false
    });

    before((done) => {
        chai.request(app).post("/movieRoutes/create").send(createMovie).end(() => {
            done();
        });
    });

    //test CREATE

    it('GET ALL test', (done) => {
        //Act
        chai.request(app)
            .get("/movieRoutes/getAll")
            .end((err, res) => {
                if (err) {
                    done(err);
                }
                const body = res.body;
                expect(res).to.have.status(200);
                expect(body).to.not.be.null;

                body.map((movie) => {
                    expect(movie).to.be.a("object");
                    //Iterate through each of the major fields.
                    expect(movie).to.contain.keys("movieTitle", "id", "runTime", "BBFCRating", "criticRating", "director", "cast", "synopsis", "newRelease", "screenings", "__v", "_id");
                    
                    //And then check to see what's in them.
                    expect(movie.id).to.be.a("number");
                    expect(movie.movieTitle).to.be.a("string");
                    expect(movie.runTime).to.be.a("number");
                    expect(movie.BBFCRating).to.be.a("string");
                    expect(movie.criticRating).to.be.a("number");
                    expect(movie.director).to.be.a("string");
                    expect(movie.cast).to.be.a("array");
                });
                done();
        })
    })

    it('Delete Test', (done) => {
        //Act
        chai.request(app)

            .delete("/movieRoutes/deleteById/20")
            .end((err, res) => {
                if (err) {
                    done(err);
                }
                expect(err).to.be.null;
                expect(res).to.not.be.undefined;
                expect(res).to.have.status(204);
                done();
            });
    })

    it('Create Test', (done) => {
        //Act
        chai.request(app)
            .post("/movieRoutes/create")
            .send(movieToBeCreated)
            .end((err, res) => {
                if (err) {
                    done(err);
                }
                expect(err).to.be.null;
                expect(res).to.not.be.undefined;
                expect(res).to.have.status(201);
                expect(res).to.have.property('text');

                done();
        })
    })


    after((done) => {
        chai.request(app).delete("http://localhost:5000/movieRoutes/deleteById/20").end(() => {
            console.log("Delete request for movie ID 20.");
        })
        chai.request(app).delete("/movieRoutes/deleteById/21").end(() => {
            console.log("Delete request for movie ID 21.");
            done();
        })


    });

})