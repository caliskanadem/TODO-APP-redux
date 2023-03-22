import { DECREASE, INCREASE, RESET } from "../types/counterTypes";

export const inc = () => {
  return { type: INCREASE };
};

export const dec = () => {
  return { type: DECREASE };
};

export const reset = () => ({ type: RESET });
