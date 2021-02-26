import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSearchTerm, addSearchResults } from "../redux/actionTypes";

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    event.preventDefault();
    setSearchKeyword(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    dispatch(addSearchTerm(searchKeyword));
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchKeyword}`)
      .then((resp) => resp.json())
      .then((result) => dispatch(addSearchResults(result.hits)));
  };

  return (
    <div className="search-bar">
      <div className="search-form">
        <form onSubmit={(event) => search(event)}>
          <input onChange={(event) => handleOnChange(event)}></input>
          <div className="submit-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
