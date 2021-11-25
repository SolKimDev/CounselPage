import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Route, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Responsive from '../../components/common/Responsive';
import Alcohol from '../../components/diagnose/Alcohol';
import Anxiety from '../../components/diagnose/Anxiety';
import Depression from '../../components/diagnose/Depression';
import palette from '../../lib/styles/palette';

const BGImg = styled.div`
    width: 100%;
    height: 23.125rem;
    background-color: ${palette.Line[2]};
    margin-bottom: 1.25rem;
`;

const SelectorBar = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 3.125rem;

    margin-top: 6.25rem;
    box-shadow 0px 4px 10px rgba(0,0,0,0.16);
`;

const SelectorItem = styled.div`
    width: calc( 100% / 3 );
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;

    &:not(&:last-child) {
        border-right: 1px solid ${palette.Line[1]};
    }

    & > a {
        text-decoration: none;
        color: ${palette.Font[1]};
        width: 100%;
        text-align: center;
    }

    &:hover {
        font-weight : bold;
        & > a {
            color: ${palette.Font[0]};
        }
    }

    ${(props) => 
        props.selected && css `
            background-color: ${palette.Brand_Main[2]};

            & > a {
                color: white;
            }

            &:hover {
                font-weight: regular;
                & > a {
                    cursor: default;
                    color: white;
                    font-weight: normal;
                }
            }
    `}
`;

const SelectorRelavite = styled.div`
    position: relative;
    width: 100%;
`;

const ResponsiveWrapper = styled(Responsive)`
    width: 100%;
    //background-color: red;
`;

const ContentWrap = styled.main`
    width: 100%;
`;

const Diagnose = ({ match, history }) => {
    const [currentPage, setCurrentPage] = useState();

    useEffect(()=> {
        console.log('useEffect() called');
        var link = document.location.href.split('/');
        if(link[link.length-1])
            history.push(`${match.url}/depression`);

        clickSelector();
    },[]);

    const clickSelector = () => {
        console.log('cs() called');
        var link = document.location.href.split('/');
        switch(link[link.length-1]) {
            case 'depression':
                setCurrentPage(0);
                break;
            case 'anxiety':
                setCurrentPage(1);
                break;
            case 'alcohol':
                setCurrentPage(2);
                break;
        }
    }

    return (
        <ContentWrap>
            <Helmet>
                <title>상호명 심리상담센터 - 자가진단</title>
            </Helmet>
            <ResponsiveWrapper>
                <SelectorRelavite>
                    <SelectorBar>
                            <SelectorItem selected={(currentPage === 0) ? 1 : 0} onClick={clickSelector}><Link to={`${match.url}/depression`}>우울</Link></SelectorItem>
                            <SelectorItem selected={(currentPage === 1) ? 1 : 0} onClick={clickSelector}><Link to={`${match.url}/anxiety`}>불안</Link></SelectorItem>
                            <SelectorItem selected={(currentPage === 2) ? 1 : 0} onClick={clickSelector}><Link to={`${match.url}/alcohol`}>알콜</Link></SelectorItem>
                    </SelectorBar>
                </SelectorRelavite>
            </ResponsiveWrapper>
            <BGImg />
            <Route component={Depression} path={`${match.url}/depression`} exact />
            <Route component={Anxiety} path={`${match.url}/anxiety`} exact />
            <Route component={Alcohol} path={`${match.url}/alcohol`} exact />
        </ContentWrap>
    );
};

export default Diagnose;