const openingTimes = () => {
    return (
        <>
            <h1>Opening Times</h1>
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Hours</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>9am to 7pm</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>9am to 7pm</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>9am to 7pm</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>9am to 7pm</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>9am to 8pm</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>9am to 8pm</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>11am to 6pm</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <h2>Opening Times during the holidays</h2>
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <td>Holidays</td>
                        <td>Hours</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Christmas Eve</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Christmas Day</td>
                        <td>Closed</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default openingTimes;