import { Store, createStore } from 'redux'
import { counterReducer } from './counter/counter.reducer'
import { incrementAction } from './counter/counter.actions';

const store: Store = createStore(counterReducer);

store.subscribe(() => {
  console.log('get state', store.getState());
})

store.dispatch(incrementAction);