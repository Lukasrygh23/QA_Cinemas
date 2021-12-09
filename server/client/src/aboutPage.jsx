import { Link } from 'react-router-dom';

const aboutPage = () => {
    return (
        <>
            <h1>About Us</h1>
            <p className="text-light">QA Cinemas is a client of our company, QA Limited. Similar to our parent company,
                we pride ourselves in giving our customers the best experience for big screen entertainment. We offer
                a wide range of content, from the highly anticipated blockbusters to the very niche films that make no sense, but
                are magically somehow award worthy. Our branches around the country have standard and deluxe screens, all
                of which project films at 4K High Definition.</p>
            <div class="accordion w-50 mx-auto" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Team Members
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Daniel Li</li>
                                <li class="list-group-item">Gabriel Jose<p>Here's some text</p></li>
                                <li class="list-group-item">Lukas Rygh</li>
                                <li class="list-group-item">Samuel Sheldon</li>
                                <li class="list-group-item">Solomon Boundy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Socials
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h4>Click below to look at our socials</h4>
                            <ul>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                                <a href="https://twitter.com/QA_Ltd?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">Twitter</a>
                                <br></br>
                                <a href="https://www.qa.com/" target="_blank"><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQH4QubXWTOP1Q/company-logo_200_200/0/1609755087564?e=2159024400&v=beta&t=2nvYcVJplopIypFkazkYjD9ZAEEIQjlKllQATlOz8bs" alt="qa logo" width="20" height="20"></img>QA Website</a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Contact Us
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h4>Got a query or wish to contact us?</h4>
                            <p>Click <Link to="/Contact">here</Link> to go to the contact page.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default aboutPage;