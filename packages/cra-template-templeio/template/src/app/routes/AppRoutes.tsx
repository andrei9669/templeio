import React from 'react';
import { Redirect, Switch } from 'react-router-dom';


const AppRoutes: React.FC = () => (
  <Switch>
    {/* <Route to="/" exact component={Home} /> */}
    {/* <Route path="/about" component={About} /> */}
    {/* <Route path="/help" component={Help} /> */}
    {/* <Route path="/login" component={LoginContainer} /> */}

    <Redirect to="/" />
  </Switch>
);

export default AppRoutes;
