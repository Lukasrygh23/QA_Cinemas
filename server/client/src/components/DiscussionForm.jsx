const DiscussionForm = (props) => {
  const { Thread } = props;
  return (
    <div class="container">
      <div class="row  mt-5 mb-3">
        <div class="col-sm-8">
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
                Enter Name:{" "}
              </label>
              <input
                className=""
                type="text"
                id="username"
                onChange={props.usernameHandler}
                required
              />
            </div>
            <div>
              <label className="form-label text-light" for="comment">
                {" "}
                Enter Comment:{" "}
              </label>
              <input
                className="form-control"
                type="text"
                id="comment"
                onChange={props.commentHandler}
                required
              />
            </div>

            <button class="button-62"> Submit Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscussionForm;
