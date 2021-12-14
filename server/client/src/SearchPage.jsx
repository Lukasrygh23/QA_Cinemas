import React, { useEffect, useState } from "react";

const SearchPage = (props) => {
    const dataArray = props.data
    let filteredDataArray = dataArray.filter((d) => { return d.keywords.includes(props.searchTerm.toLowerCase()) })

        return (
            <React.Fragment>
                <h3 className="text-warning mt-4 mb-5">Your Search Results</h3>
                {/* <p className="text-light">{filteredDataArray.length}</p> */}
                {filteredDataArray.map((val) => (
                    <div className="border-bottom border-info-3 mt-3 ms-5 me-5" key={val.title}>
                        <a className="text-primary" href={val.link}>{val.title}</a>
                        <p className="text-light">{val.description}</p>
                    </div>
                ))
                }
            </React.Fragment>
        );
}

export default SearchPage;