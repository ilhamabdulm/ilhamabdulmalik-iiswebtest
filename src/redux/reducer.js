import { combineReducers } from "redux";
import mainReducer from "../pages/Main/reducers";

export default combineReducers({
  main: mainReducer,
});
