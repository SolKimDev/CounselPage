import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const NavMenuBlock = styled.li`
    color: ${palette.Font[1]};
    min-width: fit-content;
    display: inline-block;
    margin-top: 1.575rem;
    cursor: pointer;
    height: 3.425rem; //Header Height - margin-top

    &:hover > span{
        color: ${palette.Font[0]};
        font-weight: bold;
    }

    /**********************OVER TABLET RESOLUTIONS*******************/
    @media ( min-width: 1024px ) {
        &:hover > ul * {
            visibility: visible;
            height: 3.75rem;
            color: white;
            transition: all 0.3s;
        }
    }

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        margin-top: 0.813rem;
        height: 2.312rem; //Header Height - margin-top
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

    visibility: hidden;

    /**********************TABLET RESOLUTIONS ONLY*******************/
    @media only screen and (min-width: 641px) and (max-width: 1024px)  {
        & * {
            display: none;
    }
`;

const TextWrapper = styled.div`
    margin-top: 0.8rem;
    margin-left: 1.25rem;
    font-weight: 300;
`;


const MenuItem = (props) => {
    const { children, listItem } = props;
    return (
        <NavMenuBlock>
            {/* 기능 구현할 때 children Link to 로 감싸세요. */}
            <span>{children}</span>
            <SubWrapper>
                { listItem ? (
                    listItem.map(item => (
                        <DropdownMenu key={item.to}><TextWrapper>{item.text}</TextWrapper></DropdownMenu>
                    ))
                ) : '' }
            </SubWrapper>
        </NavMenuBlock>
    );
};

export default MenuItem;