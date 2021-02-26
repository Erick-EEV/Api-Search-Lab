export const ADD_SEARCH_TERM = "ADD_SEARCH_TERM";

export const addSearchTerm = (search) => {
  return { type: ADD_SEARCH_TERM, searchKeyword: search };
};
