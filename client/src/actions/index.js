import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./types";

const URL = "https://droom-buildweek-4-15-19.herokuapp.com";

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
