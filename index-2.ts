import { ActionInterface } from "./ngrx-fake/ngrx";
import { incrementAction, decrementAction, multiplicationAction, divideAction, resetAction } from "./counter/counter.actions";

const reducer = (state: any = 10, action: ActionInterface) => {

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

// Call to reducer

const increment = reducer(10, incrementAction) // 11
console.log('increment', increment)

const decrement = reducer(10, decrementAction) // 9
console.log('decrement', decrement)

const multiplication = reducer(10, multiplicationAction) // 20
console.log('multiplication', multiplication)

const division = reducer(10, divideAction) // 5
console.log('division', division)

const reset = reducer(10, resetAction) // 5
console.log('reset', reset)