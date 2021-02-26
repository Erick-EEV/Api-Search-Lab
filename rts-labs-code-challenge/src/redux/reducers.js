import * as actionTypes from "./actionTypes";

const initialState = {
  searchTerms: [],
  currentSearchTerm: "",
  searchResultsArray: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SEARCH_TERM: {
      console.log(state, action);
      const { searchKeyword } = action;
      return {
        ...state,
        searchTerms: [...state.searchTerms, searchKeyword],
        currentSearchTerm: searchKeyword,
      };
    }
    case actionTypes.ADD_SEARCH_RESULTS: {
      console.log(state, action);
      const { searchResults } = action;
      return {
        ...state,
        searchResultsArray: searchResults,
      };
    }
  }
  return state;
};

export default searchReducer;
