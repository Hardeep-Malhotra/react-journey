# 🚀 MediaSearch.io — The Ultimate Unified Media Engine

**MediaSearch.io** is a premium, ultra-responsive, fully optimized full-stack web application built using the **MERN Stack** paradigm (client-focused with Redux architecture). It acts as a unified digital asset hub that aggregates real-time data from top-tier media APIs (**Pexels, Pixabay, GIPHY**) into a single, high-performance dashboard. Users can seamlessly query, filter, dynamic-render, and store their favorite digital assets into a highly secure local state vault.

---

## 🔗 Architecture & Deployment

- **Engineering Handle:** [@Hardeep-Malhotra](https://github.com/Hardeep-Malhotra)
- **Academic Context:** BCA Semester IV Project — Showcase of State Management & Fluid UI Integration.

---

## 🔥 Key Engineering Features

### ⚡ 1. Unified Real-Time API Aggregation

Instead of shuffling across multiple websites, MediaSearch.io cross-communicates with multiple production-grade REST APIs simultaneously. It handles asynchronous data fetching for:

- **High-Res Photos** (Pexels / Pixabay Integration)
- **Cinematic Short Videos** (Pexels Video API Integration)
- **Trending & Search-Specific GIFs** (GIPHY API Integration)

### 🛡️ 2. Advanced Redux Toolkit (RTK) State Vault

Implemented a robust local state management system via Redux Toolkit to act as a **Personal Digital Vault**.

- **Global State Sync:** Persistent item addition, real-time collection count tracking, and batch clearing actions.
- **Optimized Data Pipeline:** Component triggers dispatch actions (`addCollection`, `clearCollection`) ensuring unidirectional data flow and zero prop-drilling.

### 📱 3. Symmetrical Responsive Grid & Anti-Overflow Layout

Built from scratch with a **Mobile-First Approach** using Tailwind CSS utility classes:

- **Fluid Layout Breakpoints:** Implemented seamless screen adaptations utilizing `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`.
- **Structural Safety Layout:** Integrated advanced CSS reset mechanics like `min-w-0` and `box-border` across grid nodes. This absolutely eliminates horizontal scroll leaks and forces clean ellipsis text truncation (`truncate`) on smaller viewports.
- **Touch Targets Optimization:** Interactive components adapt dynamically (`active:scale-95`, `w-full sm:w-auto`) to ensure seamless usability on high-refresh-rate mobile screens.

### 🎨 4. Premium Dark-Aesthetic UI Experience

- **Visual Hierarchy:** Built on a deep void background (`#030405`) accented with micro-borders (`border-gray-900/50`), emerald neon touchpoints, and premium Lucide-React iconography.
- **Interactive Feedback:** Integrated `react-toastify` notifications anchored to `bottom-right` positions with dark-theme skins for instant success/error feedback on core CRUD actions.

---

## 🛠️ Tech Stack & Dependencies

### Frontend Core

- **React.js (Vite Core)** — High-speed build engine and component-driven architecture.
- **Redux Toolkit & React-Redux** — Centralized global state management.
- **React Router DOM** — Declarative routing for `HomePage` and `CollectionPage`.

### Styling & Interactivity

- **Tailwind CSS** — Modern utility-first layout control.
- **Lucide React** — High-fidelity modern line icons.
- **React Toastify** — Asynchronous actionable notification system.

---

## 📂 Project Structure Directory

```text
MediaSearch.io/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Global premium navigation with active routing states
│   │   ├── SearchBar.jsx      # High-performance search controller
│   │   ├── Tabs.jsx           # Filter node toggles (Photos, Videos, GIFs)
│   │   ├── ResultGrid.jsx     # Dynamic layout node injecting query cards
│   │   ├── ResultCard.jsx     # Interactive asset card with custom type rendering
│   │   └── CollectionCard.jsx # Saved vault items with isolated delete actions
│   ├── features/
│   │   └── collectionSlice.js # Global Redux slice managing the vault pipeline
│   ├── pages/
│   │   ├── HomePage.jsx       # Landing hero workspace & feature breakdowns
│   │   └── CollectionPage.jsx # Secure storage room with full reset controls
│   ├── App.jsx                # Main layout shell and route manager
│   └── main.jsx               # React DOM entry point wrapped in Redux Provider
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Local Development Setup Instructions

Follow these steps to run this production-ready client locally on your machine:

### 1. Clone the Repository

```bash
git clone [https://github.com/Hardeep-Malhotra/react-journey.git](https://github.com/Hardeep-Malhotra/react-journey.git)
cd react-journey/MediaSearch.io
```

### 2. Install Project Dependencies

```Bash
npm install
```

### 3. Setup Environment Variables (.env)

Create a .env file in the root directory (/MediaSearch.io/) and supply your secret API keys:

```Code snippet
VITE_PEXELS_API_KEY=your_actual_pexels_api_key_here
VITE_PIXABAY_API_KEY=your_actual_pixabay_api_key_here
VITE_GIPHY_API_KEY=your_actual_giphy_api_key_here
```

### 4. Boot Up Local Development Server

```Bash
npm run dev
Open http://localhost:5173 in your browser to inspect the application.
```

### 5. Compiling Production Builds (Strict Type/Validation Check)

To test if the application compiles cleanly without any dependency errors:

```Bash
npm run build
```

This compiles the raw asset pipeline into highly optimized, minified static files located in the /dist directory, completely verified via structural bundlers.

### 📝 Key Takeaways & Developer Insights

While engineering this application, emphasis was heavily placed on understanding underlying CSS Core Layout properties.

Mobile-First Breakpoints: Mastering this taught me how layouts scale gracefully across changing viewports, ensuring a consistent user experience from handheld devices to large monitors.

Container Overflow Resolution: Resolving complex flex/grid container overflows using min-w-0 provided deep insights into browser engine rendering and text wrapping mechanics.

AI-Assisted Efficiency: Utilizing AI-assisted component design accelerated UI development efficiency, while ensuring a deep understanding of each line of Tailwind utility code through rigorous debugging and build validation.

Crafted with 💻, ☕, and pure logic by Hardeep Singh (Aspiring SDE / Full-Stack Developer).
