import { ADD_RUN_SUCCESS } from "../actions/types";

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
    default:
      return state;
  }
}
