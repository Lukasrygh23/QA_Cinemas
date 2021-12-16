import './css/openingTimes.css';

const openingTimes = () => {
    return (
        <>
            <div className="container w-50 mx-auto">
                <h1>Opening Times</h1>
                <table className="table table-dark table-striped table-hover">
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
                <h1>Holiday Hours</h1>
                <p className='text-light'>Peak hours during the holidays can get very busy, so we recommend booking on our website as soon as possible!</p>
                <table className="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <td>Holidays</td>
                            <td>Hours</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fri 24th Dec, Christmas Eve</td>
                            <td>9am to 6pm</td>
                        </tr>
                        <tr>
                            <td>Sat 25th Dec, Christmas Day</td>
                            <td>Closed</td>
                        </tr>
                        <tr>
                            <td>Sun 26th Dec, Boxing Day</td>
                            <td>12pm to 6pm</td>
                        </tr>
                        <tr>
                            <td>Fri 31st Dec, New Year's Eve</td>
                            <td>10am to 6pm</td>
                        </tr>
                        <tr>
                            <td>Sat 1st Jan, New Year's Day</td>
                            <td>Closed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default openingTimes;