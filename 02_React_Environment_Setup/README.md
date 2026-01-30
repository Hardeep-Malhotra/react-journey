
# ⚛️ React Environment Setup



To run any React application, we need to first set up a **ReactJS Development Environment**.  
This document provides a **step-by-step guide** to installing and configuring a working React development environment.

---

## 📋 Pre-requisite

To begin, **Node.js must be installed** on your system.  
Once Node.js is set up, the next step is to configure a React boilerplate.

### Node.js Installation Guides
- Installation of Node.js on **Windows**
- Installation of Node.js on **Linux**
- Installation of Node.js on **macOS**

---

## 🚀 Method 1: Using Vite Build Tool (Recommended)

### Step 1
Navigate to the folder where you want to create the project and open it in the terminal.

### Step 2
Run the following command:

```bash
npm create vite@latest <Application_name>
Example:

npm create vite@latest first-step-vite
Step 3
Select:

Framework: React

Variant: JavaScript

Step 4
Navigate to the newly created project folder:

cd <Application_name>
You will now see the basic project structure.

Step 5
Install all required dependencies:

npm install
OR

npm i
After successful installation, a folder named node_modules will be created, which contains all required dependencies.

Step 6
Run the application:

npm run dev
The React application will now run successfully using Vite.

⚠️ Method 2: Using Create React App (Deprecated)
Note: create-react-app is deprecated and no longer recommended for new projects.
Use Vite instead.

Step 1
Navigate to the folder where you want to create the project and open it in the terminal.

Step 2
Run the following command:

npx create-react-app <Application_Name>
Step 3
Navigate to the project folder:

cd <Application_Name>
Step 4
A default React application will be created with the following dependencies:

"dependencies": {
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "web-vitals": "^2.1.4"
}
Step 5
Run the application:

npm start
Step 6
The application will open in the browser.

You can modify the application according to your preferences.

⚙️ Method 3: Using Webpack and Babel
Setting up a React environment using Webpack and Babel is a lengthy process and requires manual configuration.

Step 1
Initialize the project:

npm init -y
Step 2
Install React:

npm i react react-dom
Step 3
Install required development dependencies:

npm i webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react \
babel-loader html-webpack-plugin webpack-dev-server --save-dev
Note:
This tutorial only covers package installation.
For configuration details, refer to the Introduction to Babel article.

📊 Summary
Method	Use Case	Recommended
Vite	Modern apps with fast builds	✅ Yes
Create React App	Legacy projects only	❌ No
Webpack + Babel	Full control & custom setup	⚠️ Advanced
🖥️ Local Environment Setup – Windows
This guide can be followed to set up a React development environment on Windows systems.

---
👤 Author
Hardeep Singh
💻 Software Engineer | MERN Stack Developer | Backend Devloper

