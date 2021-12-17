import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div className="container">
                <h1>Sorry, this page doesn't exist</h1>
                <p className="text-light">Click <Link className="text-primary" to="/">here</Link> to return to the home page.</p>
                <img src="https://c.tenor.com/4bnjrFqtz84AAAAC/michael-scott-please-no-god.gif" alt="the office michael scott gif"></img>
            </div>
        </>
    );
}

export default NotFound;