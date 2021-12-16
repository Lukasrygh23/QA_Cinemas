import React from "react";
import './css/searchPage.css'

const SearchPage = (props) => {
    const dataArray = props.data
    let filteredDataArray = dataArray.filter((d) => { return d.keywords.includes(props.searchTerm.toLowerCase()) })

        return (
            <React.Fragment>
                <a id="home-tag" className="ms-3" href="http://localhost:3000/">Home</a>
                <h3 className="text-warning mt-2 mb-3 ms-3">Search</h3>
                <form className="d-flex" onSubmit={props.handleSubmit}>
                    <input className="ms-3 search-bar" type="search" value={props.userInput} onChange={props.handleUserInput} aria-label="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
                <p className="text-light fw-bold border-bottom border-info-3 mt-3 ms-5">{filteredDataArray.length} results</p>
                {filteredDataArray.map((val) => (
                    <div className="border-bottom border-info-3 mt-3 ms-5 me-5" key={val.title}>
                        <a className="link-tags" href={val.link}>{val.title}</a>
                        <p className="text-light">{val.description}</p>
                    </div>
                ))
                }
            </React.Fragment>
        );
}

export default SearchPage;