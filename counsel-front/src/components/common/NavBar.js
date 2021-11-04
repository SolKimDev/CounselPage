import React from 'react';
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

const NavBar = ({ openApplication }) => {
    return (
        <NavBarBlock>
            <NavBarItem phone/>
            {
                testItem.map((item, index) => (
                    <NavBarItem item={item} key={index} openApplication={item.type === "Call" ? openApplication : undefined }/>
                ))
            }
            <NavBarItem top/>
        </NavBarBlock>
    );
};

export default NavBar;