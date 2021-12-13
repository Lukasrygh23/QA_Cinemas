const DiscussionNewThreadForm = (props) => {
    return (
        <div class="row">
            <h5 className="text-light">Post a new thread!</h5>
            <form
                onSubmit={props.newThread}
                className="validated-form"
                encType="multipart/form-data"
            >
                <div>
                    <label className="form-label text-light" for="username">
                        {" "}
                        Enter Username:{" "}
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
                    <label className="form-label text-light" for="subject">
                        {" "}
                        Enter Subject: {" "}
                    </label>
                    <input
                        className=""
                        type="text"
                        id="comment"
                        onChange={props.subjectHandler}
                        required
                    />
                </div>
                <div>
                    <label className="form-label text-light" for="rating">
                        {" "}
                        Enter Rating (1-10):{" "}
                    </label>
                    <input
                        className=""
                        type="number"
                        min="0"
                        max="10"
                        id="rating"
                        onChange={props.ratingHandler}
                    />
                </div>
                <div>
                    <label className="form-label text-light" for="comment">
                        {" "}
                        Enter Text: {" "}
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="comment"
                        onChange={props.commentHandler}
                        required
                    />
                </div>
                <button class="button-62">Post Thread</button>
            </form>
        </div>
    )
}

export default DiscussionNewThreadForm;