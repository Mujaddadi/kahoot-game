import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./components/Header";
import PlayArea from "./components/PlayArea";
import Result from "./components/Result";

import GameContext from "./gameContext";

import { BoxData } from "./types";

const Game = () => {
  const [collection, setCollection] = useState<BoxData[]>([]);

  const AddToCollection = (newBoxData: BoxData) => {
    setCollection((collection) => [...collection, newBoxData]);
  };

  const ResetGame = () => setCollection([]);

  return (
    <GameContext.Provider
      value={{ AddToCollection, selectedBoxes: collection, ResetGame }}
    >
      <Row>
        <Col sm={12} md={8}>
          <Header />
          <PlayArea />
        </Col>
        <Col sm={12} md={4}>
          <Result />
        </Col>
      </Row>
    </GameContext.Provider>
  );
};

export default Game;
