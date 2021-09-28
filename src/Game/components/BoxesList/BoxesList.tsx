import React from "react";

import Box from "./Box";

import "./BoxesList.scss";

import boxData from "../../data";

const BoxesList = () => {
  return (
    <div className="d-flex boxList">
      {boxData.map((data) => (
        <Box data={data} />
      ))}
    </div>
  );
};

export default BoxesList;
