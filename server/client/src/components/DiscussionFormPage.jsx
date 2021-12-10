import React, { useEffect, useState } from "react";
import DiscussionForm from "./DiscussionForm";

const DiscussionFormPage = (props) => {
  const { uName, com } = props;
  const [username, setUsername] = useState(uName);
  const [comment, setComment] = useState(com);

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const commentHandler = (e) => {
    setComment(e.target.value);
  };

  const url =
    "http://localhost:5000/threadRoutes/addComment/" + props.Thread.id;

  console.log(username);
  console.log(comment);

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      username: username,
      comment: comment,
    };
    console.log(obj);
    console.log(JSON.stringify(obj));
    console.log(url);
    fetch(url, {
      method: "PUT",
      header: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(obj),
    }).then((response) => {
      if (response.status !== 201) {
        console.error(`status: ${response.status}`);
      } else {
        console.log(usernameHandler);
        console.log(commentHandler);
      }
    });
  };

  return (
    <DiscussionForm
      username={usernameHandler}
      comment={commentHandler}
      handleSubmit={handleSubmit}
    />
  );
};

export default DiscussionFormPage;
