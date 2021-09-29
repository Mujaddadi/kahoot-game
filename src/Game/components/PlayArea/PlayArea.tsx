import React from "react";

import ErrorBoundary from "../../../common/ErrorBoundary";

import BoxesList from "../BoxesList";

import "./PlayArea.scss";

const PlayArea = () => {
  return (
    <ErrorBoundary>
      <section className="playArea">
        <BoxesList />
      </section>
    </ErrorBoundary>
  );
};

export default PlayArea;
