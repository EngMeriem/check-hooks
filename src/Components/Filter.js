import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import './Filter.css'

const SearchBox = ({ handleFilter, handleRating }) => {
    const handelRating = (rate) => {
        handleRating(rate);
    };

    const [searchValue, setSearchValue] = useState("");
    const searchMovie = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
        handleFilter(searchValue);
    };

    return (
        <div className="header">
            <h1 className="app-title">Movie App </h1>       
            <div className="content">
                <form className="form">
                    <div>
                        <input
                            type="text"
                            className="control"
                            onChange={searchMovie}
                            value={searchValue}
                            placeholder="search Movie ..."
                            required
                        />
                    </div>
                </form>{" "}
                <Rating onClick={handelRating} />
            </div>

        </div>
    );
};
export default SearchBox;
