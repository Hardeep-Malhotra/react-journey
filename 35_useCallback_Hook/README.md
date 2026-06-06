# ⚡ React `useCallback` Hook Mastery

Welcome to this comprehensive guide on React's `useCallback` hook! This repository demonstrates how to optimize React applications, prevent unnecessary re-renders, and understand the core mechanics of component memoization.

---

## 🧠 Why Do We Need `useCallback`?

In React, whenever a component re-renders, **every function declared inside it is re-created from scratch** with a new memory reference.

If you pass this function as a `prop` to a child component, the child component thinks it received a completely new prop and triggers a **forced re-render**, even if the function logic hasn't changed. This causes performance lag in large scale applications.

> **💡 The Solution:** `useCallback` caches (memoizes) the function instance between renders. It tells React: _"Do not recreate this function unless one of its dependencies changes."_

---

## ⚙️ Syntax & Structure

```javascript
import { useCallback } from "react";

const memoizedFunction = useCallback(() => {
  // Your function logic goes here
  console.log("Function executed!");
}, [dependency1, dependency2]); // Dependency Array
```

## 🛠️ Practical Implementation (Parent & Child Architecture)

Here is a clean, production-ready example showing a Parent component keeping track of a counter, and a memoized Child component handling a Todo list without structural re-render leaks.

### 🏠 1. App.jsx (Parent Component)

```js
import { useState, useCallback } from "react";
import ChildComponent from "./components/ChildComponent";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // Normal function: Re-created on EVERY count increment
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  // Memoized function: Cached in memory, reference remains stable
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `New Todo ${prev.length + 1}`]);
  }, []); // Empty dependency array means it's created only ONCE on mount

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Parent Component</h1>
      <h2>Count: {count}</h2>

      <button
        onClick={incrementCount}
        style={{ marginRight: "10px", padding: "8px 12px" }}
      >
        Increment Count
      </button>

      <hr style={{ margin: "20px 0" }} />

      <ChildComponent addTodo="{addTodo}" todos="{todos}" />
    </div>
  );
};

export default App;
```

## 👦 2. ChildComponent.jsx (Child Component)

```js
import React from "react";

const ChildComponent = ({ todos, addTodo }) => {
  // Logs only when 'todos' array updates, completely ignores 'count' updates!
  console.log("🏃‍♂️ Child Component is rendering...!");

  return (
    <div
      style={{ border: "2px dashed #999", padding: "15px", marginTop: "10px" }}
    >
      <h3>Child Component (Todo List)</h3>
      <button
        onClick={addTodo}
        style={{ padding: "6px 10px", marginBottom: "10px" }}
      >
        Add Todo
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

// 👑 Crucial Step: Wrapping with React.memo is mandatory for useCallback to work!
export default React.memo(ChildComponent);
```

### 🎛️ How To Verify The Optimization (Step-by-Step)

Open your browser console (F12 -> Console).

`Click the "Increment Count" button.`

Observation: The Parent count increases, but no log appears from the Child component. Optimization Success! ✅

`Click the "Add Todo" button.`

Observation: The console prints "🏃‍♂️ Child Component is rendering...!" because the actual todos data changed. Correct Behavior! ✅

---

## 📊 Quick Cheatsheet: DOs and DONTs

| Rule  | When to use `useCallback`?                                                                          | When to AVOID it?                                                                              |
| :---: | :-------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| **1** | Passing a function as a prop to a child component optimized with `React.memo()`.                    | For local functions used only inside the same component (e.g., a standard form submit button). |
| **2** | The function is used as a dependency inside a `useEffect` hook (prevents infinite rendering loops). | Simple primitive calculations or values (Use `useMemo` for values, not `useCallback`).         |
| **3** | Custom hooks returning structural functional closures.                                              | Overusing it everywhere, as saving functions in cache has its own slight overhead cost.        |

---

📢 Connect & Learn More
If you found this guide helpful and want to dive deeper into advanced React patterns, Data Structures, and JavaScript concepts, make sure to check out the channel:

▶️ Subscribe on YouTube: CodeWithHardeep (Search: CodeWithHardeep)

Happy Coding! 🚀
