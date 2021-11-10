import React from 'react';
import styled, { css } from 'styled-components';
import MobileMenuItem from './MobileMenuItem';
import { Dropdown_01, Dropdown_02, Dropdown_04 } from '../../lib/ListedItems';

const SideMenuBlock = styled.nav`
    position: relative;
    width: 55.2vw;
    right: -25rem;
    height: 100%;
    background-color: white;

    transition: all .5s; 

    padding 2.216vh 0 2.216vh 6.666vw;
    box-sizing: border-box;

    h1 {
        margin-bottom: 2.463vh;
    }

    ${props => 
        props.isVisible &&
        css`
            right: 0;
        `
    }
`;

const SideMenu = (props) => {
    return (
        <SideMenuBlock isVisible={props.isVisible ? 1 : 0}>
            <h1>MENU</h1>
            <ul>
                <MobileMenuItem listItem={Dropdown_01}>센터 안내</MobileMenuItem>
                <MobileMenuItem listItem={Dropdown_02}>게시판</MobileMenuItem>
                <MobileMenuItem listItem={Dropdown_04}>상담 안내</MobileMenuItem>
                <MobileMenuItem>자가진단</MobileMenuItem>
                <MobileMenuItem>상담 신청</MobileMenuItem>
            </ul>
        </SideMenuBlock>
    );
};

export default SideMenu;