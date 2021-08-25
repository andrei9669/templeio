import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RouteProps } from 'react-router';

import { useAuthentication } from '@store/authentication/store';

export const AuthorizedRoute: React.FC<RouteProps> = (props) => {
  const { isAuthorized } = useAuthentication();

  // or redirect to unauthorized page (403)

  return isAuthorized ? <Route {...props} /> : <Redirect to="/login" />;
};
