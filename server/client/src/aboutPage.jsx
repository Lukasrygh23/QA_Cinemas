import { Link } from 'react-router-dom';
import './css/aboutPage.css';

const aboutPage = () => {
    return (
        <>
            <div className="container">
                <h1 className="mt-5 mb-5">About Us</h1>
                <p className="text-light">QA Cinemas is a client of our company, QA Limited. Similar to our parent company,
                    we pride ourselves in giving our customers the best experience for big screen entertainment. We offer
                    a wide range of content, from the highly anticipated blockbusters to the very niche films that make no sense, but
                    are magically somehow award worthy. Our branches around the country have standard and deluxe screens, all
                    of which project films at 4K High Definition. We also offer more than just popcorn and soft drinks.
                    Our Manchester branch is situated in an area with many restaurants and cafes, which are perfect for our customers
                    to go to after the cinema!.</p>
                <div className="accordion w-50 mx-auto" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Team Members
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h4>Many thanks to the makers of this website:</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Daniel Li
                                        <p>Scrum Master</p>
                                    </li>
                                    <li className="list-group-item">Gabriel Jose
                                        <p>Development Team (Front - end)</p>
                                    </li>
                                    <li className="list-group-item">Lukas Rygh
                                        <p>Product Owner</p>
                                    </li>
                                    <li className="list-group-item">Samuel Sheldon
                                        <p>Development Team (Back - end)</p>
                                    </li>
                                    <li className="list-group-item">Solomon Boundy
                                        <p>Development Team (Front - end)</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Socials
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h4>Follow us!</h4>
                                <ul>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                    <a href="https://twitter.com/QA_Ltd?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" rel="noreferrer" target="_blank" className="text-primary" id="link">Twitter</a>
                                    <br></br>
                                    <a href="https://www.qa.com/" rel="noreferrer" target="_blank" className="text-primary"><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQH4QubXWTOP1Q/company-logo_200_200/0/1609755087564?e=2159024400&v=beta&t=2nvYcVJplopIypFkazkYjD9ZAEEIQjlKllQATlOz8bs" alt="qa logo" width="20" height="20"></img>Website</a>
                                    <br></br>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                    <a href="https://www.instagram.com/qalimited/?hl=en" rel="noreferrer" target="_blank" className="text-primary">Instagram</a>
                                    <br></br>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                    <a href="https://www.facebook.com/QALtd/" rel="noreferrer" target="_blank" className="text-primary">Facebook</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Contact Us
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h4>Got a query or wish to contact us?</h4>
                                <p>Click <Link to="/Contact" className='text-primary'>here</Link> to go to the contact page.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="mt-5 mb-5">Scrum Description</h1>
                <h3 className="text-warning">What is Scrum?</h3>
                <p className="text-light">Scrum is a framework that helps teams create and deliver products while solving any complex problems they come across.
                    All the work is done in time - limited events (ranging between one week to one month). There will be as many sprints as required until the
                    requirements meet the MVP (Minimum Viable Product - where the product's features are met well enough for its customers).  Before starting each
                    sprint, the team adds tasks and user stories to the 'product backlog'. From there, some of the tasks and user stories are added to the 'sprint
                    backlog', all of which should be completed by the end of the sprint. All the tasks are prioritised using the MoSCoW methodology (Must have, Should
                    have, Could have and Won't have). Click <a href="https://www.scrum.org/resources/what-is-scrum" rel="noreferrer" className="text-primary" target="_blank">here</a> to learn more about Scrum.
                </p>
                <h3 className="text-warning">How we used Scrum</h3>
                <p className="text-light">(Refer to the tabs above for everyone's roles). We planned for two sprints, with each one lasting 5 days (Monday to Friday).
                    The expected result by the end of our first sprint was to fulfil all the requirements for MVP (i.e. functionality, features etc) and the second sprint
                    is expected to be for testing and refining the website further (e.g. fixing the formatting, considering adding on non - MVP features etc). Once the product
                    and sprint backlog was completed, we split the team into front - end and back - end development, depending on each team member's strength.
                    <br></br>
                    <br></br>
                    From there, the tasks were split into who was comfortable in doing what (i.e. the more complex tasks were assigned to those most comfortable). Splitting the workload
                    as such meant that each member can work efficiently so as to create the MVP by the end of the first sprint. Additionally, we can easily contact each other
                    for any help in debugging or opinions in how the page or component should be formatted. </p>
            </div>
        </>
    );
}

export default aboutPage;