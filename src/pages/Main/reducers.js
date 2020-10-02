import { SELECT_ALL, SELECT_ROW } from "./constants";
import { changeSelected, selectAll } from "./utils";

const initialState = {
  horizontalData: [
    {
      text: "May",
      percentage: 68,
    },
    {
      text: "Apr",
      percentage: 40,
    },
    {
      text: "Mar",
      percentage: 80,
    },
    {
      text: "Feb",
      percentage: 50,
    },
    {
      text: "Jan",
      percentage: 70,
    },
  ],
  horizontalColumn: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
  ],
  verticalData: [
    {
      type: 1,
      percentage: 70,
    },
    {
      type: 1,
      percentage: 70,
    },
    {
      type: 1,
      percentage: 60,
    },
    {
      type: 1,
      percentage: 65,
    },
    {
      type: 1,
      percentage: 87,
    },
    {
      type: 1,
      percentage: 70,
    },
    {
      type: 2,
      percentage: 100,
    },
    {
      type: 1,
      percentage: 93,
    },
    {
      type: 1,
      percentage: 70,
    },
    {
      type: 1,
      percentage: 65,
    },
    {
      type: 1,
      percentage: 65,
    },
    {
      type: 2,
      percentage: 95,
    },
    {
      type: 1,
      percentage: 65,
    },
    {
      type: 1,
      percentage: 95,
    },
    {
      type: 1,
      percentage: 95,
    },
    {
      type: 1,
      percentage: 65,
    },
  ],
  tableData: [
    {
      name: "Table 01",
      category: "Category 01",
      availability: "Avalaible",
      arrival: "Arrived",
      selected: false,
    },
    {
      name: "Table 02",
      category: "Category 01",
      availability: "FULL",
      arrival: "Hasn't Arrived",
      selected: false,
    },
    {
      name: "Table 03",
      category: "Category 01",
      availability: "Avalaible",
      arrival: "Arrived",
      selected: false,
    },
    {
      name: "Table 04",
      category: "Category 01",
      availability: "FULL",
      arrival: "Arrived",
      selected: false,
    },
  ],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SELECT_ROW:
      return {
        ...state,
        tableData: changeSelected(state.tableData, payload.row),
      };
    case SELECT_ALL:
      return {
        ...state,
        tableData: selectAll(state.tableData),
      };
    default:
      return state;
  }
}
