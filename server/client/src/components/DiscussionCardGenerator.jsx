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
              <p className="text-light">{Thread.userName} </p>
              <p className="text-light">{Thread.rating} </p>
              <p className="text-light">{Thread.reviewBody} </p>
              <div>
                {Thread.comments.map((comment) => (
                  <div>
                    <h6 className="text-light">{comment.username}</h6>
                    <p className="text-light">{comment.text}</p>
                  </div>
                ))}
              </div>
              <br />
              <div></div>
            </div>
          </div>
          <hr className="hrTag" />
        </div>
      </div>
      <br />
    </div>
  );
};

export default DicussionCardGenerator;
