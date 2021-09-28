export type BoxData = {
  id: number;
  points: number;
  letter: string;
  quantity: number;
  color: string;
  bonus?: { multiple: number; amount: number };
};
