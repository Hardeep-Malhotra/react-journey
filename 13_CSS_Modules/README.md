# CSS Modules - Quick Notes

## What is CSS Module?

CSS Module is a way to write CSS in React where styles are locally scoped to a specific component.

It helps avoid style conflicts between different components.

---

## File Naming Rule

Correct:

```css
Header.module.css
```

Wrong:

```css
Header.modules.css
```

Use only `module` not `modules`.

---

## Example CSS

```css
.box {
  background-color: skyblue;
  padding: 20px;
  border-radius: 10px;
}
```

---

## Example JSX

```jsx
import styles from "./Header.module.css";

function Header() {
  return <div className={styles.box}>Hello World</div>;
}

export default Header;
```

---

## Important Rule

Use class selector:

Correct:

```css
.box {
}
```

Wrong:

```css
div {
}
ul {
}
a {
}
```

In CSS Modules, class selectors work best.

---

## Advantages of CSS Modules

- No style conflict
- Component-based styling
- Clean code
- Easy to manage
- Professional React styling method

---

## Short Summary

CSS Module = Local CSS

Normal CSS = Global CSS

CSS Modules make React projects cleaner and safer.

---
