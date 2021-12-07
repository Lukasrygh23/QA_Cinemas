import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="http://www.staggeringbeauty.com/" target="_blank">Logo goes here</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/movie/no_time_to_die">Opening Times</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/NewReleases">New Releases</Link>
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
                </div>
            </div>
        </nav>
    );
}

export default navbar;