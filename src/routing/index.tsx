import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteConfig, SubRouteConfig } from '../constants/navigation';
import {
  clientRoutes
} from '../constants/navigation';
import PrivateRoute from '../components/PrivateRoute';

type ValueOrArray<T> = T | ValueOrArray<T>[];

const mapPrivateRoute = (
  item: RouteConfig | SubRouteConfig
): ValueOrArray<JSX.Element> => {
  if (item.isSubRoute) {
    return item.routes.map(mapPrivateRoute);
  }

  return (
    <PrivateRoute
      exact
      path={item.url}
      key={item.id}
      component={item.component}
    />
  );
};

export const allRoutes = [
  ...clientRoutes
].map(mapPrivateRoute);

const AppRouter = (): JSX.Element => (
  <Switch>
    {[ ...allRoutes ]}
  </Switch>
);

export default AppRouter;
