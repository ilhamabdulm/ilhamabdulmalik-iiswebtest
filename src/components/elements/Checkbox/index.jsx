import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

export default function Checkbox(props) {
  const { className, inputProps } = props;
  const classes = [styles.group, className].filter(Boolean).join(" ");

  return (
    <div className={classes} onClick={inputProps.onChange}>
      <input className={styles.root} {...inputProps} type="checkbox" />
      <span className={styles.check} />
    </div>
  );
}

Checkbox.defaultProps = {
  className: "",
  input: {},
  inputProps: {},
};

Checkbox.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
};
