import React from "react";
import { useSelector } from "react-redux";

const Results = () => {
  const resultsArray = useSelector((state) => state.searchResultsArray);
  return (
    <div>
      {resultsArray?.map((individualResult, index) => (
        <div key={index}>
          <ul>
            <li>{individualResult.title}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Results;
