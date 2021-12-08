import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="http://www.staggeringbeauty.com/" target="_blank">Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/OpeningTimes">Opening Times</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Current Releases
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li class="nav-item"><Link class="dropdown-item" to="/movie/no_time_to_die">No Time To Die</Link></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Upcoming Releases
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li class="nav-item"><Link class="dropdown-item" to="/NewReleases">View All</Link></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <Link to="/FilmClassification">Film Classification</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/ScreenListings">Screen Listings</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/About">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Contact"></Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" name="search" aria-label="Search"></input>
                        <button class="button-62 mb-2" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default navbar;