import React from "react";

import SingleResult from "./SingleResult";
const Result = () => {
  return (
    <div>
      <h2>Player Items</h2>
      <div className="d-flex justify-content-between">
        <span>Item</span>
        <span>QTY</span>
        <span>Score</span>
      </div>
      <SingleResult />
    </div>
  );
};

export default Result;
