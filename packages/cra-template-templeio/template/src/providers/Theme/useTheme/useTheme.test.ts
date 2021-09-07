import { renderHook } from '@testing-library/react-hooks';

import useTheme from './useTheme';

describe('useTheme', () => {
  test('returns a value', async () => {
    const { result } = renderHook(useTheme);

    expect(result.current.isDarkMode).toBe(false);
  });
});
