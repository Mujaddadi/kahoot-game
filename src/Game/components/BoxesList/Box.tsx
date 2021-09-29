import React, { useContext } from "react";

import GameContext from "../../gameContext";

import { BoxData } from "../../types";

import "./Box.scss";

type Props = {
  data: BoxData;
};

const Box = ({ data }: Props) => {
  const { AddToCollection } = useContext(GameContext);

  const handleAddToCollection = () => AddToCollection(data);

  return (
    <div
      className={`box ${data.color}`}
      role="button"
      onClick={handleAddToCollection}
    >
      <p className="boxName">{data.letter}</p>
    </div>
  );
};

export default Box;
