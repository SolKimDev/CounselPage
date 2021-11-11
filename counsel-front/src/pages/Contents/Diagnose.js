import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
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

const Diagnose = ({ match }) => {
    return (
        <main>
            <Helmet>
                <title>상호명 심리상담센터 - 자가진단</title>
            </Helmet>
            <Link to={`${match.url}/depression`}>우울</Link>
            <Link to={`${match.url}/anxiety`}>불안</Link>
            <Link to={`${match.url}/alcohol`}>알콜</Link>
            <BGImg />
            <Route component={Depression} path={`${match.url}/depression`} exact />
            <Route component={Anxiety} path={`${match.url}/anxiety`} exact />
            <Route component={Alcohol} path={`${match.url}/alcohol`} exact />
        </main>
    );
};

export default Diagnose;