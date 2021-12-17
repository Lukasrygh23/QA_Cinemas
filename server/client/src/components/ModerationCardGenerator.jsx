import "../css/Card.css";

const ModerationCardGenerator = (props) => {
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
                        </div>
                        <button type="button" class="button-30" onClick={props.deleteThread}>Delete this entire thread!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModerationCardGenerator;
