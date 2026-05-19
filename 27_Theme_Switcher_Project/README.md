# 🌓 React Theme Switcher (Tailwind CSS v4)

A sleek and modern **Dark/Light Mode Switcher** built with **React**, **Context API**, and the latest **Tailwind CSS v4**. This project demonstrates how to manage global state and sync it with the browser's DOM for a seamless user experience.

---

## 🚀 Features

- **Dynamic Theme Switching:** Toggle between Dark and Light modes instantly.
- **Context API:** Efficient state management without prop drilling.
- **Tailwind CSS v4:** Leverages the latest CSS-based configuration for dark mode variants.
- **Persistent Logic:** Uses `useEffect` to sync the theme with the `<html>` element.
- **Fully Responsive:** Beautifully designed product card that adapts to all screen sizes.

---

## 🛠️ Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS v4
- **State Management:** React Context API
- **Icons/Images:** Lucide/Pexels

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/Hardeep-Malhotra.react-journey.git](https://github.com/Hardeep-Malhotra.react-journey.git)
cd your-repo-name
```

---

### 2. Install dependencies

```js
npm install
```

---

### 3. Tailwind v4 Setup (Important)

Ensure your src/index.css includes the dark mode variant for v4:

```CSS
@import "tailwindcss";

@variant dark (&:where(.dark, .dark *));
```

---

### 4. Run the development server

```Bash
npm run dev
```

---

### **💡 How It Works**

**Context Creation: We define a ThemeContext with themeMode, lightMode(), and darkMode().**

**Provider: The App.js wraps the application in ThemeProvider and passes the state.**

**The Switch: The ThemeBtn component triggers the functions from context.**

**DOM Sync: A useEffect in App.js monitors themeMode and adds/removes the .dark class from the <html> tag.**
