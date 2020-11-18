import { useState, useEffect } from 'react';

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  window.addEventListener('offline', () => setIsOnline(false));
  window.addEventListener('online', () => setIsOnline(true));

  useEffect(() => {
    return () => {
      window.removeEventListener('offline', () => setIsOnline(false));
      window.removeEventListener('online', () => setIsOnline(true));
    };
  }, []);

  return {
    isOnline: isOnline === true,
    isOffline: isOnline === false,
  };
};

export default useOnline;
