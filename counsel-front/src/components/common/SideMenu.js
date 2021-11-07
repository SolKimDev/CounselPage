import React from 'react';
import styled, { css } from 'styled-components';

const SideMenuBlock = styled.aside`
    position: relative;
    width: 55.2%;
    right: -25rem;
    height: 100%;
    background-color: white;

    transition: all .5s; 

    ${props => (
        props.isVisible &&
        css`
            right: 0;
        `
    )}
`;
const SideMenu = (props) => {
    return (
        <SideMenuBlock isVisible={props.isVisible ? 1 : 0}>
            
        </SideMenuBlock>
    );
};

export default SideMenu;