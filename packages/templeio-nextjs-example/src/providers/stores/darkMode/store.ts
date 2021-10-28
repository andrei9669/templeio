import makeStore from '../makeStore';
import reducer from './reducer';

const initialState = false;

const [DarkModeProvider, useDarkModeDispatch, useDarkMode] = makeStore(
  reducer,
  initialState,
);

export { DarkModeProvider, useDarkMode, useDarkModeDispatch };
