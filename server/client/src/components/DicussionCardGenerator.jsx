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
              {/* <h2 class="text-light mb-5 mt-2">Synopsis</h2> */}
              <h2 className="text-light mt-3 mb-3">{Thread.userName}</h2>
              <p className="text-light">{Thread.subject} </p>
              <p className="text-light">{Thread.rating} </p>
              <p className="text-light">{Thread.reviewBody} </p>
              <div>
                {Thread.comments.map(comment => <div><h6 className="text-light">{comment.username}</h6><p className="text-light">{comment.text}</p></div>)}
              </div>
              <br />
            </div>
            <hr className="hrTag" />
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default DicussionCardGenerator;
