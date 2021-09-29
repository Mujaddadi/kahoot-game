import React, { useContext } from "react";
import Button from "react-bootstrap/Button";

import ErrorBoundary from "../../../common/ErrorBoundary";

import SingleResult from "./SingleResult";
import ResultHeading from "./ResultHeading";

import { getTotal, getBonusTotal } from "../../utilityFunctions";

import GameContext from "../../gameContext";

import "./Result.scss";

const Result = () => {
  const { selectedBoxes, ResetGame } = useContext(GameContext);

  return (
    <ErrorBoundary>
      <section className="mt-4">
        <h2 className="text-center mb-4">Selected Items</h2>
        <ResultHeading />
        <div className="results">
          {selectedBoxes.map((boxResult) => (
            <SingleResult result={boxResult} key={boxResult.id} />
          ))}
        </div>

        <section className="py-2 bonusSection">
          <span className="bold">&#x1F490; Total bonus earned = </span>
          {getBonusTotal(selectedBoxes)}
        </section>
        <section className="d-flex justify-content-between mt-3 totalResultSection">
          <div className="totalSection">
            <div className="bold">Total Points</div>
            <div>{getTotal(selectedBoxes)}</div>
          </div>
          <div>
            <Button variant="success" onClick={ResetGame}>
              New Game
            </Button>
          </div>
        </section>
      </section>
    </ErrorBoundary>
  );
};

export default Result;
