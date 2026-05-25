# Redux Toolkit Architecture Guide 🚀

# What is Redux Toolkit?

Redux Toolkit (RTK) is the modern way to use Redux.

It helps us manage application state in a simple and clean way.

Redux Toolkit reduces boilerplate code and makes Redux easier to understand.

---

# What is State?

State means data.

Example:

- theme → light / dark
- cart items
- logged-in user
- notifications
- products

Example:

```js
theme = "light";
```

This value is called **state**.

---

# Why Redux Toolkit?

In React apps many components need the same data.

Example:

- Navbar needs cart count
- Cart page needs cart items
- Profile page needs user info

Passing props everywhere becomes difficult.

Redux Toolkit solves this.

It stores common app data in one central place.

---

# Redux Toolkit Architecture Overview

```text
User Click
   │
   ▼
Event Handler
   │
   ▼
dispatch()
   │
   ▼
Action
   │
   ▼
Reducer (inside Slice)
   │
   ▼
Store Updates
   │
   ▼
useSelector()
   │
   ▼
UI Re-renders
```

---

# Architecture Diagram

![Redux Toolkit Architecture](https://redux.js.org/img/tutorials/essentials/ReduxDataFlowDiagram.gif)

---

# Main Parts of Redux Toolkit

---

# 1. Store

Store is the central storage of your app.

All global data is stored here.

Example:

```js
{
  theme: "light",
  cart: [],
  user: {}
}
```

---

# 2. Slice

Slice is the most important part of Redux Toolkit.

A slice contains:

- state
- reducers
- actions

all inside one file.

Example:

```js
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",

  initialState: {
    theme: "light",
  },

  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
```

---

# 3. Provider

Provider connects React app with Redux Store.

Example:

```jsx
<Provider store={store}>
  <App />
</Provider>
```

Without Provider React cannot access Redux state.

---

# 4. useDispatch()

Used to send action.

Example:

```js
const dispatch = useDispatch();
```

Button click:

```js
dispatch(changeTheme());
```

---

# 5. useSelector()

Used to read data from Redux Store.

Example:

```js
const theme = useSelector((state) => state.theme.theme);
```

---

# Full Theme Change Flow Example 🌗

Let’s understand using Light / Dark Theme.

---

## Initial State

Store has:

```js
theme = "light";
```

UI shows:

```text
Theme: Light
```

---

## User Clicks Button

```jsx
<button onClick={handleThemeChange}>Change Theme</button>
```

---

## Event Handler Runs

```js
const handleThemeChange = () => {
  dispatch(changeTheme());
};
```

---

## Action Dispatch

Redux receives:

```js
changeTheme();
```

---

## Reducer Runs

Reducer checks:

```text
Which action came?
```

It finds:

```text
changeTheme
```

Then updates state.

---

## State Changes

Before:

```js
theme = "light";
```

After:

```js
theme = "dark";
```

---

## Store Updates

Redux store now stores:

```js
theme = "dark";
```

---

## useSelector Reads New State

React reads updated value from store.

---

## UI Re-renders Automatically

Screen updates:

```text
Theme: Dark
```

No manual DOM update needed.

React updates automatically.

---

# Folder Structure 📁

```bash
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── theme/
│       └── themeSlice.js
│
├── components/
│
├── App.jsx
└── main.jsx
```

---

# Data Flow in One Line

```text
Click → Dispatch → Reducer → Store Update → UI Update
```

---

# Why Redux Toolkit is Useful?

✅ Less code

✅ Easy to learn

✅ Clean structure

✅ Better performance

✅ Easy debugging

✅ Centralized state

---

# Remember This 💡

## Store

Stores all data

## Slice

Contains state + reducer + actions

## Dispatch

Sends action

## Reducer

Updates state

## useSelector

Reads state

## UI

Shows updated data

---

# Final Summary

Redux Toolkit is a modern Redux library.

It helps manage app state easily.

Flow:

```text
User Click
   ↓
dispatch()
   ↓
Slice Reducer
   ↓
Store Updated
   ↓
UI Re-render
```

This is called:

# State Management

---

Happy Coding 🚀
