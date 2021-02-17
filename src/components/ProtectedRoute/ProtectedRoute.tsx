import { authenticationAtom } from 'atoms';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const ProtectedRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useRecoilValue(authenticationAtom);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
