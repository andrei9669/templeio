import type { Reducer } from 'react';

const reducer: Reducer<boolean, boolean | undefined> = (state, action) => {
  if (action === undefined) {
    return !state;
  }
  return action;
};

export default reducer;
