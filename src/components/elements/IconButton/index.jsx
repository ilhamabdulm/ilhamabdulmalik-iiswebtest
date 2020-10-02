import React from "react";
import styles from "./styles.module.css";

export default function IconButton({ text, icon, color }) {
  return (
    <button className={styles.button} style={{ backgroundColor: color }}>
      <img alt={text} src={icon} />
      {text}
    </button>
  );
}
