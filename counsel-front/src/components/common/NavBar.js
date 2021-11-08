import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBarItem from './NavBarItem';

import Kakao from '../../rsrc/icons/NavIcon/Kakao.svg';
import Naver from '../../rsrc/icons/NavIcon/Naver.svg';
import Reservation from '../../rsrc/icons/NavIcon/Calendar.svg';
import Diagnose from '../../rsrc/icons/NavIcon/Diagnose.svg';
import Call from '../../rsrc/icons/NavIcon/Phone.svg';

const NavBarBlock = styled.nav`
    width: 100%;
    height: 100%;
    //background-color: white;
    border-radius: 30px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.25);

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        padding: 0 3.188rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 0;
        box-shadow: 0px 0px -15px rgba(0, 0, 0, 0.25);
        background-color: white;
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        padding: 0 4vw;
    }
`;

const testItem = [
    {
        icon: Kakao,
        type: "Kakao",
        moveTo: "1234",
        text: "카톡 문의"
    },
    {
        icon: Naver,
        type: "Naver",
        moveTo: "1234",
        text: "네이버 예약"
    },
    {
        icon: Reservation,
        type: "Reservation",
        moveTo: "1234",
        text: "직접 예약"
    },
    {
        icon: Diagnose,
        type: "Diagnose",
        moveTo: "1234",
        text: "자가진단"
    },
    {
        icon: Call,
        type: "Call",
        moveTo: "1234",
        text: "전화상담"
    },
]

const mobileItem = [
    {
        icon: Call,
        type: "Call",
        moveTo: "1234",
        text: "전화상담"
    },{
        icon: Kakao,
        type: "Kakao",
        moveTo: "1234",
        text: "카톡 문의"
    },
    {
        icon: Naver,
        type: "Naver",
        moveTo: "1234",
        text: "네이버 예약"
    },
    {
        icon: Reservation,
        type: "Reservation",
        moveTo: "1234",
        text: "직접 예약"
    }
]

const NavBar = ({ openApplication }) => {
    const [mQuery, setMQuery] = useState(
        window.innerWidth < 640 ? true : false
    );

    const screenChange = (event) => {
        const matches = event.matches;
        setMQuery(matches);
    }

    useEffect(() => {
        let mql = window.matchMedia("screen and (max-width: 640px)");
        mql.addEventListener("change", screenChange);
        return () => mql.removeEventListener("change", screenChange)
    }, [])

    return (
        <NavBarBlock>
            <NavBarItem phone/>
            {   mQuery ? (
                mobileItem.map((item, index) => (
                    <NavBarItem item={item} key={index} openApplication={item.type === "Call" ? openApplication : undefined }/>
                ))) :
                (
                testItem.map((item, index) => (
                    <NavBarItem item={item} key={index} openApplication={item.type === "Call" ? openApplication : undefined }/>
                )))
            }
            <NavBarItem top/>
        </NavBarBlock>
    );
};

export default NavBar;