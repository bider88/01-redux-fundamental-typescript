// Actions

import { ActionInterface } from "../ngrx-fake/ngrx"

export const incrementAction: ActionInterface = {
  type: 'INCREMENT'
}

export const decrementAction: ActionInterface = {
  type: 'DECREMENT'
}

export const multiplicationAction: ActionInterface = {
  type: 'MULTIPLICATION',
  payload: 2
}

export const divideAction: ActionInterface = {
  type: 'DIVISION',
  payload: 2
}

export const resetAction: ActionInterface = {
  type: 'RESET'
}