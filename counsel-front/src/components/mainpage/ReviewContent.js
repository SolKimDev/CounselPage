import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ContentBlock = styled.div`
    margin-top: 2.5rem;
    text-align: center;

    margin-bottom: 4.563rem;

    cursor: pointer;

    &:hover {
        color: ${palette.Font[2]};
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        margin-bottom: 3.694vh;
        font-size: 0.9em;
    }
`;

const TitleWithMarginBottom = styled.div`
    margin-bottom: 1.875rem;
    display: inline-block;

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        padding: 0 5%;
        box-sizing: border-box;
        width: 80vw;
        text-align: center;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        margin-bottom: 3.694vh;

        h2 {
            display: inline;
            text-align: center;
        }
    }
`;

const PreviewWithLimitedWidth = styled.p`
    margin: 0 6.591%;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.5em;
    height: 3em;

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        margin 0 3%;
    }
`;

const ReviewContent = ({ item }) => {
    return (
        <ContentBlock>
            <TitleWithMarginBottom><h2>{ item.title }</h2></TitleWithMarginBottom>
            <PreviewWithLimitedWidth>{ item.preview }</PreviewWithLimitedWidth>
        </ContentBlock>
    );
};

export default ReviewContent;