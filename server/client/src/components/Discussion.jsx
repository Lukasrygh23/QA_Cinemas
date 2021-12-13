import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import DCard from "./DiscussionCardGenerator";
//import DiscussionFormPage from "./DiscussionFormPage";
import DiscussionForm from "./DiscussionForm";
import DiscussionNewThreadForm from "./DiscussionNewThreadForm";
const Discussion = () => {
  //initial version of this was taken from a comment section example on : https://mdbootstrap.com/docs/standard/extended/comments/#section-2
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  //These are for comments.
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  //These ones are for threads.
  const [threadUsername, setThreadUsername] = useState("");
  const [subject, setSubject] = useState("");
  const [rating, setRating] = useState();
  const [reviewBody, setReviewBody] = useState();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const commentHandler = (e) => {
    setComment(e.target.value);
  };

  const threadUsernameHandler = (e) => {
    setThreadUsername(e.target.value);
  }

  const subjectHandler = (e) => {
    setSubject(e.target.value);
  }

  const ratingHandler = (e) => {
    setRating(e.target.value);
  }

  const threadHandler = (e) => {
    setReviewBody(e.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    
    let obj = {
      username: username,
      text: comment,
    };
    const threadId = 1;
    const url = "http://localhost:5000/threadRoutes/addComment/" + threadId;
    console.log(obj);
    console.log(url);

    axios.post(url, obj).then((response) => {
      setIsLoaded(true);
      console.log(response);

    }).catch((error) => {
      setError(error);
      setIsLoaded(true);
      console.error(error);
    })

    window.location.reload(false);

  };

  const newThread = (event) => {
    event.preventDefault();

    let obj = {
      userName: threadUsername,
      subject: subject,
      rating: rating,
      reviewBody: reviewBody,
    }

    const url = "http://localhost:5000/threadRoutes/create";
    console.log(obj)

    axios
      .post(url, obj)
      .then((response) => {
        console.log(response)
      }).catch((error) => {
        setError(error);
        console.error(error);
      })
    
    window.location.reload(false);
  };


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
              <DCard Thread={Thread} />
              <DiscussionForm Thread={Thread} usernameHandler={usernameHandler} commentHandler={commentHandler} handleSubmit={handleSubmit} />
            </React.Fragment>
          ))
        }
        <DiscussionNewThreadForm usernameHandler={threadUsernameHandler} subjectHandler={subjectHandler} ratingHandler={ratingHandler} commentHandler={threadHandler} newThread={newThread}/>
      </>
    );
  }
};

export default Discussion;
