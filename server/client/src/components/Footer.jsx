import React from "react";
import "../css/Footer.css";
const Footer = () => {
    return (
        <div className="footer-main">
            <div className="container">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4> </h4>
                        <ul className="list-plain">
                            <li>0845 757 388</li>
                            <li>Manchester, United Kingdom</li>
                            <li> 8, St James' Bldg, 61-95 Oxford St, M1 6FQ</li>
                        </ul>
                    </div>
                    {/* column2 */}
                     <div className="col">
                        <h4> </h4>
                        <ul className="list-plain">
                            <li> <a href="http://localhost:3000/HowToGetHere">Getting Here</a></li>
                            <li><a href="http://localhost:3000/LocalVenues">Local Venues</a></li>
                            <li><a href="http://localhost:3000/About">About Us</a></li>
                        </ul>
                    </div>
                    {/* column3 */}
                     <div className="col">
                        <h4> </h4>
                        <ul className="list-plain">
                            <li><a href="http://localhost:3000/FilmClassification">Film Classification</a></li>
                            <li><a href="http://localhost:3000/Discussion">Discussion Board</a></li>
                            
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