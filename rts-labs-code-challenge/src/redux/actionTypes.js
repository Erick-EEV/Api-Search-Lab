export const ADD_SEARCH_TERM = "ADD_SEARCH_TERM";
export const ADD_SEARCH_RESULTS = "ADD_SEARCH_RESULTS";

export const addSearchTerm = (search) => {
  return { type: ADD_SEARCH_TERM, searchKeyword: search };
};

export const addSearchResults = (results) => {
  return { type: ADD_SEARCH_RESULTS, searchResults: results };
};
