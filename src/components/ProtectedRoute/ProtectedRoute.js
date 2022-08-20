import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  signedIn,
  openSignInPopup,
  ...props
}) => {
  if (!signedIn) {
    openSignInPopup();
  }

  return (
    <Route>
      {() => (signedIn ? <Component {...props} /> : <Redirect to='/' />)}
    </Route>
  );
};

export default ProtectedRoute;
