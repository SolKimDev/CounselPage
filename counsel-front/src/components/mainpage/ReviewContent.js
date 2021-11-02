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
`;

const TitleWithMarginBottom = styled.h2`
    margin-bottom: 1.875rem;
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
`;

const ReviewContent = ({ item }) => {
    return (
        <ContentBlock>
            <TitleWithMarginBottom>{ item.title }</TitleWithMarginBottom>
            <PreviewWithLimitedWidth>{ item.preview }</PreviewWithLimitedWidth>
        </ContentBlock>
    );
};

export default ReviewContent;