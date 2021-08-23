import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { DarkModeProvider } from '@store/darkMode/store';
import { AuthenticationProvider } from '@store/authentication/store';

import ErrorBoundary from './ErrorBoundary';
import Language from './Language';
import ThemeProvider from './Theme';

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
