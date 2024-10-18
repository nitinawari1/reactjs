import { createStore } from "redux";
//createstore method obuselated it not use in real world envirment 


//reducer handle the upcoming dispatch request and update the state
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(reducer);