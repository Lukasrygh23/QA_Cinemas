

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
                    expect(movie).to.be.a.to("object");
                    //Iterate through each of the major fields.
                    expect(movie).to.contain.keys("movieTitle", "id", "runTime", "BBFCRating", "criticrating", "director", "cast", "synopsis", "imageURL", "newRelease", "screenings", "releaseDate");
                    
                    //And then check to see what's in them.
                    expect(movie.id).to.be.a("number");
                    expect(movie.movieTitle).to.be.a("string");
                    expect(movie.runTime).to.be.a("number");
                    expect(movie.BBFCRating).to.be.a("string");

                });
                done();
        })
    })



    after((done) => {
        chai.request(app).post("/movieRoutes/deleteById/20").end(() => {
            done();
        })
    });

})