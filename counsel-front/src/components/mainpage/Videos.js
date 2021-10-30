import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import ListedVideo from './ListedVideo';
import rightIcon from '../../rsrc/icons/chevron-right-small.svg';


const TitleBlock = styled.div`
    display: flex;
    width: 100%;
    align-items: baseline;
    justify-content: space-between;
`;

const MainVideoBlock = styled.div`
    width: 49.563rem;
    height: 27.375rem;
    background: ${palette.BG[0]};

    margin-right: 1.875rem;
`;

const VideoListBlock = styled.div`
    width: 28.563rem;
    height: 27.375rem;
    margin-right: 0.438rem;
`;

const ShowMoreBtn = styled.div`
    display: flex;
    &:hover {
        color: ${palette.Font[1]};
    }

    cursor: pointer;
`;

const Wrapper = styled.div`
    margin-top: 0.938rem;
    margin-bottom: 6.250rem;
    display: flex;
`;

const ChevRightIcon = styled.img`
    color: ${palette.Font[0]};
    width: 1.5rem;
    height: 1.5rem;
`;

const SVGObject = styled.object.attrs({
    type: "image/svg+xml",
    data: rightIcon
})`
    svg {
        fill:red;
    }
    // stroke: red !important;
    // fill: red;
`;

// const SVGTest = styled.svg.attrs({
//     version: "1.1",
//     xmlns: "http://www.w3.org/2000/svg",
//     xmlnsXlink: "http://www.w3.org/1999/xlink"
// })`
//     > path {
//         stroke: "#191919";
//     }
//     width: 1.5rem;
//     height: 1.5rem;
//     fill: none;
//     stroke: #191919;
//     stroke-width: 2;
//     stroke-miterlimit: 10;
// `;

const Videos = () => {
    return (
        <Responsive>
            <TitleBlock>
                <h1>상호명 TV</h1>
                <ShowMoreBtn>
                    더보기
                    <SVGObject />
                    {/* <SVGTest viewBox="0 0 24 24" >
                        <g id="group_18445" transform="translate(9235 - 7244)">
                            <path id="path_7673"
                            className="st0"
                            d="M-9226.5,7263.5l7-7l-7-7"
                            fill="none"
                            stroke="#191919"
                            />
                        </g>
                    </SVGTest> */}
                </ShowMoreBtn>
            </TitleBlock>
            <Wrapper>
                <MainVideoBlock />
                <VideoListBlock>
                    <ListedVideo title="이곳은 유튜브 영상 제목이 들어가는 영역입니다."></ListedVideo>
                    <ListedVideo title="영상 제목 1"></ListedVideo>
                    <ListedVideo title="영상 제목 2"></ListedVideo>
                </VideoListBlock>
            </Wrapper>
        </Responsive>
    );
};

export default Videos;