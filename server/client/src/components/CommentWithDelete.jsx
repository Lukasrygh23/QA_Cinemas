import "../css/Card.css";

const CommentWithDelete = (props) => {
    const { Comment } = props;
    console.log(Comment);
    return (
    <div>
            <div className="container">
                <div className="col-sm-4">
                    <h6 className="text-light">
                        <b>Username:</b> {Comment.username}
                    </h6>
                    <p className="text-light">
                        {" "}
                        <b>Comment: </b>
                        {Comment.text}
                    </p>
                    <button type="button" className="button-30" onClick={props.deleteComment}> Delete someone else's comment</button>
                </div>
            </div>
            <br></br>
    </div >
    )
}

export default CommentWithDelete;