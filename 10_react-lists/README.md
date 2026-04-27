# 📘 React Lists



React Lists make it easy to render **multiple elements dynamically** from arrays or objects.  
Almost **85% of React applications** display collections such as 👤 users, 🛒 products, or ✅ tasks, making this a **core React concept** 🚀

---

## 📌 What are React Lists? 🤔

React Lists are used to:
- 📦 Store data in arrays or objects  
- 🔁 Iterate over data using the `map()` function  
- 🧩 Return JSX elements dynamically  

This approach keeps the code **clean, reusable, and efficient**.

---

## 📌 Rendering Lists using `map()` 🔁

In React, lists are rendered using JavaScript’s **`map()` function**, which loops through an array and returns JSX.

### ✨ Syntax:
```js
array.map((item, index) => {
  return JSX;
});
📌 Example: Simple List 🍎🍌🍒
🧩 Code:
function App() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h1>My Fruit List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
🖥️ Output:
🍎 Apple

🍌 Banana

🍒 Cherry

📝 Explanation:
items is an array of values

map() loops through each element

Each item is rendered inside an <li> tag

The key prop uniquely identifies each list item

📌 Why is the key Prop Important? 🔑
The key prop helps React identify which items have changed, been added, or removed.

🔍 Benefits of key:
🧠 Improves React’s reconciliation process

⚡ Enhances performance by updating only changed elements

🔄 Prevents unnecessary re-rendering

✅ Best Practice:
<li key={user.id}>{user.name}</li>
⚠️ Note:
Always use a unique identifier (id) when available

Avoid using array indexes as keys for dynamic lists

📌 List with Objects 👥
Lists can also be created using objects containing multiple properties.

🧩 Code:
const users = [
  { id: 1, name: 'Geeks', age: 30 },
  { id: 2, name: 'for', age: 25 },
  { id: 3, name: 'Geeks', age: 20 },
];

const App = () => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} is {user.age} years old.
        </li>
      ))}
    </ul>
  );
};

export default App;
🖥️ Output:
Geeks is 30 years old

for is 25 years old

Geeks is 20 years old

📌 Conditional Rendering in Lists 🔀
Sometimes, list items need to be rendered based on a condition.

🧩 Code:
const App = () => {
  const users = [
    { id: 1, name: 'geeks', age: 30 },
    { id: 2, name: 'for', age: 25 },
    { id: 3, name: 'geeks', age: 35 },
  ];

  return (
    <ul>
      {users.map((user) =>
        user.age > 30 ? (
          <li key={user.id}>{user.name} is over 30 years old</li>
        ) : (
          <li key={user.id}>{user.name} is under 30 years old</li>
        )
      )}
    </ul>
  );
};

export default App;
🖥️ Output:
geeks is under 30 years old

for is under 30 years old

geeks is over 30 years old

📌 List with Click Event 🖱️
React lists can include event handlers such as onClick.

🧩 Code:
const App = () => {
  const COMPANY = ["GEEKS", "FOR", "GEEKS"];

  const handleClick = (company) => {
    alert(`You clicked on ${company}`);
  };

  return (
    <ul>
      {COMPANY.map((company, index) => (
        <button key={index} onClick={() => handleClick(company)}>
          {company}
        </button>
      ))}
    </ul>
  );
};

export default App;
🖥️ Output:
Buttons: GEEKS | FOR | GEEKS

Clicking a button shows an alert 🚨

📌 Common Mistakes ❌
❌ Forgetting to add the key prop

❌ Calling functions directly in onClick

❌ Using index as key for dynamic lists

❌ Using loops instead of map()

📌 Summary 🧠
✅ React Lists are used to render dynamic collections
✅ map() is the core method for list rendering
✅ key prop improves performance and correctness
✅ Lists can include conditions and click events
✅ Essential topic for real-world projects and interviews 🚀

🎯 Practice Tasks
➕ Add new items to the list

🔄 Replace alert with console.log

🔢 Display index along with item names

📝 Build a small Todo List

👤 Author
Hardeep Singh
💻 Software Engineer | MERN Stack Developer | Backend Devloper