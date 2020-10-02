import React from "react";
import styles from "./styles.module.css";

export default function IconButton({ text, icon, color, handleClick }) {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <img alt={text} src={icon} />
      {text}
    </button>
  );
}
