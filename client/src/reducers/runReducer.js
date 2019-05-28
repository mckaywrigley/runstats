import { ADD_RUN_SUCCESS, GET_USER_RUNS } from "../actions/types";

const initialState = {
  currentRun: {},
  runs: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_RUN_SUCCESS:
      return {
        ...state,
        currentRun: action.payload
      };
    case GET_USER_RUNS:
      return {
        ...state,
        runs: action.payload
      };
    default:
      return state;
  }
}
