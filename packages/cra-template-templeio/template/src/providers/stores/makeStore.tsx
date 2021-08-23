import React, { Dispatch, Reducer, useContext, useReducer } from 'react';

function makeStore<A, S>(
  reducer: Reducer<S, A>,
  initialState: S,
): [React.FC, () => Dispatch<A>, () => S] {
  const DispatchContext = React.createContext<Dispatch<A>>(() => {});
  const StoreContext = React.createContext<S>(initialState);

  const StoreProvider: React.FC = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialState);

    return (
      <DispatchContext.Provider value={dispatch}>
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
      </DispatchContext.Provider>
    );
  };

  const useDispatch = () => useContext(DispatchContext);
  const useStore = () => useContext(StoreContext);

  return [StoreProvider, useDispatch, useStore];
}

export default makeStore;
