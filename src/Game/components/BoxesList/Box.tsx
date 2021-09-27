import React from "react";

import "./Box.scss";

type Props = {
  letter: string;
};

const Box = ({ letter }: Props) => {
  return (
    <div className="box" role="button">
      <p className="boxName">{letter}</p>
    </div>
  );
};

export default Box;
