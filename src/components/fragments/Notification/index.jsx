import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";

import IC_CLOSE from "../../../assets/ic_close.svg";
import IC_ASSIGN from "../../../assets/ic_assign.svg";
import IC_DELETE from "../../../assets/ic_delete.svg";

import IconButton from "../../elements/IconButton";

export default function Notification({ deleteTable, clearSelect, open }) {
  const { tableData } = useSelector((s) => s.main);

  return (
    <section
      className={styles.root}
      style={{ visibility: open ? "visible" : "hidden" }}
    >
      <img
        alt="close"
        src={IC_CLOSE}
        onClick={clearSelect}
        style={{ cursor: "pointer" }}
      />
      <p>{tableData.filter((el) => el.selected).length} Table Selected</p>
      <IconButton text="Assign Category" icon={IC_ASSIGN} color="#655CFB" />
      <IconButton
        text="Delete Table"
        icon={IC_DELETE}
        color="#EB5757"
        handleClick={deleteTable}
      />
    </section>
  );
}
