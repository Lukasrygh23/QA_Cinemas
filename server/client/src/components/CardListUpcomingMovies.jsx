import axios from "axios";// the import for axios so we can do requests
import { useEffect, useState } from "react";
import UpcomingMovies from "./UpcomingMovies";

//will retrieve the data
const CardListUpcomingMovies = () => {

    //state to store the data somewhere in case it changes
    const [data, setData] = useState([])
    //state to check if the data has loaded
    const [isLoaded, setIsLoaded] = useState(false)
    //state to check for error
    const [error, setError] = useState(null)//don't know if there will be an error, we set it as null

    useEffect(() => {
        setTimeout(() => {
            //get request to get the URL from
            axios.get("http://localhost:5000/movieRoutes/getAll")
                //.then -> once the data is received, do something
                .then((response) => {
                    setIsLoaded(true);
                    //use the setData to update the empty array
                    setData(response.data);
                    //the do something is to log the response to the console
                    //in case things don't go according to plan, need too catch the error and deal with it
                }).catch((error) => {
                    setError(error);
                    setIsLoaded(true);
                    // console.error(error);
                });
        }, 5000)
    }, [])//square brackets means run it once
    if (error) {
        return <h1>Oops, something went wrong {error.message}</h1>
    } else if (!isLoaded) {
        return (
            <>
                <p>Loading data...</p>
            </>
        )

    } else {
        return (
            //<> -> a fragment, can use <div> instead
            <>
                <h1 class="upcomingTitle ms-5" >Upcoming Movies</h1>
                            {
                                //to display the data on the page, we need to map over it
                                data.map((mov) => (
                                        <UpcomingMovies movie={mov} />
                                ))}

            </>
        );

    };
}
export default CardListUpcomingMovies;