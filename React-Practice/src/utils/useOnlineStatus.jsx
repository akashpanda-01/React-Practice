import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOffline = () => setIsOnline(false);
  const handleOnline = () => setIsOnline(true);

  useEffect(() => {
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOnline);
      window.removeEventListener("online", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
