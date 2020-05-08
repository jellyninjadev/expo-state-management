import React, {createContext, useReducer, Dispatch, Reducer as NativeReducer, useEffect} from 'react'
import {State, Pages, Action, initialState, AppLifeCycle} from './state'
import {reducer as RootReducer} from './pages/home/reducer'
import {reducer as SecondReducer} from './pages/detail/reducer'
import {AsyncStorage} from 'react-native'

export type Dispatcher<Action, State> = {
  type: Action, payload: Partial<State>
}

export type Reducer<State, Action> = NativeReducer<State, Dispatcher<Action, State>>

// @ts-ignore default value init from reducer
const Context = createContext<{state: State, dispatch: Dispatch<Action>}>({})

// const combineReducers = (reducers: {[key in Pages]: Reducer<State[key], Dispatcher<Action[key], State[key]>>}) =>
const combineReducers = (reducers: {[key in Pages]: Reducer<State[key], Action[key]>}) =>
  (state: State, action: Dispatcher<Action[Pages], State>): State => Object
    .entries(reducers)
    .reduce((acc: State, [k, reducer]) =>
      // @ts-ignore Object.entries does not carry types correctly
      ({[k]: reducer(state[k], action), ...acc}), {} as State)

/*  
  To make types work here we could do type assertion
  Doing so we get 4 lines instead of 1, so i just ignored types
  const _k = k as Pages
  const _reducer = reducer as Reducer<State[Pages], Action[Pages]>
  const _action = action as Dispatcher<Action[Pages], Partial<State[Pages]>>
  return {[k]: (_reducer(state[_k], _action), ...acc}
*/

const Provider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(
    combineReducers({RootReducer, SecondReducer}),
    initialState
  )

  useEffect(() => {
    const bootstrap = async () => {
      // await AsyncStorage.clear()
      const persistedState = await AsyncStorage.getItem('state')
      if (!persistedState) return

      const deserializedState = JSON.parse(persistedState)
      // TODO
      // Create previous AppLifeCycle and ScreenLifeCycle
      // dispatch({type: AppLifeCycle.Bootstrap, payload: deserializedState})
    }
    bootstrap()
  }, [])

  useEffect(() => {
    const serializedState = JSON.stringify(state)

    if (JSON.stringify(initialState) !== serializedState) {
      AsyncStorage.setItem('state', serializedState)
    }
  }, [state])

  return <Context.Provider value={{state, dispatch}} children={children} />
}


export {Context, Provider}