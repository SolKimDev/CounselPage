import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import phoneCall from '../../rsrc/icons/NavIcon/phone-calling.svg';
import topIcon from '../../rsrc/icons/NavIcon/Top.svg';

const ItemBlock = styled.div`
    height: 5.625rem;
    background-color: white;

    @media ( max-width: 1440px ) {
        height: 4.5rem;
    }

    ${(props) =>
        props.item &&
        css`
            color: red;
            text-align: center; 

            &::after {
                position:relative;
                display: block;
                width: 4.063rem;
                left: 17.5%;
                content:"";
                border-bottom: 1px solid ${palette.Line[1]};
            }   
    `}

    ${(props) =>
        props.phone &&
        css`
            background-color: #5E5A6A;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            font-family: Roboto;
            font-weight: 400;

            color: #DBD9C8;

            div {
                span {
                    font-size: 0.833em;
                }
            }
    `}

    ${(props) =>
        props.top &&
        css`
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
            color: blue;
    `}
`;

const ContentWrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    ${(props) =>
        !(props.phone) &&
        css`
            cursor: pointer;

            color: ${palette.Font[2]};
            font-size: 0.7em;
            font-weight: 500;
        `
    }
`;

const ContentBox = styled.div`
    display: block;
    text-align: center;
    padding: 0.688rem 0;
`;

const PhoneFlexBlock = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    div {
        padding-top: 0.6rem;
        padding-left: 1rem;
        margin-right: 0.125rem;

        span {
            font-size: 0.833em;
        }

        @media ( max-width: 1440px ) {
            padding-top: 0.4rem;
            padding-left: 1.2rem;
            font-size: 0.8em;
        }
    }
`;

const ImgStyle = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    padding-top: 0.75rem;

    @media ( max-width: 1440px ) {
        display: none;
    }
`;

const BoxedImg = styled.img`
    width: 3.438rem;
    height: 3.125rem;  

    @media ( max-width: 1440px ) {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

const BoxedText = styled.div`
    margin-top: -5px;
`;

const TopBtnBlock = styled.div`

`;

const NavBarItem = ({ phone, item, top, openApplication }) => {
    const moveTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }
    if(item) {
        return (
            <ItemBlock item={1}>
                <ContentWrap item={1}> 
                    { openApplication ? (
                        <ContentBox onClick={openApplication}>
                        <BoxedImg src={item.icon} />
                        <BoxedText>{item.text}</BoxedText>
                    </ContentBox>
                    ) : (
                        <ContentBox>
                            <BoxedImg src={item.icon} />
                            <BoxedText>{item.text}</BoxedText>
                        </ContentBox>
                    ) }
                </ContentWrap>
            </ItemBlock>
                )
    } else if(phone) {
        return (
            <ItemBlock phone={1}>
                <PhoneFlexBlock>
                    <div>
                        <span>010.</span><br/>1234<br/>5678
                    </div>
                    <ImgStyle src={phoneCall} />
                </PhoneFlexBlock>
            </ItemBlock>
            )
    } else if(top) {
        return (
            <ItemBlock top={1}>
                <ContentWrap onClick={moveTop}>
                    <TopBtnBlock>
                        <img src={topIcon} alt="topIcon"/>
                        top
                    </TopBtnBlock>
                </ContentWrap>
            </ItemBlock>
        )
    }
};

export default NavBarItem;