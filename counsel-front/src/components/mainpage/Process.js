import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import FilledButton from '../common/FilledButton';
import Responsive, { AlignCenter } from '../common/Responsive';

const ContentWrap = styled.article`
    margin-bottom: 11.25rem;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        margin-bottom: 3.125rem;
    }
`;

const TitleBlock = styled.div`
    margin-bottom: 1.563rem;

    *zoom: 1;

    &:after {
        content: "";
        display: block;
        clear: both;
    }

    h1 {
        float:right;
    }

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        & h1 {
            font-size: 1.666em;
            float:none;
        }
    }
`;

const ImageBlock = styled(AlignCenter)`
    margin-bottom: 3.75rem;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        margin-bottom: 1.25rem;
    }
`;

const TextBlock = styled(AlignCenter)`
    font-size: 1.166em;
    margin-bottom: 2.5rem;
    text-align: center;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        padding: 0 17.567%;
        font-size: 0.833em;
        margin-bottom: 2.125rem;
    }
`;

const ButtonBlock = styled(AlignCenter)``;

const TempImg = styled.div`
    width: 64rem;
    height: 20.875rem;
    background-color: ${palette.BG[0]};

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        height: 13.563rem;
    }
`;

const Process = () => {
    return (
        <Responsive>
            <ContentWrap>
                <TitleBlock>
                    <h1>상담 프로세스</h1>
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