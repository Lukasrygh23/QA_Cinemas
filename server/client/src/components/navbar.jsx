import { Link } from 'react-router-dom';
import Logo from '../resources/QA Cinemas.png';
import '../css/navbar.css'

const navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div id="nav-container" className="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000/" target="_self"><img id="logo" src={Logo} alt="todo clapping gif" width="200" height="200"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-fill w-100 justify-content-center">
                        <li className="nav-item">
                            <Link className="text-light" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="text-light" to="/OpeningTimes">Opening Times</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Current Releases
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="nav-item"><Link className="dropdown-item" to="/movie/no_time_to_die">No Time To Die</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/movie/dune">Dune: Part One</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/movie/eternals">Eternals</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/movie/the_last_duel">The Last Duel</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Upcoming Releases
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="nav-item"><Link className="dropdown-item" to="/movie/spiderman_no_way_home">Spider-man: No Way Home</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/movie/the_matrix_resurrections">The Matrix Resurrections</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/movie/the_kings_man">The King's Man</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/movie/the_batman">The Batman</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="text-light" to="/Discussion">Discussion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-light" to="/ScreenListings">Screen Listings</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="text-light nav-link dropdown-toggle" href="/" id="navbarHelpDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Help
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="nav-item"><Link className="dropdown-item" to="/About">About</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/Contact">Contact Us</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/HowToGetHere">Getting Here</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/LocalVenues">Local Venues</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/FilmClassification">Film Classification</Link></li>
                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex" onSubmit={props.handleSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search Term" name="search" aria-label="Search" onChange={props.handleUserInput}></input>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default navbar;