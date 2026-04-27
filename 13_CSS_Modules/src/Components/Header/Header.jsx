import React from "react";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div>
      <ul className={styles.ul}>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
      <ul className={styles.a}>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
