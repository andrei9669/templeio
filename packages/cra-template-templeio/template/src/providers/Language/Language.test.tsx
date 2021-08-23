import React from 'react';

import { render, screen, waitFor } from 'tests';

import Language from './Language';

describe('Language', () => {
  test('renders', async () => {
    render(<Language>Language</Language>);
    await waitFor(() => {
      const element = screen.getByText(/Language/);
      expect(element).toBeInTheDocument();
    });
  });
});
