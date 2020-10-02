import React from "react";
import styles from "./styles.module.css";

export default function HorizontalBar({ data, column = [] }) {
  return (
    <article className={styles["horizontal-chart"]}>
      {data.map((el) => (
        <Bar text={el.text} percentage={el.percentage} />
      ))}
      <footer>
        <p></p>
        <div>
          {column.map((el) => (
            <span>{el}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}

const Bar = (props) => {
  const { text, percentage } = props;

  return (
    <div className={styles.bar}>
      <p>{text}</p>
      <div className={styles.overlay}>
        <div className={styles.fill} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};
