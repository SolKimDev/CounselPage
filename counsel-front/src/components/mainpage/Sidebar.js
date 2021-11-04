import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import NavBar from '../common/NavBar';
import ApplicationForm from '../common/ApplicationForm';
import palette from '../../lib/styles/palette';

const SidebarBlock = styled.div`

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

    top: 8.125em;
    right: 6.875rem;

    transition: right .5s;

    //모든 창이 떠 있을 때
    ${(props) => 
        props.isVisible && 
        css`
        right: 41.875rem; // 41.25 + 0.625 = ApplicationBlockWidth + NavRightMargin

        margin-right: 1.25rem;
    `}
    
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