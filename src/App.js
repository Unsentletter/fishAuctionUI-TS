import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteProps,
  Switch
} from 'react-router-dom';

import { Header } from './Components/Header'
import { SalePage } from './Screens/SalePage';
import { Login } from './Screens/LoginPage';
import { NewUser } from './Screens/NewUserPage';
import { ItemPage } from './Screens/ItemPage';
import { UserProfile } from './Screens/UserProfilePage';
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
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={SalePage}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/create_user' component={NewUser}/>
            <Route exact path='/item_page' component={ItemPage}/>
            {/*<Route path='/upload_image' component={ImageUploadInput}/>*/}
            {/*HACK - needs to be a PrivateRoute*/}
            <Route exact path='/user_profile' component={UserProfile}/>
            {/*<Redirect exact path='/logout' to='/login' innerRef={logout()}/>*/}
          </Switch>
        </Router>
      </div>
    )
  };
}

export default App;