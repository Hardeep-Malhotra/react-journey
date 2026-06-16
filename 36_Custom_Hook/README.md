# 🌐 useOnlineStatus — Custom React Hook

A lightweight, robust, and reusable custom React hook to monitor the user's internet connection status in real-time. It leverages native browser events (`online` and `offline`) and automatically handles cleanups to prevent memory leaks.

---

## 🚀 Features

- **Real-time Tracking:** Instantly detects when the network drops or comes back.
- **Memory Efficient:** Built-in cleanup mechanism removes event listeners when components unmount.
- **Zero Dependencies:** Uses pure React built-in hooks (`useState`, `useEffect`) and native Web APIs.
- **Highly Reusable:** Can be plugged into any component (e.g., stopping API calls or showing offline banners).

---

## 📂 Architecture & Code Deep Dive

Create a file named `useOnlineStatus.js` (or `.ts` if using TypeScript) inside your `src/hooks/` directory.

### Source Code (`useOnlineStatus.js`)

```javascript
import { useState, useEffect } from "react";

/**
 * Custom hook to track browser's network connectivity status.
 * @returns {boolean} - Returns `true` if online, and `false` if offline.
 */
function useOnlineStatus() {
  // 1. Initialize state with true (assuming online by default)
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // 2. Event handler functions to update state
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    // 3. Attach native browser event listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // 4. Cleanup Function: Removes listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // Empty dependency array ensures this runs only ONCE on mount

  // 5. Return the current network state to the consuming component
  return isOnline;
}

export default useOnlineStatus;
```
