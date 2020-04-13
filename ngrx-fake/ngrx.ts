export interface ActionInterface {
  type: string;
  payload?: any;
}

export interface Reducer<T> {
  (state: T, action: ActionInterface): T
}