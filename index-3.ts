import { Reducer, ActionInterface } from "./ngrx-fake/ngrx";
import { counterReducer } from "./counter/counter.reducer";
import { incrementAction, multiplicationAction } from "./counter/counter.actions";

class Store<T> {
  // private state: T;

  constructor(private reducer: Reducer<T>, private state: T) {

  }

  getState() {
    return this.state;
  }

  dispatch(action: ActionInterface) {
    this.state = this.reducer(this.state, action);
  }

}

const store = new Store(counterReducer, 10);

console.log('get state', store.getState()); // 10
console.log('dispatch');
store.dispatch(incrementAction)
console.log('get state', store.getState()); // 11
store.dispatch(multiplicationAction)
console.log('get state', store.getState()); // 22

