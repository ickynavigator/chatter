import { useLocalStorage } from '@mantine/hooks';
import React, {
  createContext,
  Dispatch,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { SetStore } from './actionCreators';
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
  const [initialStateSet, SetInitialStateSet] = useState(false);

  const [persistedState, setPersistedState] = useLocalStorage({
    key: 'state',
    defaultValue: initialState,
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialStateSet) {
      SetInitialStateSet(true);
      dispatch(SetStore(persistedState));
    }
  }, [persistedState, initialStateSet]);

  useEffect(() => {
    // Updates the local storage state when the user makes changes
    if (initialStateSet) {
      console.log('persisting state');
      setPersistedState(state);
    }
  }, [setPersistedState, state, initialStateSet]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <Provider value={contextValue}>{children}</Provider>;
};
