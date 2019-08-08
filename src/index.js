import "materialize-css/sass/materialize.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteProps,
  Switch
} from "react-router-dom";
import reduxThunk from "redux-thunk";

import App from "./App";
import reducers from "./Reducers";

import { SalePage } from "./Screens/SalePage";
import Login from "./Screens/LoginPage";
import NewUser from "./Screens/NewUserPage";
import { ItemPage } from "./Screens/ItemPage";
import UserProfile from "./Screens/UserProfilePage";
import { AddFish } from "./Screens/AddFish";
import { FishProfile } from "./Screens/FishProfile";
// import { ImageUploadInput } from './Components/ImageUploadInput'

function isAuthenticated() {
  console.log("AUTH", localStorage);
  return !!localStorage.token;
}

// function logout() {
//   console.log("LOGOUT", localStorage);
//   return localStorage.removeItem('token');
// }

const PrivateRoute = props => {
  const { Component, ...rest } = props;
  console.log("isAuthed", isAuthenticated());
  return (
    <Route
      {...rest}
      render={routeProps =>
        isAuthenticated() ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
};

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") }
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={AddFish} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={NewUser} />
        <Route exact path="/item_page" component={ItemPage} />
        {/*<Route path='/upload_image' component={ImageUploadInput}/>*/}
        {/*HACK - needs to be a PrivateRoute*/}
        <Route exact path="/user_profile" component={UserProfile} />
        {/*<Redirect exact path='/logout' to='/login' innerRef={logout()}/>*/}
        <Route exact path="/fish-profile" component={FishProfile} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
