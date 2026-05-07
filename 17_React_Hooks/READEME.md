# 🚀 Ultimate React Hooks Guide & Collection

A complete and in-depth guide to React Hooks including:

✅ Core React Hooks  
✅ Custom Hooks  
✅ Advanced Hooks  
✅ Performance Hooks  
✅ Browser API Hooks  
✅ SSR Support  
✅ Real World Examples  
✅ Best Practices  
✅ Professional React Development Concepts

---

# 📚 Table of Contents

1. Introduction to React Hooks
2. Why Hooks Were Introduced
3. Benefits of Hooks
4. Core React Hooks
5. Advanced React Hooks
6. Custom Hooks
7. React Hooks Collection Package
8. SSR Support
9. Real World Applications
10. Performance Optimization
11. Rules of Hooks
12. Best Practices
13. TypeScript Support
14. Browser Support
15. Contributing
16. License

---

# 📖 Introduction to React Hooks

React Hooks are special JavaScript functions introduced in React 16.8 that allow developers to use:

- State
- Lifecycle methods
- Context
- References
- Performance optimization
- Browser APIs

inside functional components.

Before Hooks, these features were only available in class components.

Hooks completely changed React development and made React applications:

✅ Cleaner  
✅ Faster  
✅ Easier to understand  
✅ More reusable  
✅ More scalable

---

# ❓ Why Hooks Were Introduced

Before Hooks, developers used class components for advanced functionality.

Problems with class components:

❌ Large boilerplate code  
❌ Complex lifecycle methods  
❌ Difficult state management  
❌ Hard to reuse logic  
❌ Confusing `this` keyword  
❌ Poor code organization

Hooks solved these problems by enabling logic reuse in functional components.

---

# ✨ Benefits of Hooks

## 🚀 Cleaner Code

Hooks reduce unnecessary boilerplate.

---

## ♻️ Reusable Logic

Custom hooks allow reusable business logic.

---

## ⚡ Better Performance

Hooks like `useMemo` and `useCallback` optimize rendering.

---

## 🧠 Easier State Management

`useState` and `useReducer` simplify state handling.

---

## 🌐 Browser API Access

Hooks can directly interact with:

- Geolocation API
- ResizeObserver
- IntersectionObserver
- Local Storage
- Media Queries

---

# 🔥 Core React Hooks

---

# 1️⃣ useState Hook

## 📖 Definition

`useState` is used to create and manage state inside functional components.

State means data that changes over time.

---

# 🧠 Syntax

```jsx
const [state, setState] = useState(initialValue);
```

---

# ✅ Example

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

# 📌 Real World Use Cases

- Counter apps
- Form inputs
- Authentication state
- Shopping carts
- Theme toggles

---

# ⚡ Important Points

✅ Updating state causes re-render  
✅ State is component specific  
✅ State updates are asynchronous

---

# 2️⃣ useEffect Hook

## 📖 Definition

`useEffect` performs side effects inside React components.

---

# 📌 Side Effects Include

- API Calls
- Timers
- Event Listeners
- DOM Manipulation
- Local Storage

---

# 🧠 Syntax

```jsx
useEffect(() => {}, [dependencies]);
```

---

# ✅ Example

```jsx
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Mounted");
  }, []);

  return <h1>Hello</h1>;
}
```

---

# 🔥 API Fetch Example

```jsx
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </div>
  );
}
```

---

# 3️⃣ useRef Hook

## 📖 Definition

`useRef` stores mutable values without causing re-render.

---

# 🧠 Syntax

```jsx
const ref = useRef(initialValue);
```

---

# ✅ Example

```jsx
import React, { useRef } from "react";

function App() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

---

# 📌 Use Cases

- Access DOM elements
- Store previous values
- Timers
- Avoid unnecessary re-renders

---

# 4️⃣ useContext Hook

## 📖 Definition

`useContext` allows global data sharing without prop drilling.

---

# ❓ Prop Drilling

Passing props from parent → child → grandchild repeatedly.

---

# 🧠 Syntax

```jsx
const value = useContext(MyContext);
```

---

# ✅ Example

```jsx
import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);

  return <h1>{theme}</h1>;
}
```

---

# 📌 Use Cases

- Authentication
- Themes
- Language settings
- User information

---

# 5️⃣ useMemo Hook

## 📖 Definition

`useMemo` memoizes expensive calculations.

It improves performance.

---

# 🧠 Syntax

```jsx
const value = useMemo(() => {
  return expensiveFunction();
}, [dependencies]);
```

---

# ✅ Example

```jsx
import React, { useMemo } from "react";

function App({ number }) {
  const squared = useMemo(() => {
    console.log("Calculating...");
    return number * number;
  }, [number]);

  return <h1>{squared}</h1>;
}
```

---

# 📌 Use Cases

- Large calculations
- Filtering lists
- Sorting data
- Performance optimization

---

# 6️⃣ useCallback Hook

## 📖 Definition

`useCallback` memoizes functions.

---

# 🧠 Syntax

```jsx
const memoizedFunction = useCallback(() => {}, [dependencies]);
```

---

# ✅ Example

```jsx
import React, { useCallback } from "react";

function App() {
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return <button onClick={handleClick}>Click</button>;
}
```

---

# 🔥 Difference Between useMemo & useCallback

| Hook        | Memoizes  |
| ----------- | --------- |
| useMemo     | Values    |
| useCallback | Functions |

---

# 7️⃣ useReducer Hook

## 📖 Definition

`useReducer` manages complex state logic.

---

# 🧠 Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

---

# ✅ Example

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}
```

---

# ⚡ Advanced React Hooks

---

# 8️⃣ useLayoutEffect

Runs before browser paint.

### Use Cases

- DOM measurements
- Prevent flickering
- Animation fixes

---

# 9️⃣ useImperativeHandle

Customizes values exposed through `ref`.

Mostly used with `forwardRef`.

---

# 🔟 useDebugValue

Used for debugging custom hooks.

---

# 🧩 Custom Hooks

## 📖 Definition

Custom Hooks allow reusable logic.

---

# ✅ Example

```jsx
import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return { count, increment };
}
```

---

# 📦 React Hooks Collection Package

This package provides modern browser-based hooks.

---

# 📥 Installation

```bash
npm install @wojtekmaj/react-hooks
```

---

# 🚀 Available Hooks

| Hook                    | Description           |
| ----------------------- | --------------------- |
| useCurrentPosition      | Geolocation           |
| useDebouncedEffect      | Debounced effects     |
| useDebouncedState       | Debounced state       |
| useLocalStorage         | localStorage sync     |
| useSessionStorage       | sessionStorage sync   |
| useMatchMedia           | Media query matching  |
| useResizeObserver       | Resize observer       |
| useIntersectionObserver | Visibility detection  |
| useMutationObserver     | DOM mutation tracking |
| useScrollTop            | Vertical scroll       |
| useScrollLeft           | Horizontal scroll     |
| useTick                 | Timer counter         |
| useToggle               | Boolean toggle        |
| useWindowWidth          | Window width          |
| useWindowHeight         | Window height         |

---

# 🌐 SSR Support

SSR = Server Side Rendering

Hooks safely return `null` during SSR for browser-only APIs.

---

# 📌 Example

```jsx
const position = useCurrentPosition();

// Browser => Coordinates
// SSR => null
```

---

# 🌍 Real World Applications

These hooks are useful in:

- E-commerce websites
- Admin dashboards
- Chat apps
- SaaS applications
- Analytics dashboards
- Portfolio websites
- Social media platforms

---

# ⚡ Performance Optimization

React Hooks improve performance by:

✅ Reducing re-renders  
✅ Memoizing calculations  
✅ Optimizing functions  
✅ Efficient event handling

---

# 🚨 Rules of Hooks

## ✅ Only Call Hooks

- At top level
- Inside React components
- Inside custom hooks

---

## ❌ Never Call Hooks

- Inside loops
- Inside conditions
- Inside nested functions

---

# 🚫 Wrong Example

```jsx
if (true) {
  useState();
}
```

---

# ✅ Correct Example

```jsx
function App() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
```

---

# 🧠 Best Practices

## ✅ Keep Components Small

Smaller components are easier to maintain.

---

## ✅ Use Custom Hooks

Reuse logic instead of duplicating code.

---

## ✅ Use useMemo Carefully

Only for expensive calculations.

---

## ✅ Cleanup Effects

Always clean timers/listeners.

---

# 🧹 Cleanup Example

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

---

# 🛠 TypeScript Support

Fully supports TypeScript.

Benefits:

✅ Type Safety  
✅ Auto-completion  
✅ Better Developer Experience

---

# 🌐 Browser Support

Supports:

- Chrome
- Firefox
- Edge
- Safari
- Opera

---

# 🤝 Contributing

Contributions are welcome.

## Steps

1. Fork repository
2. Create branch
3. Make changes
4. Commit code
5. Push code
6. Open Pull Request

---

# 📄 License

MIT License

---

# 👨‍💻 Author

## Wojciech Maj

GitHub:
https://github.com/wojtekmaj

---

# ⭐ Support

If you found this project useful:

⭐ Give it a star on GitHub

---

# ❤️ Conclusion

React Hooks completely transformed modern React development.

They provide:

✅ Cleaner code  
✅ Better logic reuse  
✅ Simpler state management  
✅ Performance optimization  
✅ Modern functional architecture

Mastering Hooks is essential for becoming a professional React developer.

---

# 🚀 Happy Coding
