import dotenv from "dotenv";
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import MenuItem from './MenuItem';
import MenuBtn from '../../rsrc/icons/NavIcon/MenuBtn.svg';
import SideMenu from './SideMenu';
import { Dropdown_01, Dropdown_02, Dropdown_03 } from '../../lib/ListedItems';

const HeaderBlock = styled.header`
    position: fixed;
    z-index: 5;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 1025px) and (max-width: 1440px)  {
        padding-right: max(1rem, 16.66%);
    }
`;

const Spacer = styled.div`
    height: 5rem;

    /**********************TABLET RESOLUTIONS*******************/

    @media ( max-width: 1024px ) {
        height: 3.125rem;
    }
`;

// 레이아웃 확인을 위해 사용하는 임시 개체입니다.
const Logo = styled.div`
    width: 19.313rem;
    height: 5rem;
    background: ${palette.Font[1]};

    &:hover {
        background: ${palette.Font[2]};
    } 

    /**********************TABLET RESOLUTIONS*******************/

    @media ( max-width: 1024px ) {
        width: 12.063rem;
        height: 3.125rem;
    }
`;

//메뉴 내비게이션 블록입니다.
const MenuBlock = styled.nav`
    width: 41.25rem;
    height: 5rem;
    ul {
        display: flex;
        justify-content: space-around;
    }

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        width: 23.75rem;
        height: 3.125rem;

        font-size: 0.666em;
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        display: none;
    }
`;

const StyledBtn = styled.img`
    display: none;
    margin-top: 0.3rem;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        display: block;
    }
`;

const Overlay = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    visibility: hidden;
    background-color: rgba(0, 0, 0, 0);

    transition: all .5s;

    ${(props) =>
        props.isVisible &&
        css`
        visibility: visible;
        background-color: rgba(0, 0, 0, 0.6);
    `}
`;

const OverlayClosingArea = styled.div`
    width: 44.8vw;
    height: 100%;
`;

const OverlayContentWrapper = styled.div`
    height: 92.611vh; // 100 -7.389 (바닥 NavBar 크기 제외)
    display: flex;
`;

const QuickMenuSpacer = styled.div`
    height: 7.389%;
`;

const Header = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [mQuery, setMQuery] = useState(
        window.innerWidth > 640 ? true : false
    );

    const screenChange = (event) => {
        const matches = event.matches;
        setMQuery(matches);
    }

    let history = window.history;
    let location = window.location;

    const closeSideMenu = () => {
        setIsVisible(false);
    }
    const openSideMenu = () => {
        setIsVisible(true);
    }
    
    useEffect(() => {
        let mql = window.matchMedia("screen and (min-width: 640px)");
        mql.addEventListener("change", screenChange);
        return () => mql.removeEventListener("change", screenChange)
    }, []);

    useEffect(() => {
        if(mQuery) {
            closeSideMenu();
        }
    },[mQuery]);

    useEffect(() => {
        //릴리즈시 TESTURI => SERVICEURI로 변경
        const domains = process.env.REACT_APP_TESTURI.split(",");
        const checkDomain = item => {
            if (document.referrer === item) {
                return true;
            }

            return false;
        };
    
        const preventGoBack = () => {
            if(isVisible) {
                closeSideMenu();
                history.pushState(null, '', location.href);
            } else {
                // if(domains.some(checkDomain)) {
                //     console.log(true);
                //     history.go(-2);
                // } else {
                //     console.log(document.referrer);
                //     history.go(-1);
                // }
                history.go(-1);
            }
        };
        
        history.pushState(null, '', location.href);
        window.addEventListener('popstate', preventGoBack);
        
        return () => {
            window.removeEventListener('popstate', preventGoBack);
        }
    }, [isVisible]);

    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/mainpage" className="logo">
                        <Logo></Logo>
                    </Link>
                    <MenuBlock>
                        <ul>
                            <MenuItem listItem={Dropdown_01}>센터 안내</MenuItem>
                            <MenuItem listItem={Dropdown_02}>게시판</MenuItem>
                            <MenuItem listItem={Dropdown_03}>상담 안내</MenuItem>
                            <MenuItem to="/mainpage/diagnose/depression">자가진단</MenuItem>
                            <MenuItem>상담 신청</MenuItem>
                        </ul>
                    </MenuBlock>
                    <StyledBtn src={MenuBtn} onClick={openSideMenu}/>
                    <Overlay isVisible={isVisible} className="overlay">
                        <OverlayContentWrapper>
                            <OverlayClosingArea onClick={closeSideMenu}/>
                            <SideMenu isVisible={isVisible}/>
                        </OverlayContentWrapper>
                        <QuickMenuSpacer />
                    </Overlay>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;