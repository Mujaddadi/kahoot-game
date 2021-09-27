import React from "react";

import "./ResultHeading.scss";

const ResultHeading = () => {
  return (
    <div className="d-flex justify-content-between resultHeading">
      <span>Item</span>
      <span>QTY</span>
      <span>Score</span>
    </div>
  );
};

export default ResultHeading;
