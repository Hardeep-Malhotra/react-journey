# 🚀 React useEffect Notes & Examples

## 📌 What is useEffect?

`useEffect` is a React Hook used to perform side effects in functional components.

### Side Effects Examples:

- API Fetching
- Event Listeners
- Timers
- LocalStorage
- DOM Manipulation
- External Libraries
- Chat Connections

---

# 🧠 Basic Syntax

```jsx
useEffect(() => {}, []);
```

---

# 🎯 Dependency Array Rules

## 1️⃣ No Dependency Array

```jsx
useEffect(() => {
  console.log("Runs every render");
});
```

✅ Runs after every render.

---

## 2️⃣ Empty Dependency Array

```jsx
useEffect(() => {
  console.log("Runs once");
}, []);
```

✅ Runs only on first render.

---

## 3️⃣ Dependency Present

```jsx
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
```

✅ Runs whenever `count` changes.

---

# 🔥 Example 1 — Chat Server Connection

## 📌 Concept

Synchronizing component with an external chat server.

## Code

```jsx
import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);

    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <input value={serverUrl} onChange={(e) => setServerUrl(e.target.value)} />

      <h1>Welcome to {roomId}</h1>
    </>
  );
}
```

---

## 🧠 Flow

```text
Component Mount
↓
connect()
↓
roomId changes
↓
disconnect old room
↓
connect new room
↓
Component Unmount
↓
disconnect()
```

---

## 📌 Important Learning

✅ External System

✅ Cleanup Function

✅ Dependency Array

✅ Synchronization

---

# 🔥 Example 2 — Mouse Pointer Tracker

## 📌 Concept

Listening to browser events using `window.addEventListener()`.

## Code

```jsx
import { useState, useEffect } from "react";

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "pink",
        borderRadius: "50%",
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: 40,
        height: 40,
      }}
    />
  );
}
```

---

## 🧠 Flow

```text
Component Render
↓
useEffect runs
↓
Event Listener Added
↓
Mouse Moves
↓
handleMove()
↓
setPosition()
↓
Re-render
↓
Circle Moves
```

---

## 📌 Important Learning

✅ Browser Events

✅ Event Listeners

✅ Cleanup Function

✅ State Updates

✅ Re-rendering

---

# 🔥 Example 3 — Modal Dialog

## 📌 Concept

Using `useRef` and `useEffect` to control browser dialog API.

## Code

### App.jsx

```jsx
import { useState } from "react";
import ModalDialog from "./ModalDialog.js";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Open dialog</button>

      <ModalDialog isOpen={show}>
        Hello there!
        <button onClick={() => setShow(false)}>Close</button>
      </ModalDialog>
    </>
  );
}
```

---

### ModalDialog.jsx

```jsx
import { useEffect, useRef } from "react";

export default function ModalDialog({ isOpen, children }) {
  const ref = useRef();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const dialog = ref.current;

    dialog.showModal();

    return () => {
      dialog.close();
    };
  }, [isOpen]);

  return <dialog ref={ref}>{children}</dialog>;
}
```

---

## 🧠 Flow

```text
Button Click
↓
show = true
↓
useEffect runs
↓
dialog.showModal()
↓
Modal Opens
↓
Cleanup Runs
↓
dialog.close()
```

---

## 📌 Important Learning

✅ useRef

✅ DOM Access

✅ Browser APIs

✅ Modal Synchronization

✅ Cleanup Function

---

# 🎯 Golden Rules of useEffect

## ✅ useEffect Use Cases

- API Fetching
- Timers
- Event Listeners
- External Libraries
- DOM Manipulation
- WebSockets
- Browser APIs

---

## ❌ Avoid useEffect For

- Simple Calculations
- Derived State
- Pure Rendering Logic

---

# 🔥 Cleanup Rule

Always mirror setup with cleanup.

```text
connect → disconnect
addEventListener → removeEventListener
startTimer → clearTimer
subscribe → unsubscribe
```

---

# 🚀 Final Mental Model

```text
Render UI
↓
useEffect Runs
↓
External Work Happens
↓
Cleanup Before Re-run/Unmount
```

---

# 🎯 One-Line Summary

> useEffect synchronizes React components with external systems after rendering.
