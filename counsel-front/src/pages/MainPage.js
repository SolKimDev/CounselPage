import React from 'react';
import Header from '../components/common/Header';
import LineBanner from '../components/mainpage/LineBanner';
import Process from '../components/mainpage/Process';
import RollingBanner from '../components/mainpage/RollingBanner';
import Videos from '../components/mainpage/Videos';

const MainPage = () => {
    return (
        <div>
            <Header />
            <RollingBanner />
            <LineBanner />
            <Videos />
            <Process />
        </div>
    );
};

export default MainPage;