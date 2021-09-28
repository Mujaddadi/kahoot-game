import { BoxData } from "./types";

const boxData: BoxData[] = [
  {
    id: 1,
    points: 50,
    letter: "A",
    quantity: 1,
    bonus: { multiple: 3, amount: 50 },
    color: "green",
  },
  {
    id: 2,
    points: 30,
    letter: "B",
    quantity: 1,
    bonus: { multiple: 2, amount: 30 },
    color: "red",
  },
  { id: 3, points: 20, letter: "C", quantity: 1, color: "orange" },
  { id: 4, points: 15, letter: "D", quantity: 1, color: "green" },
  { id: 5, points: 10, letter: "E", quantity: 1, color: "red" },
];

export default boxData;
