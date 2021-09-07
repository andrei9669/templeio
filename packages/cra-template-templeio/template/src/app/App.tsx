import React, { ReactElement } from 'react';

import AppProviders from 'src/providers/AppProviders';

import AppRoutes from './routes/AppRoutes';

export const App = (): ReactElement => (
  <AppProviders>
    <header>header</header>
    <nav>
      {/* <ul className="app__menu">
        <li className="app__menu-item">
          <Link className="app__menu-link" to={AppRoute.home}>
            Home
          </Link>
        </li>
        <li className="app__menu-item">
          <Link className="app__menu-link" to={AppRoute.about}>
            About
          </Link>
        </li>
        <li className="app__menu-item">
          <Link className="app__menu-link" to={AppRoute.help}>
            Help
          </Link>
        </li>
        <li className="app__menu-item">
          <Link className="app__menu-link" to={isAuthorized ? AppRoute.logout : AppRoute.login}>
            {isAuthorized ? 'Logout' : 'Login'}
          </Link>
        </li>
      </ul> */}
      nav
    </nav>
    <main>
      <AppRoutes />
    </main>
    <footer>footer</footer>
  </AppProviders>
);
