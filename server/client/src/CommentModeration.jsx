import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import ModCard from "./components/ModerationCardGenerator";
import CommentWithDelete from "./components/CommentWithDelete";

const CommentModeration = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const deleteThread = (event, threadId) => {
        event.preventDefault();

        console.log(threadId);

        const url = "http://localhost:5000/threadRoutes/deleteThread/" + threadId;
        console.log(url);


        axios.delete(url).then((response) => {
            setIsLoaded(true)
            console.log(response);
            window.location.reload(false);
        }).catch((error) => {
            setError(error);
            setIsLoaded(true);
            console.error(error);
        });
    };

    const deleteComment = (event, commentId) => {
        event.preventDefault();
        console.log(commentId);

        const url = "http://localhost:5000/threadRoutes/deleteComment/" + commentId;
        console.log(url);

        axios.delete(url).then((response) => {
            setIsLoaded(true)
            console.log(response);
            window.location.reload(false);
        }).catch((error) => {
            setError(error);
            setIsLoaded(true);
            console.error(error);
        })
    }


    useEffect(() => {
        setTimeout(() => {
            //get request to get the URL from
            axios
                .get("http://localhost:5000/threadRoutes/getAll")
                //.then -> once the data is received, do something
                .then((response) => {
                    setIsLoaded(true);
                    console.log(response);
                    //use the setData to update the empty array
                    setData(response.data);
                    //the do something is to log the response to the console
                    // console.log(response.data.data);
                    //in case things don't go according to plan, need too catch the error and deal with it
                })
                .catch((error) => {
                    setError(error);
                    setIsLoaded(true);
                    // console.error(error);
                });
        }, 5000);
    }, []);

    //this checks the loaded state and displays an error if that data cannot be accessed
    if (error) {
        return <h1>Oops, something went wrong {error.message}</h1>;
    } else if (!isLoaded) {
        return (
            <>
                <p className="text-light">Loading data...</p>
            </>
        );
    } else {
        console.log(data);
        return (
            //<> -> a fragment, can use <div> instead
            <>
                <h1 class="upcomingTitle ms-5">Ratings and Discussions</h1>
                {
                    //to display the data on the page, we need to map over it
                    data.map((Thread) => (
                        <React.Fragment>
                            <ModCard Thread={Thread} deleteThread = {e => deleteThread(e, Thread._id)} />
                            {Thread.comments.map((Comment) => 
                                <CommentWithDelete Comment={Comment} deleteComment={e => deleteComment(e, Comment._id)}/>
                            )}
                        </React.Fragment>
                    ))
                }
            </>
        );
    }
};


export default CommentModeration;