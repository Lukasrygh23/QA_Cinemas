import React from "react";
import { Link } from 'react-router-dom';

const FilmCard = (props) => {
    console.log(props.data[0])
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
            <div class="row">
                <div class="col-4">
                    <h4 className="text-light ms-5">{props.data[0].movieTitle}</h4>
                    <img className="ms-5" src={props.data[0].imageURL} style={{width: "100%", height: "500px"}} alt="No Time To Die Poster" />
                </div>
                <div class="col-7">
                    <h5 className="text-light ms-5">{props.data[0].BBFCRating}</h5>
                    <h5 className="text-warning ms-5">Synopsis</h5>
                    <p className="text-light ms-5">{props.data[0].synopsis}</p>
                    <p className="text-light ms-5">Director</p>
                    <p className="text-white-50 ms-5 director">{props.data[0].director}</p>
                    <p className="text-light ms-5">Cast</p>
                    <p className="text-white-50 ms-5 me-5 cast">{formattedString}</p>
                    <p className="text-light ms-5">Running time</p>
                    <p className="text-white-50 ms-5 me-5 runtime">{`${props.data[0].runTime} minutes`}</p>
                    <button class="button-62 center-film-booking"><Link className="text-black-50" to="/booking/no_time_to_die">Get All Times & Tickets</Link></button>
                </div>
            </div>
        </React.Fragment>
     );
}

export default FilmCard;