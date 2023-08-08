import React, { FunctionComponent } from 'react';

import { Login, Registration, MyProfile, ChatPage } from '../pages';

export enum RoutesNames {
  REGISTRATION = 'REGISTRATION',
  LOGIN = 'LOGIN',
  CHAT_PAGE = 'CHAT_PAGE',
  MY_PROFILE = 'MY_PROFILE'
}

export enum SubRoutesNames {
  USERS = 'USERS',
  MANAGEMENT = 'MANAGEMENT',
}

export enum RoutesPaths {
  CHAT_PAGE = '/chat',
  LANDING = '/',
  MY_PROFILE = '/my_profile',
  REGISTRATION = '/registration',
  LOGIN = '/login',
}

export interface RouteConfig {
  isSubRoute: false;
  id: string;
  title: string;
  url: RoutesPaths;
  component: FunctionComponent;
  icon?: JSX.Element;
}

export interface SubRouteConfig {
  isSubRoute: true;
  name: SubRoutesNames;
  title: string;
  routes: Array<RouteConfig>;
  icon?: JSX.Element;
}

const buildRoute = (
  id: string,
  title: string,
  url: RoutesPaths,
  component: FunctionComponent,
  icon?: JSX.Element
): RouteConfig => ({
  isSubRoute: false,
  id,
  title,
  url,
  component,
  icon,
});

export const ROUTES: { [key in RoutesNames]: RouteConfig } = {
  [RoutesNames.LOGIN]: buildRoute(
    RoutesNames.LOGIN,
    'Login',
    RoutesPaths[RoutesNames.LOGIN],
    Login
  ),
  [RoutesNames.REGISTRATION]: buildRoute(
    RoutesNames.REGISTRATION,
    'Registration',
    RoutesPaths[RoutesNames.REGISTRATION],
    Registration
  ),
  [RoutesNames.MY_PROFILE]: buildRoute(
    RoutesNames.MY_PROFILE,
    'MyProfile',
    RoutesPaths[RoutesNames.MY_PROFILE],
    MyProfile
  ),
  [RoutesNames.CHAT_PAGE]: buildRoute(
    RoutesNames.CHAT_PAGE,
    'ChatPage',
    RoutesPaths[RoutesNames.CHAT_PAGE],
    ChatPage
  )
};

export const clientRoutes: Array<RouteConfig> = [
  ROUTES[RoutesNames.LOGIN],
  ROUTES[RoutesNames.REGISTRATION],
  ROUTES[RoutesNames.MY_PROFILE],
  ROUTES[RoutesNames.CHAT_PAGE]
];

export const publicPaths = [
  '/',
  '/chat',
  '/registration',
  '/login'
]
