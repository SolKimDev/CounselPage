import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import NavBar from '../common/NavBar';
import ApplicationForm from '../common/ApplicationForm';
import palette from '../../lib/styles/palette';
import SVG from 'react-inlinesvg';
import LeftIcon from '../../rsrc/icons/chevron-left-small.svg';

const SidebarBlock = styled.div`
    width: 100%;
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

const NavBlock = styled.aside`
    position: fixed;
    width: 6.25rem;
    height: 39.438rem;
    //background: white;
    z-index: 20;

    @media ( min-width:1440px ){
        top: 8.125em;
        right: 6.875rem;
    }

    @media only screen and (min-width: 1025px) and (max-width: 1440px) {
        top: 8rem;
        right: -6rem;

        &:hover {
            right: 0.5rem;
        }
    }

    transition: right .5s;

    //모든 창이 떠 있을 때 기준
    ${(props) => 
        props.isVisible && 
        css`
        @media ( min-width:1440px ){
            right: 41.875rem; // 41.25 + 0.625 = ApplicationBlockWidth + NavRightMargin

            margin-right: 1.25rem;
        }
    `}

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        width: 100%;
        height: 5.625rem;
        bottom:0;
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        height: 7.389vh;
    }
`;

const ShowHiddenNavbar = styled(SVG)`
    display: none;

    @media only screen and (min-width: 1025px) and (max-width: 1440px)  {
        display: block;
        position: fixed;
        width: 5rem;
        height: 5rem;

        top: 15em;
        right: 0rem;

        cursor: pointer;

        & path {
            fill: none;
            stroke: ${palette.Line[0]};
            stroke-width: 0.4px;

            //shadows
            -webkit-filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .7));
            filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .7));
        }

        &:hover + aside {
            right: 0.5rem;
        }
    }
`;

const ApplicationBlock = styled.div`
    float: right;
    width: 0;

    transition: all 0.5s;

    ${(props) => 
        props.isVisible &&
        css`
        width: 41.25rem;
    `}
    height: 100%;
    background-color: ${palette.BG[1]};
`;

const Sidebar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const closeApplication = () => {
        setIsVisible(false);
    }
    const openApplication = () => {
        setIsVisible(true);
    }

    return (
        <SidebarBlock>
            <ShowHiddenNavbar src={LeftIcon} />
            <NavBlock isVisible={isVisible}>
                <NavBar openApplication={openApplication}/>
            </NavBlock>
            <Overlay isVisible={isVisible}>
                <ApplicationBlock isVisible={isVisible}>
                    <ApplicationForm closeApplication={closeApplication}/>
                </ApplicationBlock>
            </Overlay>
        </SidebarBlock>
    );
};

export default Sidebar;