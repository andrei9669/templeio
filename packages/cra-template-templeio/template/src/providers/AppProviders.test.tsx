import React from 'react';
import { waitFor } from '@testing-library/dom';

import { render } from 'tests';

import AppProviders from './AppProviders';

describe('Theme', () => {
  test('renders', async () => {
    const { getByText } = render(<AppProviders>Provider</AppProviders>);
    await waitFor(() => {
      const element = getByText('Provider');

      expect(element).toBeInTheDocument();
    });
  });
});
