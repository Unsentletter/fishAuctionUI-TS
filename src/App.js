import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteProps,
  Switch
} from 'react-router-dom';

import { ItemList } from './Components/ItemList';
import { Login } from './Components/Login';
import { NewUser } from './Components/NewUser/index';
// import { UserProfile } from './Components/UserProfile/UserProfile';
// import { ImageUploadInput } from './Components/ImageUploadInput'

function isAuthenticated() {
  console.log("AUTH", localStorage);
  return !!localStorage.token;
}

// function logout() {
//   console.log("LOGOUT", localStorage);
//   return localStorage.removeItem('token');
// }

const PrivateRoute = (props) => {
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

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ItemList}/>
          <Route exact path='/login' component={Login}/>
          <Route
            exact path='/create_user' component={NewUser}/>
          {/*<Route path='/upload_image' component={ImageUploadInput}/>*/}
          {/*<PrivateRoute exact path='/user_profile' component={UserProfile}/>*/}
          {/*<Redirect exact path='/logout' to='/login' innerRef={logout()}/>*/}
        </Switch>
      </Router>
    )
  };
}

export default App;