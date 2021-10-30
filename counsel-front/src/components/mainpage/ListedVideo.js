import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const VideoArea = styled.div`
    width: 15.5rem;
    height: 8.688rem;
    background: ${palette.Font[2]};
`;

// 기능구현할때 래퍼에 링크먹이세요~
const Wrapper = styled.div`
    display: flex;
    margin-bottom: 0.625rem;

    &:hover {
        color: ${palette.Font[1]};
    }
    cursor: pointer;
`;

const TextWrapper = styled.div`
    width: 11.688rem;
    margin-left: 0.938rem;
`;

const ListedVideo = ({title}) => {
    return (
        <Wrapper>
            <VideoArea/>
            <TextWrapper>
                {title}
            </TextWrapper>
        </Wrapper>
    );
};

export default ListedVideo;