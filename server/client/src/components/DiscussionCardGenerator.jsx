import { useState, useEffect } from "react-dom";
import "../css/Card.css";
const DicussionCardGenerator = (props) => {
  const { Thread } = props;
  console.log(Thread);
  return (
    <div>
      <div>
        <div className="container">
          <div className="row  mt-5 mb-3">
            <div className="col-sm-8">
              <h2 className="text-light mt-3 mb-3">{Thread.subject}</h2>
              <p className="text-light">
                <b>Username:</b> {Thread.userName}{" "}
              </p>
              <p className="text-light">
                <b>Rating: </b>
                {Thread.rating}{" "}
              </p>
              <p className="text-light">{Thread.reviewBody} </p>
              <div>
                {Thread.comments.map((comment) => (
                  <div className="container">
                    <div class="col-sm-4">
                      <h6 className="text-light">
                        <b>Username:</b> {comment.username}
                      </h6>
                      <p className="text-light">
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
