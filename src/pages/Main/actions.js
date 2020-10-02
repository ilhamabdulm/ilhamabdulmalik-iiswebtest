import {
  CLEAR_SELECT,
  DELETE_TABLE,
  SELECT_ALL,
  SELECT_ROW,
} from "./constants";

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

export function clearSelect() {
  return {
    type: CLEAR_SELECT,
  };
}

export function deleteSelectedTable() {
  return {
    type: DELETE_TABLE,
  };
}
