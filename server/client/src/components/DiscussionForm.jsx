import "../css/discussionCard.css";
const DiscussionForm = (props) => {
  const { Thread } = props;

  return (
    <div className="container">
      <div className="row mt-5 mb-3">
        <div className="col-sm-8">
          <h5 className="text-light">Have your say!</h5>
          <form
            onSubmit={props.handleSubmit}
            noValidate
            className="validated-form"
            encType="multipart/form-data"
          >
            <div>
              <label className="form-label text-light" for="username">
                {" "}
                Enter Name:&#160;{" "}
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
              <label className="form-label text-light" for="comment">
                {" "}
                Enter Comment:&#160;{" "}
              </label>
              <input
                className="form-control"
                type="text"
                id="comment"
                placeholder="Comment"
                onChange={props.commentHandler}
                required
              />
            </div>
            <div>
              <p></p>
              <button className="button-62"> Submit Comment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscussionForm;
