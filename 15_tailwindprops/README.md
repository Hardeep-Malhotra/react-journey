<<<<<<< HEAD
# 🚀 React + Tailwind CSS Cards Project

This project is a beginner-friendly React application where I learned and implemented **Tailwind CSS setup** and **React props** by building reusable card components.

---

## 📌 What I Learned from This Project

Through this project, I clearly understood and practiced:

- ✅ How to setup **Tailwind CSS** in a React (Vite) project  
- ✅ How to clean default CSS and use **utility-first styling**  
- ✅ What are **props** in React and how they work  
- ✅ How to pass data from a **parent component to a child component**  
- ✅ How to create **reusable components** using props  
- ✅ Basic JSX rules like `className`, SVG attributes, etc.

---

## 🛠️ Tech Stack Used

- ⚛️ **React.js**
- 🎨 **Tailwind CSS**
- ⚡ **Vite**
- 💻 **JavaScript (ES6)**
- 🌐 **HTML5**

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   └── Card.jsx        # Reusable Card component
│
├── App.jsx             # Parent component (props passed from here)
├── main.jsx
├── index.css           # Tailwind directives only
🎴 Card Component Explanation
The Card component is a reusable UI component that accepts data using props.

Props Used
username → Card title / name

dsecription → Card description text

btnText → Button text (with default value)

Example Usage
<Card 
  username="Hardeep"
  dsecription="I am a programmer"
  btnText="Click Me"
/>
Same component reused with different data 👇

<Card 
  username="Harsh Dhiman"
  dsecription="I am a developer"
  btnText="Contact"
/>
🎨 Styling with Tailwind CSS
❌ No traditional CSS files were used for styling

✅ All UI styling is done using Tailwind utility classes

❌ Default Vite CSS was removed to avoid conflicts

✅ Tailwind directives used in index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;
🧠 Key Concepts Practiced
React Functional Components

Props Destructuring

Default Props

JSX syntax rules

Tailwind utility-first workflow

Component reusability

🚀 How to Run This Project Locally
1️⃣ Clone the repository
git clone https://github.com/Hardeep-Malhotra/react-journey.git
2️⃣ Go to project folder
cd your-repo-name
3️⃣ Install dependencies
npm install
4️⃣ Start the development server
npm run dev
🎯 Future Improvements
Add dynamic cards using array + map

Add hover animations and transitions

Convert cards into a grid layout

Use real data or API in future

🙌 Final Note
This project helped me build a strong foundation in React props and Tailwind CSS.
It is part of my learning journey towards becoming a professional frontend developer 🚀

⭐ Support
If you like this project, please give it a star ⭐ on GitHub!

👤 Author
Hardeep Singh
💻 Software Engineer | MERN Stack Developer | Backend Devloper
=======
REACR_JOURNEY
>>>>>>> ba6925d46378e1c6d3be155d328568923b038d68
