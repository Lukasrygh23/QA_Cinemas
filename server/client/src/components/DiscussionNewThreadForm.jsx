import "../css/discussionCard.css";
const DiscussionNewThreadForm = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h5 className="text-light">Post a new thread!</h5>
        <form
          onSubmit={props.newThread}
          className="validated-form"
          encType="multipart/form-data"
        >
          <div>
            <label className="form-label text-light" for="username">
              {" "}
              Enter Username:&#160;{" "}
            </label>
            <input
              className=""
              type="text"
              id="username"
              placeholder="Username"
              onChange={props.usernameHandler}
              required
            />
          </div>
          <div>
            <label className="form-label text-light" for="subject">
              {" "}
              Enter Subject:&#160;{" "}
            </label>
            <input
              className=""
              type="text"
              id="comment"
              placeholder="Subject"
              onChange={props.subjectHandler}
              required
            />
          </div>
          <div>
            <label className="form-label text-light" for="rating">
              {" "}
              Enter Rating (1-10):&#160;{" "}
            </label>
            <input
              className=""
              type="number"
              min="0"
              max="10"
              id="rating"
              placeholder="Rating (1-10)"
              onChange={props.ratingHandler}
            />
          </div>
          <div>
            <label className="form-label text-light" for="comment">
              {" "}
              Enter Text:&#160;{" "}
            </label>
            <input
              className="form-control"
              type="text"
              id="comment"
              placeholder="Tell us what you thing!"
              onChange={props.commentHandler}
              required
            />
          </div>
          <div>
            <p></p>
            <button className="button-62">Post Thread</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DiscussionNewThreadForm;
