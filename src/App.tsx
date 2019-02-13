import * as React from 'react';
import { BrowserRouter, Route, Redirect, RouteProps } from 'react-router-dom';

import { NewUser } from './Components/NewUser';
import { UserProfile } from './Components/UserProfile';
import { Login } from './Components/Login';
import { ItemList } from './Components/ItemList';
// import { ImageUploadInput } from './Components/ImageUploadInput'

function isAuthenticated() {
  console.log("AUTH", localStorage);
  return !!localStorage.token;
}

// function logout() {
//   console.log("LOGOUT", localStorage);
//   return localStorage.removeItem('token');
// }

export interface IPrivateRouteProps extends RouteProps {
  component: any
}


const PrivateRoute = (props: IPrivateRouteProps) => {
  const { component: Component, ...rest } = props;
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
              pathname: "/items_for_sale",
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
};

class App extends React.Component {
  public render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/items_for_sale' component={ItemList}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/create_user' component={NewUser}/>
            {/*<Route path='/upload_image' component={ImageUploadInput}/>*/}
            <PrivateRoute path='/user_profile' component={UserProfile}/>
            {/*<Redirect path='/logout' to='/login' innerRef={logout()}/>*/}
          </div>
        </BrowserRouter>
      </div>
    )
  };
}

export default App;
