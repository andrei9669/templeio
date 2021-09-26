import { renderHook } from '@testing-library/react-hooks';

import { waitFor } from '@/tests';

import useLanguage from '.';

describe('useLanguage', () => {
  test('returns a value', async () => {
    const { result } = renderHook(() => useLanguage());

    expect(result.current).toEqual(false);
    await waitFor(() => {
      expect(result.current).toEqual(true);
    });
  });
});
