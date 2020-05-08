import {
  LocalState as RootReducerState,
  LocalAction as RootReducerAction,
  initialState as RootReducerInitialState
} from './pages/home/reducer'
import {
  LocalState as SecondReducerState,
  LocalAction as SecondReducerAction,
  initialState as SecondReducerInitialState
} from './pages/detail/reducer'

export type State = {
  RootReducer: RootReducerState,
  SecondReducer: SecondReducerState,
}

export type Pages = keyof State

export enum AppLifeCycle {
  Bootstrap = 'bootstrap'
}
export enum ScreenLifeCycle {
  Loading = 'loading',
  Error = 'error',
  Update = 'update',
  Ready = 'ready'
}

export type Action = {
  RootReducer: RootReducerAction,
  SecondReducer: SecondReducerAction
}

export const initialState: State = {
  RootReducer: RootReducerInitialState,
  SecondReducer: SecondReducerInitialState
}