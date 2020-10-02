import { SELECT_ALL, SELECT_ROW } from "./constants";

export function selectRow(row) {
  return {
    type: SELECT_ROW,
    payload: {
      row,
    },
  };
}

export function selectAll(row) {
  return {
    type: SELECT_ALL,
  };
}
