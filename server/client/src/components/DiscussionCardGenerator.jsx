import React from "react";
import "../css/discussionCard.css";
const DicussionCardGenerator = (props) => {
  const { Thread } = props;
  console.log(Thread);
  return (
    <div>
      <div>
        <div className="container">
          <div className="row  mt-5 mb-3">
            <div className="col-sm-8">
              <h2 className="mt-3 mb-3" id="threadTitle">
                <b>{Thread.subject}</b>
              </h2>
              <h5 className="text-light">
                <b>Username:</b> {Thread.userName}{" "}
              </h5>
              <h5 className="text-light">
                <b>Rating (0-10): </b>
                {Thread.rating}{" "}
              </h5>
              <h5 className="text-light">
                <b>Review: </b>
              </h5>
              <h6 className="text-light">{Thread.reviewBody}</h6>
              <br />
              <h5 className="text-light">
                <i>Comments: </i>
              </h5>
              <div id="comment-section">
                {Thread.comments.map((comment) => (
                  <div className="container">
                    <div className="col-md-20">
                      <h6 id="commentUName">
                        <b>Username:</b> {comment.username}
                      </h6>
                      <p id="commentT">
                        {" "}
                        <b>Comment: </b>
                        {comment.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div></div>
            </div>
          </div>
          <hr className="hrTag" />
        </div>
      </div>
    </div>
  );
};

export default DicussionCardGenerator;
