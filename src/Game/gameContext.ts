import { createContext } from "react";

import { BoxData } from "./types";

type ContextProps = {
  AddToCollection: (boxData: BoxData) => void;
  selectedBoxes: BoxData[];
  ResetGame: () => void;
};

export default createContext({} as ContextProps);
