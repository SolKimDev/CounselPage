import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import IEWarning from './components/common/IEWarning';
import MainPage from './pages/MainPage';

const App = () => {
  const [isIE, setIsIE] = useState(false);

  const checkIE = () => {
    const agent = navigator.userAgent.toLowerCase();
    if (
      (navigator.appName === 'Netscape' &&
        navigator.userAgent.search('Trident') !== -1) ||
      agent.indexOf('msie') !== -1
    ) {
      setIsIE(true);
    }
  }

  useEffect(() => {
    checkIE();
  }, []);

  return (
    <>
      {isIE ? <IEWarning/> : ''}
      <Route component={MainPage} path="/" exact />
    </>
  );
};

export default App;