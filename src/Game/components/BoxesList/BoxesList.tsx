import React from "react";

import Box from "./Box";

import "./BoxesList.scss";

const BoxesList = () => {
  return (
    <div className="d-flex boxList">
      <Box data={{ id: 1, points: 50, letter: "A" }} />
      <Box data={{ id: 1, points: 30, letter: "B" }} />
      <Box data={{ id: 1, points: 20, letter: "C" }} />
      <Box data={{ id: 1, points: 15, letter: "D" }} />
      <Box data={{ id: 1, points: 10, letter: "E" }} />
    </div>
  );
};

export default BoxesList;
