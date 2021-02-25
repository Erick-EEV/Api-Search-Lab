import React from 'react';

const SearchBar = (props) => {

    const handleOnChange = (event) => {
        event.preventDefault()
        props.store(event.target.value)
        // On Change update and save input to redux state
    }

    const search = (event) => {
        //retrieve redux state and use this to make a fetch request to the api to retrieve result
        //Then update and save a seperate redux state with the result that was found
        event.preventDefault()

        console.log(event.target.value)
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
