import React, { useEffect, useState } from "react";
import DiscussionForm from "./DiscussionForm";

const DiscussionFormPage = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const commentHandler = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      username: username,
      comment: comment,
    };
    fetch('"/addComment/:thread', {
      method: "PUT",
      header: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(obj),
    }).then((response) => {
      if (response.status !== 201) {
        console.error(`status: ${response.status}`);
      } else {
        console.log(response);
      }
    });
  };

  return <DiscussionForm username={username} comment={comment} />;
};

export default DiscussionFormPage;
