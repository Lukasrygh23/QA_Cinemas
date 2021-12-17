import { Link } from 'react-router-dom';
import '../css/Card.css'

const UpcomingMovies = (props) => {
    const { movie } = props;

    if (movie.newRelease === true) {
        return (
            <div>
                <div className="container" key={movie.movieTitle}>
                    <div className="row mt-5 mb-3">
                        <div className="col-sm-8">
                            <h2 className="text-light mt-3 mb-3">{movie.movieTitle}</h2>
                            <p className="text-light">{movie.synopsis} </p>
                            <br />
                            {movie.movieTitle === "Spider-man: No Way Home" &&(<button className="button-62">
                                <Link to="/movie/spiderman_no_way_home">More Information</Link>
                            </button>)}
                            {movie.movieTitle === "The Matrix Resurrections" && (<button className="button-62">
                                <Link to="/movie/the_matrix_resurrections">More Information</Link>
                            </button>)}
                            {movie.movieTitle === "The King's Man" &&(<button className="button-62">
                                <Link to="/movie/the_kings_man">More Information</Link>
                            </button>)}
                            {movie.movieTitle === "The Batman" &&(<button className="button-62">
                                <Link to="/movie/the_batman">More Information</Link>
                            </button>)}
                        </div>
                        <div className="col-sm-4"><img className="movImg mb-5" src={movie.imageURL} alt='' /></div>
                        <hr className="hrTag" />
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