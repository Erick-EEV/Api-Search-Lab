import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addSearchTerm } from '../redux/actionTypes';

const SearchBar = (props) => {

    const [searchKeyword, setSearchKeyword] = useState("")
    
    const dispatch = useDispatch()
    
    const handleOnChange = (event) => {
        event.preventDefault()
        setSearchKeyword(event.target.value)
    }
    
    const search = (event) => {
        event.preventDefault()
        dispatch(addSearchTerm(searchKeyword))
        console.log("hit")
    }

    return (
       <div className="search-bar">
           <div className="search-form">
               <form onSubmit={event => search(event)}>
                   <input onChange={event => handleOnChange(event)}>
                   </input>
                       <div className="submit-button">
                       <button type="submit">Submit</button>
                       </div>
               </form>
           </div>
       </div>

    );
}

export default SearchBar;
