import React, { useContext } from "react";
import Button from "react-bootstrap/Button";

import SingleResult from "./SingleResult";
import ResultHeading from "./ResultHeading";

import { getTotal, getBonusTotal } from "../../utilityFunctions";

import GameContext from "../../gameContext";

import "./Result.scss";

const Result = () => {
  const { selectedBoxes, ResetGame } = useContext(GameContext);

  return (
    <div className="mt-4">
      <h2 className="text-center mb-4">Selected Items</h2>
      <ResultHeading />
      <div className="results">
        {selectedBoxes.map((boxResult) => (
          <SingleResult result={boxResult} />
        ))}
      </div>

      <div>Bonuses {getBonusTotal(selectedBoxes)}</div>
      <div className="d-flex justify-content-between mt-4">
        <div>
          <div>Total </div>
          <div>{getTotal(selectedBoxes)}</div>
        </div>
        <div>
          <Button variant="success" onClick={ResetGame}>
            New Game
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Result;
