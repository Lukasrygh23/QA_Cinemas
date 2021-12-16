const screenListingsPage = () => {
    return (
        <>
            <h1>Our Screens</h1>
            <div className="container">
                <p className="text-light">Here is a list of the two varieties of screens we offer at our branches.
                    All of them help give you maximum comfort when watching films. Here is a preview of what our screens
                    look like!
                </p>
            </div>
            <div className="container card w-50 mx-auto text-center">
                <div className="card-body">
                    <img src="https://static.homemcr.org/app/uploads/2015/04/Cinema-1-Seating-Plan.jpg" alt="standard screen seating plan"></img>
                    <h5 className="card-title">Standard Screen</h5>
                    <p className="card-text">For those who are paranoid of spending £3.00 on a bag of sweets. Sometimes, simple is best!</p>
                </div>
            </div>
            <img src="https://swindoninteriors.co.uk/wp-content/uploads/2020/01/D58AA64D-3507-4BA8-BCC9-ECA668B7CDC2_1_105_c.jpeg" alt="standard screen decor" style={{ width: '1000px', height: '600px', display: 'block', margin: 'auto', }}></img>
            <br></br>
            <div className="card w-50 mx-auto text-center">
                <div className="card-body">
                    <div className="bg-image hover-zoom">
                        <img src="https://s1.ticketm.net/uk/tmimages/venue/maps/uk1/20480s.gif" alt="deluxe screen seating plan" ></img>
                    </div>
                    <h5 className="card-title">Deluxe Screen</h5>
                    <p className="card-text">The more expensive option that is worth the extra cash! With reclining seats and huge speakers too! This screen is
                        definitely for those who want an incredible experience and to burn a whole in their wallet!</p>
                </div>
            </div>
            <img src="https://www.odeon.co.uk/media/jyuk545u/luxe-gallery-image-2.jpg" alt="deluxe screen decor" style={{ width: '1000px', height: '600px', display: 'block', margin: 'auto', }}></img>
        </>
    );
}

export default screenListingsPage;