import { Reducer } from 'react';

type State = { isAuthorized: boolean };
type Action = boolean;

const reducer: Reducer<State, Action> = (state, action) => {
  if (action === undefined) {
    return state;
  }
  return { isAuthorized: action };
};

export default reducer;
