import { useState, useEffect } from "react-dom";
import "../css/Card.css";
const CommentWithDelete = (props) => {
    const { Comment } = props;
    console.log(Comment);
    return (
    <div>
        
            <div className="container">
                <div class="col-sm-4">
                    <h6 className="text-light">
                        <b>Username:</b> {Comment.username}
                    </h6>
                    <p className="text-light">
                        {" "}
                        <b>Comment: </b>
                        {Comment.text}
                    </p>
                </div>
            </div>
    </div >
    )

}
export default CommentWithDelete;