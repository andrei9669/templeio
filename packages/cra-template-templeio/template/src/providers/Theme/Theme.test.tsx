import { waitFor } from '@testing-library/dom';
import React from 'react';

import { render } from 'tests';

import Theme from '.';

describe('Theme', () => {
  test('renders', async () => {
    const { getByText } = render(<Theme>Theme</Theme>);
    await waitFor(() => {
      const element = getByText('Theme');

      expect(element).toBeInTheDocument();
    });
  });
});
