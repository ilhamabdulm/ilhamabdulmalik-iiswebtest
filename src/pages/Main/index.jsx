import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";

import Table from "../../components/elements/Table";
import HorizontalBar from "../../components/elements/HorizontalBar";
import VerticalBar from "../../components/elements/VerticalBar";
import Checkbox from "../../components/elements/Checkbox";

import {
  selectRow,
  selectAll,
  clearSelect,
  deleteSelectedTable,
} from "./actions";
import Notification from "../../components/fragments/Notification";

export default function Main() {
  const {
    horizontalData,
    horizontalColumn,
    verticalData,
    tableData,
  } = useSelector((s) => s.main);
  const dispatch = useDispatch();

  const tableColumn = [
    {
      value: (
        <Checkbox
          inputProps={{
            checked:
              tableData.findIndex((el) => !el.selected) >= 0 ? false : true,
            onChange: () => dispatch(selectAll()),
          }}
        />
      ),
    },
    { value: "Name" },
    { value: "Category" },
    { value: "Availability" },
    { value: "Arrival" },
  ];

  return (
    <main className={styles.root}>
      <header>
        <h1>Chart and Table Visualization</h1>
      </header>
      <section className={styles["chart-container"]}>
        <section className={styles["chart-box"]}>
          <header>
            <h3>Chart 1</h3>
          </header>
          <div>
            <HorizontalBar column={horizontalColumn} data={horizontalData} />
          </div>
        </section>
        <section className={styles["chart-box"]}>
          <header>
            <h3>Chart 2</h3>
          </header>
          <div>
            <VerticalBar data={verticalData} />
          </div>
        </section>
      </section>
      <section className={styles["table-container"]}>
        <Table
          column={tableColumn}
          data={tableData}
          rowAction={(row) => dispatch(selectRow(row))}
        />
      </section>
      <Notification
        clearSelect={() => dispatch(clearSelect())}
        deleteTable={() => dispatch(deleteSelectedTable())}
        open={tableData.findIndex((el) => el.selected) >= 0 ? true : false}
      />
    </main>
  );
}
