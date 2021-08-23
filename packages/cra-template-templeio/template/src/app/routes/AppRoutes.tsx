import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { AppRoute } from './AppRoute.enum';

const AppRoutes: React.FC = () => (
  <Switch>
    {/* <Route path={AppRoute.home} exact component={Home} /> */}
    {/* <Route path={AppRoute.about} component={About} /> */}
    {/* <Route path={AppRoute.help} component={Help} /> */}
    {/* <Route path={AppRoute.login} component={LoginContainer} /> */}

    <Redirect to={AppRoute.home} />
  </Switch>
);

export default AppRoutes;
