import { combineReducers } from "redux";
import authReducer from "./authReducer";
import runReducer from "./runReducer";

export default combineReducers({
  auth: authReducer,
  run: runReducer
});
