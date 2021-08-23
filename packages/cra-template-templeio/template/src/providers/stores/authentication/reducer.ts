import { Reducer } from 'react';

const reducer: Reducer<unknown, unknown> = (state, action) => {
  if (action === undefined) {
    return state;
  }
  return action;
};

export default reducer;
