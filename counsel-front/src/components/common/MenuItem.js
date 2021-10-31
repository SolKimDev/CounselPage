import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const NavMenuBlock = styled.li`
    color: ${palette.Font[1]};
    min-width: fit-content;
    display: inline-block;
    margin-top: 1.575rem;
    cursor: pointer;

    &:hover {
        color: ${palette.Font[0]};
    }

    &:hover > ul > li {
        visibility: visible;
        height: 3.75rem;
        color: white;
        transition: all 0.3s;
    }
`;

const DropdownMenu = styled.li`
    vertical-align: middle;
    list-style: none;
    visibility: hidden;
    background-color: rgba(25,25,25,0.8);
    color: rgba(255, 255, 255, 0); //for transition
    //color: white;
    border-bottom: 1px solid ${palette.Line[1]};

    position: relative;
    top: 1.5rem;
    height: 0; //for transition
    //height: 3.75rem;
    width: 15.6rem;

    &:hover {
        color: ${palette.Font[1]};
        background-color: ${palette.Font[2]};
    }
`;

const SubWrapper = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
`;

const TextWrapper = styled.div`
    margin-top: 0.8rem;
    margin-left: 1.25rem;
`;

const MenuItem = ({ children, listName, listLink }) => {
    return (
        <NavMenuBlock>
            {/* 기능 구현할 때 children Link to 로 감싸세요. */}
            {children}
            <SubWrapper>
                <DropdownMenu><TextWrapper>드롭다운 1</TextWrapper></DropdownMenu>
                <DropdownMenu><TextWrapper>드롭다운 2</TextWrapper></DropdownMenu>
                <DropdownMenu><TextWrapper>드롭다운 3</TextWrapper></DropdownMenu>
            </SubWrapper>
        </NavMenuBlock>
    );
};

export default MenuItem;