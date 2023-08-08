import React, { FunctionComponent } from 'react';
import { RouteProps } from 'react-router-dom';
import { Route as ReactRouter } from 'react-router';

export type ProtectedRouteProps = {
  component: FunctionComponent
  path: string,
  key: string
} & RouteProps;

const PrivateRoute = ({ component, path, key }: ProtectedRouteProps): any => {

  return (
    <ReactRouter
      exact
      path={path}
      key={key}
      component={component}
    />
  );
};

export default PrivateRoute;
