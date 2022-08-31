import React, { createContext, Dispatch, useMemo, useReducer } from 'react';
import { Actions } from './actions';
import reducer from './reducer';
import { AppState, getInitialAppState } from './state';

const initialState = getInitialAppState();
export const appContext = createContext<{
  state: AppState;
  dispatch: Dispatch<Actions>;
}>({ state: initialState, dispatch: () => null });
const { Provider } = appContext;

interface IProvider {
  children: React.ReactNode;
}
export const StateProvider: React.FC<IProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <Provider value={contextValue}>{children}</Provider>;
};
