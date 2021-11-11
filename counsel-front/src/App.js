import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RedirectToMain from './pages/Contents/RedirectToMain';
import ContentRouter from './pages/Contents/ContentRouter';
import PrivacyPolicy from './pages/Popups/PrivacyPolicy';

const App = () => {
  return (
    <Switch>
      <Route component={RedirectToMain} path="/" exact/>
      <Route component={ContentRouter} path="/mainpage"/>

      <Route component={PrivacyPolicy} path="/popups/policy" exact />
      <Route render={({location}) => (
        <div>
          <h2>Page 404 : 404 페이지 입니다.</h2>
          <p>{location.pathname}</p>
        </div>
      )} />
    </Switch>
  );
};

export default App;