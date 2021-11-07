import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
    padding: 0 16.66%;
    box-sizing: border-box;

    /* media settings */

    /* PC, but kill padding */
    @media ( max-width: 1440px ) {
        padding: 0 5%;
    }

    /* tablet page */
    /* tablet resolution 768*1024 */
    /* but web layout crunches at width 1024 x nnn */
    @media ( max-width: 1024px ) {
        padding: 0 6.64%
    }

    /* mobile page */
    @media ( max-width: 640px ) {
        padding: 0 3.333%;
    }
`;

export const AlignCenter = styled.div`
    display: flex;
    justify-content: center;
`;

const Responsive = ({ children, ...rest}) => {
    return (
        <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
    );
};

export default Responsive;