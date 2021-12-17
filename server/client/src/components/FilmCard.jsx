import React from "react";
import { Link } from 'react-router-dom';
import '../css/filmCard.css'

const FilmCard = (props) => {
     let formattedString = ""

    const formatCastArray = () => {
        const castArray = props.data[0].cast
        for (let x = 0; x < castArray.length - 1; x++) {
            formattedString += `${castArray[x]}, `
        }
        for (let x = castArray.length-1; x < castArray.length; x++) {
            formattedString += `${castArray[x]}`
        }
        return formattedString
    }

    formatCastArray()

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <h4 className="text-light ms-5">{props.data[0].movieTitle}</h4>
                    <img className="ms-5" src={props.data[0].imageURL} style={{width: "100%", height: "500px"}} alt="No Time To Die Poster" />
                </div>
                <div class="col-7">
                    {(props.data[0].BBFCRating === "12A" ? <h5 className="text-light ms-5">{props.data[0].BBFCRating}</h5> : props.data[0].BBFCRating === "15" ? <h5 className="text-danger ms-5">{props.data[0].BBFCRating}</h5> : <h5 className="text-danger ms-5">{props.data[0].BBFCRating}</h5>) }
                    <h5 className="text-warning ms-5">Synopsis</h5>
                    <p className="text-light ms-5">{props.data[0].synopsis}</p>
                    <p className="text-light ms-5">Director</p>
                    <p className="text-white-50 ms-5 director">{props.data[0].director}</p>
                    <p className="text-light ms-5">Cast</p>
                    <p className="text-white-50 ms-5 me-5 cast">{formattedString}</p>
                    <p className="text-light ms-5">Running time</p>
                    {props.data[0].runTime !== 0 ? <p className="text-white-50 ms-5 me-5 runtime">{props.data[0].runTime} minutes</p> : <p className="text-white-50 ms-5 me-5 runtime">TBC</p>}
                    <p className="text-light ms-5">{props.screen}</p>
                    <p className="text-white-50 ms-5 upcoming">Upcoming showings</p>
                    <p id="showtimesContainer" className="text-light ms-5 showtimes"> <span className="">{props.showtime1 }</span> <span className="ms-3">{props.showtime2 }</span><span className="ms-3">{props.showtime3}</span></p>
                    <button className="button-62 center-film-booking"><Link className="text-black-50" to={`/booking/${props.bookingFormURLParam}`}>Get All Times & Tickets</Link></button>
                </div>
            </div>
        </React.Fragment>
     );
}

export default FilmCard;