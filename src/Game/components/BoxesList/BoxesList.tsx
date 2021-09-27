import React from "react";

import Box from "./Box";

import "./BoxesList.scss";

const BoxesList = () => {
  return (
    <div className="d-flex boxList">
      <Box letter="A" />
      <Box letter="B" />
      <Box letter="C" />
      <Box letter="D" />
      <Box letter="E" />
    </div>
  );
};

export default BoxesList;
