import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

import { useAppDispatch } from './hooks';
import Routes from './routing';
import { currentUserRequest } from './redux/auth/actions';
import { publicPaths } from './constants/navigation';

import { Header } from './components';

import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const userToken = Cookies.get('userToken')

    if (!!userToken) dispatch(currentUserRequest())
  }, [])
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes/>
      {publicPaths.includes(pathname)}
    </div>
  );
}

export default App;
