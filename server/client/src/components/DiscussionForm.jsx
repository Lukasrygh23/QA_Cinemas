const DiscussionForm = (props) => {
  return (
    <div class="row">
      <h5>Have you say!</h5>
      <form
        onSubmit={props.handleSubmit}
        noValidate
        className="validated-form"
        encType="multipart/form-data"
      >
        <div>
          <label className="form-label text-light" for="username">
            Enter Name:
          </label>
          <input
            className="form-control"
            type="text"
            id="username"
            onChange={props.usernameHandler}
            readOnly
          />
        </div>
        <div>
          <label className="form-label text-light" for="comment">
            {" "}
            Enter Comment:{" "}
          </label>
          <input
            className="formControl"
            type="text"
            id="comment"
            onChange={props.commentHandler}
            required
          />
        </div>
        <button class="button-62"> Submit Comment</button>
      </form>
    </div>
  );
};

export default DiscussionForm;
