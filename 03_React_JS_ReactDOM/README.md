# ⚛️ React JS – ReactDOM

ReactDOM is a core React package that provides **DOM-specific methods** to interact with and manipulate the **Document Object Model (DOM)**, enabling efficient rendering and management of web page elements.

---

## 📌 What is ReactDOM?

ReactDOM is used for:

- 🖥️ **Rendering Components**: Displays React components in the DOM
- ⚙️ **DOM Manipulation**: Allows efficient DOM updates
- 🌐 **Server-Side Rendering**: Supports rendering on both client and server
- 🔗 **React & DOM Bridge**: Connects React with the browser’s DOM

---

## 🧩 How to Use ReactDOM?

To use ReactDOM in any React web application, we must first install the **react-dom** package.

---

### 📥 Installing ReactDOM

```bash
npm i react-dom
📦 Importing ReactDOM
After installing the package, import it into your application file:

import ReactDOM from 'react-dom'
📄 Dependency Entry (package.json)
After installation, react-dom will appear in the dependencies section of package.json:

"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1"
}
🔑 Important Methods of ReactDOM
1️⃣ render()
Used to render a single React component or multiple components wrapped inside a parent component or <div>.

It renders the React element into the specified DOM container.

2️⃣ findDOMNode()
Used to get the DOM node where a particular React component was rendered.

This method is less commonly used.

The same result can be achieved using refs.

Functional components cannot be used with this method.

3️⃣ unmountComponentAtNode()
Used to unmount or remove a React component from a specific DOM container.

4️⃣ hydrate()
Similar to render().

Used when implementing Server-Side Rendering (SSR).

Attaches event listeners to server-rendered markup.

5️⃣ createPortal()
Allows rendering a component into a DOM node that exists outside the parent component’s DOM hierarchy.

Commonly used for modals, tooltips, and overlays.

⚙️ Essential Functionalities of ReactDOM
ReactDOM.render() replaces the child of the given container if any.

It uses a highly efficient diffing algorithm to update only required parts of the DOM.

findDOMNode() works only on mounted components.

ReactDOM uses observables, enabling efficient DOM handling.

ReactDOM supports both client-side and server-side rendering.

🧠 Summary
ReactDOM acts as a bridge between React and the browser DOM

It efficiently renders and updates UI components

Provides methods for mounting, unmounting, and advanced DOM handling

Essential for building performant React web applications
---

👤 Author
Hardeep Singh
💻 Software Engineer | MERN Stack Developer | Backend Devloper
```
