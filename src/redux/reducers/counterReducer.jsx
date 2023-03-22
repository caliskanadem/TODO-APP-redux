import { DECREASE, INCREASE, RESET } from "../types/counterTypes";

const initialState = {
  counter: 0,
};

//? pure js function
//? bir dış bagimliliği olmamali mesala fetch olmaz
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { counter: state.counter + 1 };
    case DECREASE:
      return { counter: state.counter - 1 };
    case RESET:
      return initialState;

    default:
      return state;
  }
};
