# 📝 React + Context API Todo Manager

A clean, efficient, and responsive Todo Application built with **React.js**, **Context API**, and **Tailwind CSS**. This project demonstrates state management without prop drilling and uses **LocalStorage** for data persistence.

---

## 🚀 Features

- **Full CRUD Functionality:** Create, Read, Update, and Delete todos seamlessly.
- **Context API Integration:** Centralized state management using React Context for a scalable architecture.
- **Persistent Storage:** Uses `localStorage` so your tasks remain even after a page refresh.
- **Dynamic Styling:** Real-time UI updates (strike-through and color shifts) when a task is marked as completed.
- **Modern UI:** Built with a dark-themed, mobile-responsive design using Tailwind CSS.

---

## 🛠️ Tech Stack

- **Framework:** React.js
- **Styling:** Tailwind CSS
- **State Management:** Context API (with Custom Hooks)
- **Data Persistence:** Browser LocalStorage

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── TodoForm.jsx      # Input component to add new tasks
│   └── TodoItem.jsx      # Individual task component (Edit/Delete/Toggle logic)
├── contexts/
│   ├── TodoContext.js    # Context definition and blueprint
│   └── index.js          # Centralized export for cleaner imports
└── App.js                # Core logic, state
```

---

### **management, and Provider setup**

### **⚙️ Installation & Setup**

_Clone the repository:_

```Bash
git clone <your-repository-url>
```

_Install dependencies:_

```Bash
npm install
```

3. **Configure Tailwind CSS:**
   (If not already set up in your environment)
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   Start the development server:

```Bash
npm start
```

---

## 💡 Key Technical Concepts Covered

1. **Custom Hooks:** Created `useTodo` to consume context easily throughout the app.
2. **State Immutability:** Managed complex array updates using `map()`, `filter()`, and the `spread operator` to maintain React's reactive cycle.
3. **Effect Hooks:** Utilized `useEffect` for synchronization between the application state and the Browser's LocalStorage.
4. **Conditional Rendering:** Applied dynamic Tailwind classes based on the `completed` and `isEditable` states.

---

## 🤝 Contributing

Feel free to fork this project and submit a Pull Request if you have ideas for new features (like categories, due dates, or search filters).

---

**Developed with ❤️ by Hardeep Singh**
