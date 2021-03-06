import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { DarkModeProvider } from '@stores/darkMode/store';
import { AuthenticationProvider } from '@stores/authentication/store';

import ErrorBoundary from './ErrorBoundary';
import Language from './Language';
import ThemeProvider from './ThemeProvider';

const AppProviders: React.FC = ({ children }) => (
  <Language>
    <DarkModeProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <AuthenticationProvider>
            <Router>{children}</Router>
          </AuthenticationProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </DarkModeProvider>
  </Language>
);

export default AppProviders;
