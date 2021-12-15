
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
                    expect(movie.synopsis).to.be.a("string");
                    expect(movie.newRelease).to.be.a("boolean");
                    expect(movie.screenings).to.be.a("array");

                    //Some are ommitted here, because not everyone has them.
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

    it('Get By ID Test', (done) => {
        //Act
        chai.request(app)
            .get("/movieRoutes/getById/1")
            .end((err, res) => {
                if (err) {
                    done(err);
                }
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.not.be.null;
                const body = res.body;
                
                body.map((movie) => {
                    expect(movie).to.be.a("object");
                    expect(movie).to.contain.keys("_id", "movieTitle", "id", "runTime", "BBFCRating", "criticRating", "director", "cast", "synopsis", "imageURL", "newRelease", "__v", "releaseDate");

                    expect(movie.id).to.be.a("number");
                    expect(movie.id).to.equal(1);

                    expect(movie.movieTitle).to.be.a("string");
                    expect(movie.movieTitle).to.equal("No Time To Die");

                    expect(movie.runTime).to.be.a("number");
                    expect(movie.runTime).to.equal(163);

                    expect(movie.BBFCRating).to.be.a("string");
                    expect(movie.BBFCRating).to.equal("12A");

                    expect(movie.director).to.be.a("string");
                    expect(movie.director).to.equal("Cary Joji Fukunaga");

                    expect(movie.cast).to.be.a("array");
                    expect(movie.cast[0]).to.equal("Daniel Craig");
                    expect(movie.cast[8]).to.equal("Ralph Fiennes");
                    //not testing the entire array, but the first and last values.

                    expect(movie.synopsis).to.be.a("string");
                    expect(movie.synopsis).to.equal("In this film, Bond, who has left active service with MI6, is recruited by the CIA to find a kidnapped scientist, which leads to a showdown with a powerful adversary. ")

                    expect(movie.imageURL).to.be.a("string");
                    expect(movie.imageURL).to.equal("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.filmstories.co.uk%2Fwp-content%2Fuploads%2F2020%2F02%2Fno-time-to-die-poster-2.jpg");

                    expect(movie.newRelease).to.be.a("boolean");
                    expect(movie.newRelease).to.be.false;

                    expect(movie.screenings).to.be.a("array");
                    //This is empty.

                    expect(movie.releaseDate).to.be.a("string");


                })
                done();

            })
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