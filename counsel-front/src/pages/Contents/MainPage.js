import React from 'react';
import LineBanner from '../../components/mainpage/LineBanner';
import NoticeBoard from '../../components/mainpage/NoticeBoard';
import Process from '../../components/mainpage/Process';
import ReviewBanner from '../../components/mainpage/ReviewBanner';
import RollingBanner from '../../components/mainpage/RollingBanner';
import Videos from '../../components/mainpage/Videos';
import Map from '../../components/mainpage/Map';
import Sidebar from '../../components/mainpage/Sidebar';
import { Helmet } from 'react-helmet-async';

const MainPage = () => {
    return (
        <main>
            <Helmet>
                <title>상호명 심리상담센터 - 메인페이지</title>
            </Helmet>
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