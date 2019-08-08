import axios from "axios";

import { AUTH_USER } from "./types";

export const signup = (
  { email, password, username },
  callback
) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:5000/createUser",
      {
        email,
        password,
        username
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    dispatch({ type: AUTH_USER, payload: response.data });
    callback();
  } catch (e) {
    console.log("CREATE USER ERROR", e);
  }

  // .then(res => {
  //   localStorage.setItem("token", res.data);
  //   console.log("Token", res.data);
  // });
};
