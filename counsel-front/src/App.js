import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <>
      <Route component={MainPage} path="/" exact />
    </>
  );
};

export default App;