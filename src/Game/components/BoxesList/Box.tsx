import React, { useContext } from "react";

import GameContext from "../../gameContext";

import { BoxData } from "../../types";

import "./Box.scss";

type Props = {
  data: BoxData;
};

const Box = ({ data }: Props) => {
  const { AddToCollection } = useContext(GameContext);
  return (
    <div
      className={`box ${data.color}`}
      role="button"
      onClick={() => AddToCollection(data)}
    >
      <p className="boxName">{data.letter}</p>
    </div>
  );
};

export default Box;
