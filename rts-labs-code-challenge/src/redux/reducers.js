import * as actionTypes from "./actionTypes";

const initialState = {
  searchTerms: [],
  currentSearchTerm: "",
};

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_SEARCH_TERM: {
            console.log(state, action)
            const { searchKeyword } = action
            return {
                ...state,
                searchTerms: [...state.searchTerms, searchKeyword]
            }
        }
    }
    return state
};

export default searchReducer;
