import { ActionInterface } from "../ngrx-fake/ngrx";

export const counterReducer = (state: any = 10, action: ActionInterface) => {

  switch (action.type) {
    case 'INCREMENT':
      return state += 1;
    case 'DECREMENT':
      return state -= 1;
    case 'MULTIPLICATION':
      return state * action.payload;
    case 'DIVISION':
      return action.payload !== 0 ? state / action.payload : 0;
    case 'RESET':
      return state = 0;
    default: return state;
  }
}