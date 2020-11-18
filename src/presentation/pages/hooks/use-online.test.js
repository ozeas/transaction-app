import { renderHook } from '@testing-library/react-hooks';

import useOnline from './use-online';

describe('useOnline hook', () => {
  const networkGetter = Object.defineProperty(window, 'navigator', {
    writable: true,
    value: { onLine: jest.fn() },
  });

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should return isOnline true and IsOffline false when navigator.Online is true', () => {
    networkGetter.navigator.onLine = true;
    const { result } = renderHook(() => useOnline());

    expect(result.current.isOnline).toBeTruthy();
    expect(result.current.isOffline).toBeFalsy();
  });

  it('should return isOnline false and IsOffline true when navigator.Online is false', () => {
    networkGetter.navigator.onLine = false;
    const { result } = renderHook(() => useOnline());

    expect(result.current.isOnline).toBeFalsy();
    expect(result.current.isOffline).toBeTruthy();
  });
});
