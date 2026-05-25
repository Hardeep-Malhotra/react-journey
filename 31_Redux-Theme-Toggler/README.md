# Redux Toolkit Counter App 🚀

A beginner-friendly Counter App built using **React + Redux Toolkit**

This project helped me understand:

- Redux Toolkit
- Store
- Slice
- State
- Actions
- Reducers
- Dispatch
- useSelector
- useDispatch
- Provider
- Redux Data Flow

---

# Project Preview

## Counter UI

```text
Count: 0

[ Increment ]

[ Decrement ]
```

Click Increment:

```text
Count: 1
```

Click Decrement:

```text
Count: 0
```

---

# Project Architecture

![Redux Architecture](https://redux.js.org/img/tutorials/essentials/ReduxDataFlowDiagram.gif)

---

# Folder Structure

```bash
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── COUNTERS/
│       └── counterSlice.js
│
├── components/
│   └── Counter.jsx
│
├── App.jsx
└── main.jsx
```

---

# What is Redux Toolkit?

Redux Toolkit is the modern way to use Redux.

It helps manage app state easily.

Redux Toolkit reduces boilerplate and makes Redux easier.

---

# What is State?

State = Data

Example:

```js
value: 0;
```

In our counter app:

```text
Count: 0
```

This number is state.

---

# What is Action?

Action tells Redux:

```text
What happened?
```

Example:

```js
dispatch(increment());
```

Meaning:

```text
Increase count by 1
```

---

# What is Reducer?

Reducer updates the state.

Example:

```js
increment: (state) => {
  state.value += 1;
};
```

If current value is:

```js
0;
```

after increment:

```js
1;
```

---

# What is Store?

Store is the central storage of Redux.

All global data is stored here.

Example:

```js
{
  counter: {
    value: 0;
  }
}
```

---

# Step by Step Project Setup

---

# 1. Install Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
```

---

# 2. Create Store

## store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/COUNTERS/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

---

# Explanation

## configureStore()

Creates Redux Store

---

## reducer

Connects reducers with store

---

## counter

Name of state

---

## counterReducer

Reducer function that manages counter state

---

# 3. Create Slice

## counterSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

---

# Explanation

## createSlice()

Creates:

- state
- actions
- reducers

automatically

---

# initialState

Initial data:

```js
value: 0;
```

---

# increment

Adds +1

---

# decrement

Subtracts -1

---

# counterSlice.actions

Automatically creates:

```js
increment();
decrement();
```

---

# 4. Connect Store to React App

## main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
```

---

# Provider

Provider connects:

```text
React App ↔ Redux Store
```

Without Provider Redux won't work.

---

# 5. Counter Component

## Counter.jsx

```jsx
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/COUNTERS/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
```

---

# Explanation

## useSelector()

Reads data from Redux Store

Example:

```js
state.counter.value;
```

---

## useDispatch()

Used to send action to Redux

Example:

```js
dispatch(increment());
```

---

# Full Data Flow

```text
User Click Button
      │
      ▼
dispatch(increment())
      │
      ▼
Action Created
      │
      ▼
Reducer Runs
      │
      ▼
State Updates
      │
      ▼
Store Updates
      │
      ▼
useSelector Reads State
      │
      ▼
UI Re-renders
```

---

# Example Flow

Initial:

```text
Count: 0
```

User clicks Increment:

```text
dispatch(increment())
```

Reducer:

```js
state.value += 1;
```

Store becomes:

```js
value = 1;
```

UI:

```text
Count: 1
```

---

# Why use Redux instead of useState?

For small apps:

```js
useState();
```

is enough.

---

For large apps:

Redux Toolkit is better.

Example:

- Cart App
- User Login
- Theme Toggle
- Dashboard
- Notifications

Because many components need same data.

Redux stores data in one central place.

---

# Key Concepts Summary

## State

Current data

---

## Action

What happened

---

## Reducer

Updates state

---

## Store

Stores state

---

## Dispatch

Sends action

---

## Selector

Reads state

---

# Final Summary

Redux Toolkit makes state management simple.

This Counter App helped understand:

✅ Store  
✅ Slice  
✅ State  
✅ Action  
✅ Reducer  
✅ Dispatch  
✅ useSelector  
✅ useDispatch  
✅ Provider  
✅ Complete Redux Flow

---

# Final Redux Flow

```text
Click
 ↓
dispatch()
 ↓
Action
 ↓
Reducer
 ↓
Store Update
 ↓
UI Update
```

---

# Built With ❤️

- React
- Redux Toolkit
- React Redux

---

Happy Coding 🚀
