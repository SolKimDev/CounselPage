import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
    padding-left: 16.66%;
    padding-right: 16.66%;

    /* media settings */

    /* tablet page */
    /* tablet resolution 768*1024 */
    /* but web layout crunches at width 1024 */
    @media ( max-width: 1024px ) {
        width: 768px;
    }

    /* mobile page */
    @media ( max-width: 576px ) {
        width: 576px;
    }
`;

const Responsive = ({ children, ...rest}) => {
    return (
        <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
    );
};

export default Responsive;