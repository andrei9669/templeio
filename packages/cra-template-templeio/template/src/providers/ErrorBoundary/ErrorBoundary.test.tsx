import { waitFor } from '@testing-library/dom';
import React from 'react';

import { render } from 'tests';

import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  test('returns children when no error', async () => {
    const { getByText } = render(<ErrorBoundary>children</ErrorBoundary>);
    await waitFor(() => {
      const element = getByText(/children/);
      expect(element).toBeInTheDocument();
    });
  });

  test('catches error inside children', async () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});

    const ChildrenWithError = () => {
      throw new Error('bad');
    };

    const { getByText } = render(
      <ErrorBoundary>
        <ChildrenWithError />
      </ErrorBoundary>,
    );
    await waitFor(() => {
      const element = getByText(/Something went wrong/);
      expect(element).toBeInTheDocument();
    });

    spy.mockRestore();
  });
});
