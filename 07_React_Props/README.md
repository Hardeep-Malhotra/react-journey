# ⚛️ React Props Guide

## 📖 What are Props in React?

**Props (short for Properties)** are used to pass data from one component to another in React.

👉 Props allow components to be **dynamic and reusable**.

📌 **Simple Understanding:**

> Props = Data passing system in React

---

## 🔁 Why Props are Important?

- 🔹 Make components reusable
- 🔹 Pass dynamic data
- 🔹 Improve code structure
- 🔹 Help in building scalable applications

---

## ⚙️ Basic Example of Props

### 🔹 Child Component

```jsx
function Card(props) {
  return <h1>Hello {props.name}</h1>;
}
```

### **🔹 Parent Component**

<Card name="Hardeep" />

#### **👉 Output:**

```jsx
Hello Hardeep
```

## **📦 Props in Real Example (Card Component)**

### **🔹 Card Component**

```js
function Card(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
    </div>
  );
}
```

### **🔹 Using Component**

```js
<Card img="profile.png" name="Hardeep Singh" desc="Software Engineer" />
```

## **🧠 Important Concepts**

## **🔹 1. Props are Read-Only**

You cannot modify props inside a component ❌

```js
props.name = "New Name"; // ❌ Error
```

## **🔹 2. Destructuring Props (Best Practice 🔥)**

```js
function Card({ name, img, desc }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
}
```

## **🔹 3. Default Props**

```js
function Card({ name = "Guest" }) {
  return <h1>{name}</h1>;
}
```

## **🔹 4. Passing Functions as Props**

```js
function Button({ handleClick }) {
  return <button onClick={handleClick}>Click</button>;
}
```

## **🔄 Props Flow (Important)**

**👉 Data flows in one direction:**

`Parent ➝ Child`

**This is called Unidirectional Data Flow**

### **Real Life Example**

Think of props like function arguments:

```js
function greet(name) {
  return "Hello " + name;
}
```

### **👉 Same in React:**

```js
<Card name="Hardeep" />
```

### **⚠️ Common Mistakes**

❌ Forgetting props

❌ Trying to change props

❌ Not using destructuring

❌ Passing wrong data type

### **🚀 Advanced Usage**

Passing arrays as props

Passing objects

Using props with map()

Dynamic UI rendering
