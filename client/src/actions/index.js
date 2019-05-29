import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER, ADD_RUN_SUCCESS, GET_USER_RUNS } from "./types";

// const URL = "https://mckay-runstats.herokuapp.com";
const URL = "http://localhost:4000";

// Auth --------------------------

// register user
export const registerUser = userData => dispatch => {
  axios
    .post(`${URL}/api/auth/register`, userData)
    .then(res => {
      // save token to local storage
      localStorage.setItem("jwtToken", res.data.token);
      // set to auth header
      setAuthToken(res.data.token);
      // decode token
      const decoded = jwt_decode(res.data.token);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => console.log(err.response));
};

// login user
export const loginUser = userData => dispatch => {
  axios
    .post(`${URL}/api/auth/login`, userData)
    .then(res => {
      console.log(res.data.token);
      // save token to local storage
      localStorage.setItem("jwtToken", res.data.token);
      // set to auth header
      setAuthToken(res.data.token);
      // decode token
      const decoded = jwt_decode(res.data.token);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => console.log(err.response));
};

// set user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// logout user
export const logoutUser = () => dispatch => {
  // remove token from local storage
  localStorage.removeItem("jwtToken");
  // remove auth header
  setAuthToken(false);
  // set current user to empty object
  dispatch(setCurrentUser({}));
};

// Runs --------------------------

// Add Run
export const addRun = run => dispatch => {
  axios
    .post(`${URL}/api/runs/`, run)
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_RUN_SUCCESS,
        payload: run
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// Get Runs
export const getUserRuns = userID => dispatch => {
  axios
    .get(`${URL}/api/runs/user/${userID}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_USER_RUNS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// Delete Run
export const deleteRun = runID => dispatch => {
  axios
    .delete(`${URL}/api/runs/${runID}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
