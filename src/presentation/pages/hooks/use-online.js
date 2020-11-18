import { useState, useEffect } from 'react';

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  const handleIsOnline = () => setIsOnline(true);
  const handleIsOffline = () => setIsOnline(true);

  window.addEventListener('offline', handleIsOnline);
  window.addEventListener('online', handleIsOffline);

  useEffect(() => {
    return () => {
      window.removeEventListener('offline', handleIsOffline);
      window.removeEventListener('online', handleIsOnline);
    };
  }, []);

  return {
    isOnline: isOnline === true,
    isOffline: isOnline === false,
  };
};

export default useOnline;
