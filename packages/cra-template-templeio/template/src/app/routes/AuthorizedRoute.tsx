import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RouteProps } from 'react-router';

import { AppRoute } from './AppRoute.enum';

export const AuthorizedRoute: React.FC<RouteProps> = (props) => {
  const { isAuthorized } = { isAuthorized: true };

  return isAuthorized ? <Route {...props} /> : <Redirect to={AppRoute.login} />;
};
