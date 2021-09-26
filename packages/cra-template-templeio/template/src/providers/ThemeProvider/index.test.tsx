import { waitFor } from '@testing-library/dom';
import React from 'react';

import { render } from '@/tests';

import ThemeProvider from '.';

describe('Theme', () => {
  test('renders', async () => {
    const { getByText } = render(<ThemeProvider>Theme</ThemeProvider>);
    await waitFor(() => {
      const element = getByText('Theme');

      expect(element).toBeInTheDocument();
    });
  });
});
