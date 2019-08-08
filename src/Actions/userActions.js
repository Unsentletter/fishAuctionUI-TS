export const userActions = {
  signIn,
  logIn,
  logOut
};

function signIn() {
  return {
    type: "SIGN_IN"
  };
}

export function logIn(email, password) {
  axios
    .post("http://localhost:5000/login", {
      email,
      password
    })
    .then(res => {
      localStorage.setItem("token", res.data);
      console.log("LOGGED IN", res.data);
    });
}

function logOut() {
  return {
    type: "LOG_OUT"
  };
}
