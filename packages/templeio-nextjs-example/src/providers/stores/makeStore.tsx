import React, { Dispatch, Reducer, useContext, useReducer } from 'react';

function makeStore<A, S>(
  reducer: Reducer<S, A>,
  initialState: S,
): [React.FC<{ value?: S | undefined }>, () => Dispatch<A>, () => S] {
  const DispatchContext = React.createContext<Dispatch<A>>(() => {});
  const StoreContext = React.createContext<S>(initialState);

  const StoreProvider: React.FC<{ value?: S | undefined }> = ({
    value,
    children,
  }) => {
    const [store, dispatch] = useReducer(reducer, value ?? initialState);
    return (
      <DispatchContext.Provider value={dispatch}>
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
      </DispatchContext.Provider>
    );
  };

  const useDispatch = () => useContext(DispatchContext);
  const useStore = () => useContext(StoreContext);

  return [React.memo(StoreProvider), useDispatch, useStore];
}

export default makeStore;
