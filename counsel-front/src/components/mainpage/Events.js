import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import SVG from 'react-inlinesvg';
import plusIcon from '../../rsrc/icons/plusbutton-medium.svg';

const Wrapper = styled.div`
    width: 47.5%;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        width: 100%; 
        margin-bottom: 5rem;
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        margin-bottom: 6.157vh;
    }
`;

const TitleBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    margin-bottom: 1.875rem;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        margin-bottom: 1.25rem;
        & h1 {
            font-size: 1.666em;
        }
    }
    
    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        margin-bottom: 1.231vh;

        & h1 {
            font-weight: 500;
        }
    }
`;

const StyledSVG = styled(SVG)`
    width: 3.75rem;
    height: 3.75rem;

    cursor: pointer;

    .st0 {
        stroke: none;
    }

    &:hover .st0{
        fill: ${palette.Line[0]};
    }
`;

const EventImageBlock = styled.div`
    width: 100%;
    height:29.313rem;
    background-color: ${palette.BG[0]};

    cursor: pointer;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        height: 34.5rem;
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        height: 93.333vw;
    }
`;

const Events = () => {
    return (
        <Wrapper>
            <TitleBlock>
                <h1>이벤트</h1>
                <StyledSVG src={plusIcon} />
            </TitleBlock>
            <EventImageBlock />
        </Wrapper>
    );
};

export default Events;