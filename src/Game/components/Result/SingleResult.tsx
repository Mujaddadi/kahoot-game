import React from "react";

import "./SingleResult.scss";

import { BoxData } from "../../types";

type Props = {
  result: BoxData;
};
const SingleResult = ({ result }: Props) => {
  return (
    <div className="d-flex justify-content-between singleResultWrapper">
      <span className="smallBox">{result.letter}</span>
      <span>2</span>
      <span>{result.points}</span>
    </div>
  );
};

export default SingleResult;
