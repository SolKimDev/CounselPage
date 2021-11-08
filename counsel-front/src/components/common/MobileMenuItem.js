import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import SVG from 'react-inlinesvg';
import plusIcon from '../../rsrc/icons/plusbutton-medium.svg';
import rightIcon from '../../rsrc/icons/chevron-left-small.svg';

const ItemBlock = styled.li`
    list-style-type: none;
    width: 40vw;
    height: fit-content;
    margin-top: 1px;
    padding: 1.231vh 0;
    box-sizing: border-box;
    border-top: 1px solid ${palette.Line[1]};

    &:hover {
        ${props => 
            props.listItem &&
            css`
            padding-bottom: 0;
        `}
    }

    &:hover .titleBlock {
        ${props =>
            props.listItem &&
            css`
                padding-bottom: 1.231vh;
                box-sizing: border-box;
                border-bottom: 1px solid ${palette.Line[1]};
        `}
    }

    & > div > div > img:first-child {
        display:block;
    }

    &:hover > div > div > img:first-child {
        display:none;
    }
    &:hover > div > div > SVG {
        display:block;
        transform: rotate(-90deg);
    }

    &:hover > div > ul {
        height: auto;
    }

    &:hover > div > ul > li {
        color: ${palette.Font[1]};
        padding: 1.231vh 0;
        height: auto;
    }

    &:hover > div > ul > li:not(li:first-child) {
        border-top: 1px solid ${palette.Line[1]};
    }
`;

const MenuBlock = styled.div`

`;

const TitleBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SubMenuBlock = styled.ul`
    color: #00000000;
    box-sizing: border-box;
    font-size: 0.9em;
    height: 0;
`;

//DropDownMenu
const SubMenu = styled.li`
    margin-left: 10%;
    margin-right: 11.666%;

    list-style-type: none;
    height: 0;

    cursor: pointer;
`;

const TextWrapper = styled.div`
    padding-left: 10%;
    box-sizing: border-box;
`;

const StyledChev = styled(SVG)`
    display: none;
    width: 1.5em;
    height: 1.5em;

    & path {
        fill: none;
        stroke: ${palette.Font[2]};
    }
`;

const StyledPlus =styled.img`
    display: none;
    width: 1.5em;
    height: 1.5em;
`;

const MobileMenuItem = (props) => {
    const { children, listItem } = props;

    return (
        <ItemBlock listItem={listItem ? 1 : 0}>
            <MenuBlock>
                <TitleBlock className="titleBlock">
                    {children}
                    { listItem ? (
                        <>
                            <StyledPlus src={plusIcon} />
                            <StyledChev src={rightIcon} />
                        </>
                    ) : ''}
                    
                </TitleBlock>
                <SubMenuBlock>
                    { listItem ? (
                        listItem.map(item => (
                            <SubMenu key={item.to}><TextWrapper>{item.text}</TextWrapper></SubMenu>
                        ))
                    ) : '' }
                </SubMenuBlock>
            </MenuBlock>
        </ItemBlock>
    );
};

export default MobileMenuItem;