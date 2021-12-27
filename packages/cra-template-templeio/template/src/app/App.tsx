import type { ReactElement } from 'react';
import React from 'react';

import AppProviders from '@/providers/AppProviders';

import AppRoutes from './routes/AppRoutes';

const App = (): ReactElement => (
  <AppProviders>
    <header>header</header>
    <nav>nav</nav>
    <main>
      <AppRoutes />
    </main>
    <footer>footer</footer>
  </AppProviders>
);

export default App;
