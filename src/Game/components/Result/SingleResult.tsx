import React from "react";

import "./SingleResult.scss";

import { BoxData } from "../../types";
import { getBoxTotal } from "../../utilityFunctions";

type Props = {
  result: BoxData;
};
const SingleResult = ({ result }: Props) => {
  return (
    <div className="d-flex justify-content-between singleResultWrapper">
      <span className="smallBox">{result.letter}</span>
      <span>{result.quantity}</span>
      <span>{getBoxTotal(result)}</span>
    </div>
  );
};

export default SingleResult;
