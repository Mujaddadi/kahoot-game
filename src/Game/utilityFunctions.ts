import { BoxData } from "./types";

export const getTotal = (selectedBoxes: BoxData[]) => {
  let boxesTotal = 0;
  selectedBoxes.forEach((box) => (boxesTotal += box.points));
  return boxesTotal;
};
