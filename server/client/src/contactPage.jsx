const contactPage = () => {



    return (
        <>
            <h1>Contact Us</h1>
            <p className="text-light">Our customer services are open daily from 9am to 8pm.</p>
            <p className="text-light">Alternatively, you can send us an email below to our site owner.</p>
            <form id="email" action="mailto:Lrygh@qa.com" method="post" enctype="application/x-www-form-urlencoded">
                <fieldset>
                    <label className="text-light" for="customerEmail">Enter your email:</label>
                    <br></br>
                    <input type="email" id="customerEmail" placeholder="name@example.com" required></input>
                    <br></br>
                    <br></br>
                    <label className="text-light">Subject</label>
                    <br></br>
                    <input type="text" id="subjectEmail" required></input>
                    <div class="invalid-feedback">
                        Please provide a valid subject.
                    </div>
                    <br></br>
                    <br></br>
                    <label className="text-light" for="emailMessage">Message</label>
                    <br></br>
                    <textarea id="emailMessage" placeholder="Enter message here" rows="10" cols="50"></textarea>
                    <br></br>
                    <button type="submit" value="Send" id="sendBtn"
                        onClick={function check() {
                            let subjectInput = document.querySelector('#subjectEmail');
                            let messageInput = document.querySelector('#emailMessage');
                            let subject = subjectInput.value;
                            let message = messageInput.value;
                            document.querySelector('#email').action = `mailto:Lrygh@qa.com?subject=${subject}&body=${message}`;
                        }}>Send</button>
                    <button type="reset" value="Reset">Clear</button>
                </fieldset>
            </form>
            <script type="text/javascript">

            </script>
        </>
    );
}

export default contactPage;