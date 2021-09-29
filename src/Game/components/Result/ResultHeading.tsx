import React from "react";

import "./ResultHeading.scss";

const ResultHeading = () => {
  return (
    <header className="d-flex justify-content-between resultHeading">
      <span>Item</span>
      <span>QTY</span>
      <span>Score</span>
    </header>
  );
};

export default ResultHeading;
