import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,

  openSignInPopup,
  ...props
}) => {
  if (!props.signedIn) {
    openSignInPopup();
  }

  return (
    <Route>
      {() => (props.signedIn ? <Component {...props} /> : <Redirect to='/' />)}
    </Route>
  );
};

export default ProtectedRoute;
