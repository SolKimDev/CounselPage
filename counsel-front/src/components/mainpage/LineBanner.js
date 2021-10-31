import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const LineBannerBlock = styled.section`
    margin-top: 5.625rem;
    margin-bottom: 4.375rem;
    width: 100%;
    height: 6.063rem;
    background: ${palette.BG[0]};
`;

const LineBanner = () => {
    return (
        <Responsive>
            <LineBannerBlock />
        </Responsive>
    );
};

export default LineBanner;