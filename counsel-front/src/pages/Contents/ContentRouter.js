import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import IEWarning from '../../components/common/IEWarning';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import MainPage from './MainPage';
import Diagnose from './Diagnose';

const ContentRouter = () => {
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
            <Header />
            <Switch>
                <Route component={MainPage} path="/mainpage" exact />
                <Route component={Diagnose} path="/mainpage/diagnose"/>
            </Switch>
            <Footer />
        </>
    );
};

export default ContentRouter;