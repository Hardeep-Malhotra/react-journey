# Redux Beginner Guide 🚀

## What is Redux?

Redux is a state management library for JavaScript applications.

It helps us manage and store application data in one central place.

You can think of Redux like a **global storage box** for your app.

---

# Why Redux?

In React, many components need the same data.

Example:

- User Data
- Cart Items
- Theme
- Notifications

Passing props again and again becomes difficult.

This is called:

## Prop Drilling

Redux solves this problem.

---

# Real Life Example 🏦

Think Redux like a Bank.

### Store → Bank Account

Where all money is stored.

### Action → Request

You request something.

Example:

Withdraw ₹500

### Reducer → Bank Employee

Checks request and updates account.

### New State → Updated Balance

---

# Redux Flow

```text
Component
   ↓
Dispatch Action
   ↓
Reducer
   ↓
Store Update
   ↓
UI Update
```

---

# Main Parts of Redux

# 1. Store

Store keeps all app data.

Example:

```js
{
  count: 0;
}
```

---

# 2. Action

Action tells what to do.

Example:

```js
{
  type: "INCREMENT";
}
```

Meaning:

Increase count by 1

---

# 3. Reducer

Reducer is a function.

It takes:

- current state
- action

And returns new state.

Example:

```js
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    default:
      return state;
  }
};
```

---

# 4. Dispatch

Dispatch sends action to reducer.

Example:

```js
dispatch({ type: "INCREMENT" });
```

---

# 5. useSelector

Used to get data from Redux store.

Example:

```js
const count = useSelector((state) => state.count);
```

---

# 6. useDispatch

Used to send action.

Example:

```js
const dispatch = useDispatch();
```

---

# Counter Example

Initial state:

```js
count = 0;
```

Click button:

```js
dispatch({ type: "INCREMENT" });
```

Reducer updates:

```js
count = count + 1;
```

New state:

```js
count = 1;
```

UI updates automatically.

---

# Redux Diagram

```text
Button Click
    │
    ▼
Dispatch Action
    │
    ▼
Reducer
    │
    ▼
Store Updated
    │
    ▼
UI Re-render
```

---

# Advantages of Redux ✅

- Centralized state
- No prop drilling
- Easy state management
- Predictable updates
- Easy debugging
- Great for large applications

---

# Remember This 💡

```text
Store → stores data

Action → tells what to do

Reducer → updates state

Dispatch → sends action
```

---

# One Line Definition

## Redux = Global State Management

OR

## Redux = One central place to store app data

---

# Final Summary

Redux helps us manage app data in a clean and structured way.

Instead of passing props everywhere...

we store data in Redux Store

and access it from any component easily.

---

Happy Coding 🚀
