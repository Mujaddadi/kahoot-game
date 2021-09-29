import cloneDeep from "lodash/cloneDeep";

import { BoxData } from "./types";

/**
 * This is to add new boxes to collection
 */

export const addToCollection = (
  selectedBoxes: BoxData[],
  selectedBox: BoxData
) => {
  let selectedBoxesClone = cloneDeep(selectedBoxes);

  //If the selectedBoxesClone is empty, just push the box and return
  if (!selectedBoxesClone.length) {
    selectedBoxesClone.push(selectedBox);
    return selectedBoxesClone;
  }

  for (let index = 0; index < selectedBoxes.length; index += 1) {
    //If the box already exist in the list, increase its quantity
    if (selectedBoxes[index].id === selectedBox.id) {
      selectedBoxesClone[index].quantity += 1;
      return selectedBoxesClone;
    }
  }

  selectedBoxesClone.push(selectedBox);

  return selectedBoxesClone;
};

/**
 * This is to get the individual box total including bonus
 */
export const getBoxTotal = (boxData: BoxData) => {
  // If the remainder of box quantity and the bonus multiple is zero or there can be multiple bonus factors,
  // add the bonus to totalMultiples
  if (
    boxData.bonus &&
    (boxData.quantity % boxData.bonus.multiple === 0 ||
      boxData.quantity / boxData.bonus.multiple > 1)
  ) {
    const totalMultiples = Math.trunc(
      boxData.quantity / boxData.bonus.multiple
    );

    // Add total with the total bonuses
    return boxData.quantity * boxData.points + totalMultiples * boxData.points;
  }

  return boxData.quantity * boxData.points;
};

/**
 * This is to get the total including bonuses
 */
export const getTotal = (selectedBoxes: BoxData[]) => {
  let boxesTotal = 0;
  selectedBoxes.forEach((box) => (boxesTotal += getBoxTotal(box)));
  return boxesTotal;
};

/**
 * This is to get the total bonus
 */
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
