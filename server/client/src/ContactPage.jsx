import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './css/contactPage.css';
//Careful with names.

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
            <div className="container">
                <h1 classNameName="text-start mt-5 mb-5">Contact Us</h1>
                <p className="text-light">Our customer services are open daily from 9am to 8pm.
                    <br></br>Call us at:<br></br>
                    <a href="tel:0845 757 388">0845 757 388</a>
                </p>
                <p className="text-light">Alternatively, you can send us an email below to our site owner.</p>
                <form className="was-validated">
                    <fieldset>
                        <label className="text-light" for="customerName">Enter your name:</label>
                        <br></br>
                        <input type="text" id="customerName" placeholder="Enter name here" value={name} onChange={e => setName(e.target.value)}></input>
                        <br></br>
                        <br></br>
                        <label className="text-light" for="customerEmail">Enter your email:</label>
                        <br></br>
                        <input class="form-control w-25" type="email" id="customerEmail" placeholder="name@example.com" value={sendingEmail} onChange={e => setSendingEmail(e.target.value)} required></input>
                        <br></br>
                        <br></br>
                        <label className="text-light">Subject</label>
                        <br></br>
                        <input type="text" className="form-control w-50" id="subjectEmail" placeholder="Enter subject here" value={subject} onChange={e => setSubject(e.target.value)} required></input>
                        <br></br>
                        <br></br>
                        <label className="text-light" for="emailMessage">Message</label>
                        <br></br>
                        <textarea className="form-control is-invalid w-50" id="emailMessage" placeholder="Enter message here" rows="10" cols="50" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
                        <br></br>
                        <button className="btn btn-sm" type="submit" value="Send" id="sendBtn" onClick={submit}>Send</button>
                        <button className="btn btn-sm" type="reset" value="Reset" id="clearBtn">Clear</button>
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
