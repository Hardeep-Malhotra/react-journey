# ⚛️ ReactJS Rendering Elements
 

React elements are the smallest building blocks of a React application. They are different from DOM elements and represent a description of what you want to see on the screen, such as a DOM node like a `<div>` or a user-defined component.

---

## 📌 What are React Elements?

- React elements are **plain JavaScript objects** describing the UI structure.
- Unlike browser DOM elements, React elements are **lightweight and immutable**.
- React uses these elements to build a **Virtual DOM** and efficiently update the real DOM.
- React elements tell React **what to render**, not **how to render** it.

---

## 🖥️ Rendering an Element in React

To render a React element in the browser, a **container or root DOM element** is required, usually a `<div>` with an `id` like `root` or `app`.

### Example: `index.html`

```html
<div id="root"></div>
🧩 Rendering a React Element Using a Component
App.js
import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to GeeksforGeeks!</h1>
    </div>
  );
}

export default App;
index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
🖥️ Output:
A React element is created and rendered on the screen.

🧠 Key Points
React is designed for building dynamic and interactive user interfaces.

Rendering elements allows React to display content in the browser.

Updating elements enables logic and interactivity in applications.

🔄 Updating an Element in React
React elements are immutable building blocks of the UI.

Their children and attributes cannot be changed after creation.

UI updates are done by re-rendering elements using new values.

React uses state and hooks to update the UI dynamically.

⏱️ Example: Updating Time with a Functional Component
This example updates the current time every second using useState and useEffect.

App.js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1>Welcome to GeeksforGeeks!</h1>
      <h2>{currentTime}</h2>
    </div>
  );
}

// Render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
🖥️ Output:
The time updates every second, while the heading remains static.

⚙️ How It Works?
State Management: useState manages the currentTime state.

Side Effects: useEffect sets up an interval and cleans it up on unmount.

Efficient Updates: Only the <h2> element re-renders, while <h1> remains unchanged.

⚡ React Render Efficiency
React’s performance comes from its Virtual DOM and diffing algorithm:

Updating the Virtual DOM with new element data.

Comparing the updated Virtual DOM with the previous version.

Applying only the required changes to the real DOM.

✅ Best Practices for Efficient Rendering
Use Functional Components for better performance.

Leverage Hooks like useState and useEffect.

Prevent unnecessary renders using React.memo.

Always use a unique key prop for lists.

Prefer stateful functional components over manual render calls.

👤 Author
Hardeep Singh
💻 Software Engineer | MERN Stack Developer