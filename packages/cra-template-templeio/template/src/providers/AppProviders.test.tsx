import React from 'react';
import { waitFor } from '@testing-library/dom';

import { render } from '@/tests';

describe('Theme', () => {
  test('renders', async () => {
    const { getByText } = render(<>Provider</>);
    await waitFor(() => {
      const element = getByText('Provider');

      expect(element).toBeInTheDocument();
    });
  });
});
