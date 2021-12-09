const aboutPage = () => {
    return (
        <>
            <h1 className="text-light">About Us</h1>
            <p className="text-light">QA Cinemas is a client of our company, QA Limited. We pride ourselves
                in providing our clients with innovative technologies and solutions while meeting their specific
                requirements. Below are the team members who have created our website (and are the real heroes):</p>
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Daniel Li</div>
                        Scrum Master
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Gabriel Jose</div>
                        Development Team (Front - end)
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Lukas Rygh</div>
                        Product Owner
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Samuel Sheldon</div>
                        Development Team (Back - end)
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Solomon Boundy</div>
                        Development Team (Front - end)
                    </div>
                </li>

            </ul>
        </>
    );
}

export default aboutPage;