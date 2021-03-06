import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive, { AlignCenter } from '../common/Responsive';
import ListedVideo from './ListedVideo';
import SVG from 'react-inlinesvg';
import rightIcon from '../../rsrc/icons/chevron-right-small.svg';

const TitleBlock = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
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

const MainVideoBlock = styled.div`
    width: 49.563rem;
    height: 27.375rem;
    background: ${palette.BG[0]};

    margin-right: 0.938rem;

    @media ( max-width: 1024px ) {
        margin-right: 0;
        margin-bottom: 1.313rem;
        width: 100%;
        height: 24.688em;
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        height: 30vh;
        //margin-bottom: 0;
    }
`;

const VideoListBlock = styled.div`
    width: 28.563rem;
    height: 27.375rem;
    margin-right: 0.438rem;

    transition: color .3s ease;
    color: rgba(0, 0, 0, 0);
    text-shadow: 0 0 ${palette.Font[0]};

    overflow-y:scroll;

    &::-webkit-scrollbar, &::-webkit-scrollbar-thumb {
        width: 26px;
        border-radius: 13px;
        background-clip: padding-box;
        border: 10px solid transparent;
    }

    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 0 10px;
    }

    &:hover {
        color: rgba(0, 0, 0, 0.3);
    }

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        display: flex;
        width: 100%;
        height: fit-content;

        &::-webkit-scrollbar, &::-webkit-scrollbar-thumb {
            display: none;
        }
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        margin-right: 0;
        //display: none;
    }
`;

const ShowMoreBtn = styled.div`
    display: flex;
    align-items: center;

    & path {
        fill: none;
        stroke: ${palette.Font[0]};
    }

    &:hover {
        color: ${palette.Font[1]};
    }

    &:hover path {
        stroke: ${palette.Font[1]};
    }

    cursor: pointer;
`;

const Wrapper = styled(AlignCenter)`
    margin-top: 0.938rem;
    margin-bottom: 6.250rem;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        display: block;
        margin-top: 1.25rem;
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        margin-top: 0;
        margin-bottom: 0;
    }
`;

const StyledSVG = styled(SVG)`
    width: 1.5rem;
    height: 1.5rem;
`;

const ContentWrap = styled.article`
    margin-bottom: 6.25rem;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        margin-bottom: 3.125rem;
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        margin-bottom: 6.157vh;
    }
`;

const Videos = () => {
    return (
        <Responsive>
            <ContentWrap>
                <TitleBlock>
                    <h1>????????? TV</h1>
                    <ShowMoreBtn>
                        ?????????
                        <StyledSVG src={rightIcon} />
                    </ShowMoreBtn>
                </TitleBlock>
                <Wrapper>
                    <MainVideoBlock />
                    <VideoListBlock>
                        <ListedVideo title="????????? ????????? ?????? ????????? ???????????? ???????????????."></ListedVideo>
                        <ListedVideo title="?????? ?????? 1"></ListedVideo>
                        <ListedVideo title="?????? ?????? 2"></ListedVideo>
                        <ListedVideo title="?????? ?????? 3"></ListedVideo>
                        <ListedVideo title="?????? ?????? 4"></ListedVideo>
                        <ListedVideo title="?????? ?????? 5"></ListedVideo>
                        <ListedVideo title="?????? ?????? 6"></ListedVideo>
                        <ListedVideo title="?????? ?????? 7"></ListedVideo>
                        <ListedVideo title="?????? ?????? 8"></ListedVideo>
                        <ListedVideo title="?????? ?????? 9"></ListedVideo>
                    </VideoListBlock>
                </Wrapper>
            </ContentWrap>
        </Responsive>
    );
};

export default Videos;