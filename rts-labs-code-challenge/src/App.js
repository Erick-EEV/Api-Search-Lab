import React from 'react';
import './App.css';
import SearchBar from "./features/SearchBar";
import { createStoreHook } from 'react-redux'

function App() {

  const search = (state, action) => {
    if( action.text === state ) {
        return state
    }
 }

 const store = createStoreHook(search)

  return (
    <div className="App">
    <SearchBar store={store}/>
    </div>
  );
}

export default App;
