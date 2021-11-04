import React from 'react';
import LineBanner from '../components/mainpage/LineBanner';
import NoticeBoard from '../components/mainpage/NoticeBoard';
import Process from '../components/mainpage/Process';
import ReviewBanner from '../components/mainpage/ReviewBanner';
import RollingBanner from '../components/mainpage/RollingBanner';
import Videos from '../components/mainpage/Videos';
import Map from '../components/mainpage/Map';
import Sidebar from '../components/mainpage/Sidebar';

const MainPage = () => {
    return (
        <main>
            <Sidebar />
            <RollingBanner />
            <LineBanner />
            <Videos />
            <Process />
            <NoticeBoard />
            <ReviewBanner />
            <Map />
        </main>
    );
};

export default MainPage;