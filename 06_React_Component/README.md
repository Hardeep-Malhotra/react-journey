# 🚀 React Components Project

## 📖 What is a Component in React?

A **component** in React is a reusable piece of UI (User Interface).  
It helps you divide your website into small, independent, and reusable parts.

👉 Example:

- Navbar → Navigation bar
- Card → Content display block
- Footer → Bottom section of website

Instead of writing all code in one file, we create components and reuse them.

📌 Simple Understanding:

> Component = Function that returns UI (HTML + CSS)

---

## ⚛️ Types of Components

### 1. Functional Component ✅ (Used in this project)

```jsx
function Navbar() {
  return <h1>Hello</h1>;
}
```

## 2. Class Component (Old method)

```js
class Navbar extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

## 📌 Features of Components

🔹 Reusable
🔹 Easy to manage
🔹 Clean code structure
🔹 Independent logic

## 📌 Components in This Project

**🔹 Navbar Component**

Used for navigation links like Home, About, Services, Contact.

**🔹 Card Component**

Displays image, title, description, and button.

**🔹 Footer Component**

Shows website info, links, and social section at bottom.
