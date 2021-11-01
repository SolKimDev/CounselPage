import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import FilledButton from '../common/FilledButton';
import Responsive, { AlignCenter } from '../common/Responsive';

const ContentWrap = styled.article`
    margin-bottom: 11.25rem;
`;

const TitleBlock = styled.div`
    margin-bottom: 1.563rem;

    *zoom: 1;

    &:after {
        content: "";
        display: block;
        clear: both;
    }
`;

const ImageBlock = styled(AlignCenter)`
    margin-bottom: 3.75rem;
`;

const TextBlock = styled(AlignCenter)`
    font-size: 1.166em;
    margin-bottom: 2.5rem;
`;

const ButtonBlock = styled(AlignCenter)``;

const TempImg = styled.div`
    width: 64rem;
    height: 20.875rem;
    background-color: ${palette.BG[0]}
`;

const Process = () => {
    return (
        <Responsive>
            <ContentWrap>
                <TitleBlock>
                    <h1 style={{float:'right'}}>상담 프로세스</h1>
                </TitleBlock>
                <ImageBlock>
                    <TempImg />
                </ImageBlock>
                <TextBlock>
                    상호명에서는 총 n단계의 상담 프로세스를 통해 시작부터 끝까지 상담 전 과정을 내담자와 함께합니다.
                </TextBlock>
                <ButtonBlock>
                    <FilledButton>상담 신청하기</FilledButton>
                </ButtonBlock>
            </ContentWrap>
        </Responsive>
    );
};

export default Process;