import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./components/Header";
import PlayArea from "./components/PlayArea";
import Result from "./components/Result";

const Game = () => {
  return (
    <Row>
      <Col sm={12} md={8}>
        <Header />
        <PlayArea />
      </Col>
      <Col sm={12} md={4}>
        <Result />
      </Col>
    </Row>
  );
};

export default Game;
