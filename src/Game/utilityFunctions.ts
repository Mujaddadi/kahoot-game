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

export const getBoxTotal = (boxData: BoxData) => {
  if (
    boxData.bonus &&
    (boxData.quantity % boxData.bonus.multiple === 0 ||
      boxData.quantity / boxData.bonus.multiple > 1)
  ) {
    const totalMultiples = Math.trunc(
      boxData.quantity / boxData.bonus.multiple
    );

    return boxData.quantity * boxData.points + totalMultiples * boxData.points;
  }

  return boxData.quantity * boxData.points;
};

export const getBonusTotal = (selectedBoxes: BoxData[]) => {
  let totalBonus = 0;

  for (let index = 0; index < selectedBoxes.length; index += 1) {
    const currentBoxData = selectedBoxes[index];
    if (currentBoxData.bonus) {
      if (
        currentBoxData.quantity % currentBoxData.bonus.multiple === 0 ||
        currentBoxData.quantity / currentBoxData.bonus.multiple > 1
      ) {
        const totalMultiples = Math.trunc(
          currentBoxData.quantity / currentBoxData.bonus.multiple
        );

        totalBonus += totalMultiples * currentBoxData.points;
      }
    }
  }

  return totalBonus;
};
