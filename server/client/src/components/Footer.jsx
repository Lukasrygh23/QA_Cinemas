import React from "react";
import "../css/Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="container">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4> </h4>
                        <ul className="list-plain">
                            <a href="tel:0845 757 388">0845 757 388</a>
                            <p>8th Floor, St James Bldg<br></br>
                                61 - 65 Oxford Street<br></br>
                                Manchester<br></br>
                                M1 6FQ</p>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="col">
                        <h4> </h4>
                        <ul className="list-plain">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/HowToGetHere">Getting Here</Link></li>
                            <li><Link to="/LocalVenues">Local Venues</Link></li>
                            <li><Link to="/About">About Us</Link></li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <h4> </h4>
                        <ul className="list-plain">
                            <li><Link to="/FilmClassification">Film Classification</Link></li>
                            <li><Link to="/Discussion">Discussion Board</Link></li>
                            <li><Link to="/Contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="col-sm">
                        &copy;{"2021"} Team Mystic | All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;