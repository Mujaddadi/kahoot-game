import React from "react";

import Box from "./Box";

import "./BoxesList.scss";

const BoxesList = () => {
  return (
    <div className="d-flex boxList">
      <Box data={{ id: 1, points: 50, letter: "A", quantity: 1 }} />
      <Box data={{ id: 2, points: 30, letter: "B", quantity: 1 }} />
      <Box data={{ id: 3, points: 20, letter: "C", quantity: 1 }} />
      <Box data={{ id: 4, points: 15, letter: "D", quantity: 1 }} />
      <Box data={{ id: 5, points: 10, letter: "E", quantity: 1 }} />
    </div>
  );
};

export default BoxesList;
