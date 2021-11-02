import React from 'react';
import Header from '../components/common/Header';
import LineBanner from '../components/mainpage/LineBanner';
import NoticeBoard from '../components/mainpage/NoticeBoard';
import Process from '../components/mainpage/Process';
import ReviewBanner from '../components/mainpage/ReviewBanner';
import RollingBanner from '../components/mainpage/RollingBanner';
import Videos from '../components/mainpage/Videos';
import Map from '../components/mainpage/Map';

const MainPage = () => {
    return (
        <div>
            <Header />
            <RollingBanner />
            <LineBanner />
            <Videos />
            <Process />
            <NoticeBoard />
            <ReviewBanner />
            <Map />
        </div>
    );
};

export default MainPage;