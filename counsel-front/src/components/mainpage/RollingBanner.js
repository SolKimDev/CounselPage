import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const RollingBannerBlock = styled.section`
    width: 100%;
    height: 36.25rem;
    background: ${palette.BG[0]};

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        height: 43.625rem;
    }
`;

const RollingBanner = () => {
    return (
        <RollingBannerBlock/>
    );
};

export default RollingBanner;