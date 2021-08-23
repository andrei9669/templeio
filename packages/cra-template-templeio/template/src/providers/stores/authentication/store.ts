import makeStore from '../makeStore';
import reducer from './reducer';

const initialState = undefined;

const [AuthenticationProvider, useAuthenticationDispatch, useAuthentication] =
  makeStore(reducer, initialState);

export { AuthenticationProvider, useAuthenticationDispatch, useAuthentication };
