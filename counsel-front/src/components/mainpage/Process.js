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
    
    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        margin-bottom: 1.231vh;

        & h1 {
            font-weight: 500;
        }
    }
`;

const ImageBlock = styled(AlignCenter)`
    margin-bottom: 3.75rem;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        margin-bottom: 1.25rem;
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        margin-bottom: 1.231vh;
        height: 80vw;
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

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        font-size: 1em;
        padding: 0 1%;
        margin-bottom: 3.078vh;
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

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        height: 80vw;
    }
`;

const Process = () => {
    return (
        <Responsive>
            <ContentWrap>
                <TitleBlock>
                    <h1>?????? ????????????</h1>
                </TitleBlock>
                <ImageBlock>
                    <TempImg />
                </ImageBlock>
                <TextBlock>
                    ?????????????????? ??? n????????? ?????? ??????????????? ?????? ???????????? ????????? ?????? ??? ????????? ???????????? ???????????????.
                </TextBlock>
                <ButtonBlock>
                    <FilledButton>?????? ????????????</FilledButton>
                </ButtonBlock>
            </ContentWrap>
        </Responsive>
    );
};

export default Process;