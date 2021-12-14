import { Link } from 'react-router-dom';

import '../css/Card.css'
const UpcomingMovies = (props) => {
const {movie}=props;

    if (movie.newRelease === true) {
        return (
            <div>
            <div class="container">

                <div class="row  mt-5 mb-3">
                    <div class="col-sm-8">
                        {/* <h2 class="text-light mb-5 mt-2">Synopsis</h2> */}
                        <h2 class="text-light mt-3 mb-3">{movie.movieTitle}</h2>
                        <p class="text-light">{movie.synopsis} </p>
                            <br />
                            {movie.movieTitle === "Spider-man: No Way Home" &&(<button class="button-62">
                                <Link to="/movie/spiderman_no_way_home">More Information</Link>
                            </button>)}
                            {movie.movieTitle === "The Matrix Resurrections" && (<button class="button-62">
                                <Link to="/movie/the_matrix_resurrections">More Information</Link>
                            </button>)}
                            {movie.movieTitle === "The King's Man" &&(<button class="button-62">
                                <Link to="/movie/the_kings_man">More Information</Link>
                            </button>)}
                            {movie.movieTitle === "The Batman" &&(<button class="button-62">
                                <Link to="/movie/the_batman">More Information</Link>
                            </button>)}
                        </div>
                        <div class="col-sm-4"><img class="movImg mb-5" src={movie.imageURL} alt='' /></div>
                        <hr class="hrTag" />
                </div>
            </div>
            <br />
            </div>
        )
    } else {
        return null;
    }

}
export default UpcomingMovies;