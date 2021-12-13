import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {

    const [sendingEmail, setSendingEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && sendingEmail && subject && message) {
            const serviceId = 'service_jd485z6';
            const templateId = 'template_cnl6lzj';
            const userId = 'user_Cq8Cm0VR572NlIQourQ2Q';
            const templateParams = {
                name,
                sendingEmail,
                subject,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setSendingEmail('');
            setSubject('');
            setMessage('');
            setEmailSent(true);
            console.log(`The message ${message} has been sent!`);
        } else {
            alert('Fill in all required fields.');
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    return (
        <>
            <div class="container">
                <h1>Contact Us</h1>
                <p className="text-light">Our customer services are open daily from 9am to 8pm.</p>
                <p className="text-light">Alternatively, you can send us an email below to our site owner.</p>
                <form>
                    <fieldset>
                        <label className="text-light" for="customerName">Enter your name:</label>
                        <br></br>
                        <input type="text" id="customerName" placeholder="Enter name here" value={name} onChange={e => setName(e.target.value)}></input>
                        <br></br>
                        <br></br>
                        <label className="text-light" for="customerEmail">Enter your email:</label>
                        <br></br>
                        <input type="email" id="customerEmail" placeholder="name@example.com" value={sendingEmail} onChange={e => setSendingEmail(e.target.value)} required></input>
                        <br></br>
                        <br></br>
                        <label className="text-light">Subject</label>
                        <br></br>
                        <input type="text" id="subjectEmail" value={subject} onChange={e => setSubject(e.target.value)} required></input>
                        <div class="invalid-feedback">
                            Please provide a valid subject.
                        </div>
                        <br></br>
                        <br></br>
                        <label className="text-light" for="emailMessage">Message</label>
                        <br></br>
                        <textarea id="emailMessage" placeholder="Enter message here" rows="10" cols="50" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        <br></br>
                        <button type="submit" value="Send" id="sendBtn" onClick={submit}>Send</button>
                        <button type="reset" value="Reset">Clear</button>
                    </fieldset>
                </form>
                <div className="text-light">
                    <p>You can also find us at this address:</p>
                    <p>8th Floor St James' Bldg<br></br>
                        61 - 65 Oxford St<br></br>
                        Manchester, United Kingdom<br></br>
                        M1 6FQ</p>
                </div>
            </div>
        </>
    );
}

export default ContactPage;