const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Movie } = require("../persistence/movie.js");

chai.use(chaiHttp);

const app = require('../index');


describe('Testing the movie Route', () => {

    //Test Objects
    const deleteMovie = new Movie({
        movieTitle: "How to Test",
        id: 20,
        runTime: 250,
        BBFCRating: "U",
        criticRating: 59,
        director: "Derp",
        cast: ["herp", "derp"],
        synopsis: "Don't ask me",
        imageURL: "Lol",
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
        imageURL: "Lol",
        newRelease: false
    });

    const getOneMovie = new Movie({
        movieTitle: "TestTestTest",
        id: 22,
        runTime: 10,
        BBFCRating: "R18",
        criticRating: 10,
        director: "He who for legal reasons must not be named",
        cast: ["One", "Two"],
        synopsis: "A thing happens. The end.",
        imageURL: "show's over, folks!",
        newRelease:false
    })

    before((done) => {
        chai.request(app).post("/movieRoutes/create").send(getOneMovie).end(() => {
            console.log("Creating movie for GetById...");
        });
        chai.request(app).post("/movieRoutes/create").send(deleteMovie).end(() => {
            console.log("Creating movie to be deleted...")
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
            .get("/movieRoutes/getById/22")
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
                    
                    expect(movie).to.contain.key("id");
                    expect(movie.id).to.be.a("number");
                    expect(movie.id).to.equal(22);

                    expect(movie).to.contain.key("movieTitle");
                    expect(movie.movieTitle).to.be.a("string");
                    expect(movie.movieTitle).to.equal("TestTestTest");

                    expect(movie).to.contain.key("runTime");
                    expect(movie.runTime).to.be.a("number");
                    expect(movie.runTime).to.equal(10);

                    expect(movie).to.contain.key("BBFCRating");
                    expect(movie.BBFCRating).to.be.a("string");
                    expect(movie.BBFCRating).to.equal("R18");

                    expect(movie).to.contain.key("criticRating");
                    expect(movie.criticRating).to.be.a("number");
                    expect(movie.criticRating).to.equal(10);

                    expect(movie).to.contain.key("director")
                    expect(movie.director).to.be.a("string");
                    expect(movie.director).to.equal("He who for legal reasons must not be named");

                    expect(movie).to.contain.key("cast");
                    expect(movie.cast).to.be.a("array");
                    expect(movie.cast[0]).to.equal("One");
                    expect(movie.cast[1]).to.equal("Two");
                    
                    expect(movie).to.contain.key("synopsis");
                    expect(movie.synopsis).to.be.a("string");
                    expect(movie.synopsis).to.equal("A thing happens. The end.")

                    expect(movie).to.contain.key("imageURL");
                    expect(movie.imageURL).to.be.a("string");
                    expect(movie.imageURL).to.equal("show's over, folks!");

                    expect(movie).to.contain.key("newRelease");
                    expect(movie.newRelease).to.be.a("boolean");
                    expect(movie.newRelease).to.be.false;

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

    it('Test Create Error', (done) => {

        chai.request(app)
            .post("/movieRoutes/create")
            .send({
                id:"This isn't allowed to be an ID"
            })
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    done(err);
                }

                //console.log(res);
                expect(res).to.have.status(500);
                done();
            })
        })


    after((done) => {
        chai.request(app).delete("http://localhost:5000/movieRoutes/deleteById/20").end(() => {
            console.log("Delete request for movie ID 20 - if it hasn't been deleted already.");
        })
        chai.request(app).delete("/movieRoutes/deleteById/21").end(() => {
            console.log("Delete request for movie ID 21, which we created.");
            
        })
        chai.request(app).delete("/movieRoutes/deleteById/22").end(() => {
            console.log("Delete request for movie ID 22, which we used to test GetById.");
            done();
        });


    });

})