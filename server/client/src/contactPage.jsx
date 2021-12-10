const contactPage = () => {
    return (
        <>
            <h1>Contact Us</h1>
            <p className="text-light">Our customer services are open daily from 9am to 8pm.</p>
            <p className="text-light">Alternatively, you can send us an email below to our site owner.</p>
            <form action="mailto:lrygh@academytrainee.com" method="post" enctype="application/x-www-form-urlencoded">
                <fieldset>
                    <label className="text-light" for="customerEmail">Enter your email:</label>
                    <br></br>
                    <input type="email" id="customerEmail" placeholder="name@example.com"></input>
                    <br></br>
                    <br></br>
                    <label className="text-light">Subject</label>
                    <br></br>
                    <input type="text" id="subjectEmail"></input>
                    <br></br>
                    <br></br>
                    <label className="text-light" for="emailMessage">Message</label>
                    <br></br>
                    <textarea id="emailMessage" placeholder="Enter message here" rows="10" cols="50"></textarea>
                    <br></br>
                    <button type="submit" value="Send">Send</button>
                    <button type="reset" value="Reset">Clear</button>
                </fieldset>
            </form>
        </>
    );
}

export default contactPage;