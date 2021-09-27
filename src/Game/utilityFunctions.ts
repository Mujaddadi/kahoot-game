import { BoxData } from "./types";

export const addToCollection = (
  selectedBoxes: BoxData[],
  selectedBox: BoxData
) => {
  let selectedBoxesCopy = selectedBoxes.slice();

  if (!selectedBoxesCopy.length) {
    selectedBoxesCopy.push(selectedBox);
    return selectedBoxesCopy;
  }

  for (let index = 0; index < selectedBoxes.length; index += 1) {
    if (selectedBoxes[index].id === selectedBox.id) {
      selectedBoxesCopy[index].quantity += 1;
      return selectedBoxesCopy;
    }
  }

  selectedBoxesCopy.push(selectedBox);

  return selectedBoxesCopy;
};

export const getTotal = (selectedBoxes: BoxData[]) => {
  let boxesTotal = 0;
  selectedBoxes.forEach((box) => (boxesTotal += box.points * box.quantity));
  return boxesTotal;
};
