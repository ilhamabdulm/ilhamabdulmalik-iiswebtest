import React from "react";
import styles from "./styles.module.css";

export default function VerticalBar({ data }) {
  return (
    <article className={styles["vertical-chart"]}>
      <section>
        {data.map((el) => (
          <Bar percentage={el.percentage} type={el.type} />
        ))}
      </section>
      <footer className={styles.legend}>
        <div>
          <span
            className={styles.circle}
            style={{ backgroundColor: "#DAD7FE" }}
          />
          <p>Text 1</p>
        </div>
        <div>
          <span
            className={styles.circle}
            style={{ backgroundColor: "#4339F2" }}
          />
          <p>Text 2</p>
        </div>
      </footer>
    </article>
  );
}

const Bar = (props) => {
  const { percentage, type } = props;

  return (
    <div className={styles.bar}>
      <div
        className={styles.fill}
        style={{
          height: `${percentage}%`,
          backgroundColor: type === 1 ? "#DAD7FE" : "#4339F2",
        }}
      ></div>
    </div>
  );
};
