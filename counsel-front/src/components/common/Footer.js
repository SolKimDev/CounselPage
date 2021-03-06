import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from './Responsive';

const BackgroundBlock = styled.footer`
    width: 100%;
    height: 15.375rem;
    background-color: #5E5A6A;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        height: 12.625rem;
        margin-bottom: 5.6rem; //Footer Spacer
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        margin-bottom: 7.389vh; //Footer Spacer
    }
`;

const ContentWrap = styled(Responsive)`
    display: flex;
    height: 15.375-3.75rem; //fullHeight - Padding-top
    justify-content: space-between;
    padding-top: 3.75rem;
    padding-bottom: 2.5rem;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        padding-top: 2.5rem;   
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        position: relative;
        font-size: 1em;
    }
`;

const LeftBlock = styled.div`
    color: white;

    p {
        font-size: 0.75em;
        font-weight: 300;
    }

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        p {
            font-size: 0.583em;
        }
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        width: 100vw;
    }
`;

const TitleWithMarginBottom = styled.h3`
    font-size: 1em;
    margin-bottom: 1.25rem;
`;

const RightBlock = styled.div`
    font-size: 1em;
    text-align: right;
    line-height: 1.66em;

    position: relative;
    height: inherit;

    p: first-child {
        color: white;
        font-weight: 400;
    }
    p: last-child {
        color: #D435C4;
        font-weight: 600;
    }

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        p {
            font-size: 0.583em;
            line-height: 1.5em;
        }
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        position: absolute;
        top: -20vh;
        left: 17.333vw;

        font-size: 2rem;

        p: first-child {
            color: ${palette.Font[0]};
        }
    }
`; 

const Footer = () => {
    const [mQuery, setMQuery] = useState(
        window.innerWidth < 640 ? true : false
    );

    const screenChange = (event) => {
        const matches = event.matches;
        setMQuery(matches);
    }

    useEffect(() => {
        let mql = window.matchMedia("screen and (max-width: 1024px)");
        mql.addEventListener("change", screenChange);
        return() => mql.removeEventListener("change", screenChange);
    }, [])

    return (
        <BackgroundBlock>
            <ContentWrap>
                <LeftBlock>
                    <TitleWithMarginBottom>상호명 심리상담센터</TitleWithMarginBottom>
                    {mQuery ? (
                        <>
                            <p>주소 : (우)63309 제주특별자치도 제주시 첨단로 242</p>
                            <p>홈페이지 책임관리자 : 김희수</p>
                            <p>TEL : 010-1234-5678 | FAX : 041-123-4567 | E-mail : email@domain.co.kr</p>
                            <p>CRN :  123 - 45 - 67890</p>
                            <p>COPYRIGHT(c) 2021 주식회사 상호명 ALL RIGHTS RESERVED</p>
                        </>
                    ) : (
                        <>
                            <p>주소 : (우)63309 제주특별자치도 제주시 첨단로 242&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;홈페이지 책임관리자 : 김희수</p>
                            <p>TEL : 010-1234-5678   FAX : 041-123-4567   E-mail : email@domain.co.kr </p>
                            <p>CRN :  123 - 45 - 67890&nbsp;&nbsp;|&nbsp;&nbsp;COPYRIGHT(c) 2021 주식회사 상호명 ALL RIGHTS RESERVED</p>
                        </>
                    )}
                </LeftBlock>
                <RightBlock>
                    <p>상담 가능 시간: 00:00 ~ 00:00</p>
                    <p>※일요일 및 공휴일은 휴진입니다</p>
                </RightBlock>
            </ContentWrap>
        </BackgroundBlock>
    );
};

export default Footer;