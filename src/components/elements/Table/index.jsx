import React from "react";
import Checkbox from "../Checkbox";
import styles from "./styles.module.css";

export default function Table(props) {
  const { column, data, rowAction } = props;

  return (
    <table className={styles["table"]} cellSpacing="0">
      <thead>
        <tr>
          {column.map((el) => (
            <th>{el.value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData) => (
          <TableRow column={column} data={rowData} rowAction={rowAction} />
        ))}
      </tbody>
    </table>
  );
}

const TableRow = ({ column, data, rowAction }) => {
  return (
    <tr className={styles["table-row"]}>
      {column.map((el) => {
        const key =
          typeof el.value === "string" ? el.value.toLowerCase() : null;
        return key ? (
          <td>{data[key]}</td>
        ) : (
          <td>
            <Checkbox
              inputProps={{
                checked: data.selected,
                onChange: () => rowAction(data),
              }}
            />
          </td>
        );
      })}
    </tr>
  );
};
