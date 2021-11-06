import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const LineBannerBlock = styled.section`
    margin-top: 5.625rem;
    margin-bottom: 4.375rem;
    //width: 100%;
    height: 6.063rem;

    padding: 0 16.66%;
    box-sizing: border-box;

    @media ( max-width: 1440px ) {
        padding: 0 5%;
    }

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        height: 4.375rem;
        padding: 0;
        margin-top: 4.375rem;
        margin-bottom: 2.5rem;
    }
`;

const ContentWrap = styled.div`
    background: ${palette.BG[0]};
    height: 6.063rem;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        height: 4.375rem;
    }
`;

const LineBanner = () => {
    return (
        <LineBannerBlock>
            <ContentWrap>
            </ContentWrap>
        </LineBannerBlock>
    );
};

export default LineBanner;