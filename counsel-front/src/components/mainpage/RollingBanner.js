import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const FullRollingBannerBlock = styled.div`
    width: 100%;
    height: 36.25rem;
    background: ${palette.BG[0]};
`;

const RollingBanner = () => {
    return (
        <FullRollingBannerBlock/>
    );
};

export default RollingBanner;