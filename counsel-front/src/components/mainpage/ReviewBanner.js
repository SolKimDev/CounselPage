import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import leftIcon from '../../rsrc/icons/chevron-left-small.svg';
import rightIcon from '../../rsrc/icons/chevron-right-small.svg'
import Responsive from '../common/Responsive';
import ReviewContent from './ReviewContent';
import LineButton from '../common/LineButton';

const BannerBlock = styled.div`
    width: 100%;
    height: 32rem;

    margin-bottom: 10.625rem;
`;

const Cover = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 10, 0.8);
`;

const ContentWrap = styled(Responsive)`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`;

const MainContentBlock = styled.div`
    color: white;
    text-align: center;

    margin-bottom: 2.5rem;
`;

const StyledSVG = styled(SVG)`
    width: 6.875rem;
    height: 6.875rem;

    cursor: pointer;

    & path {
        fill: none;
        stroke: white;
        stroke-width: 0.4px;
    }

    &:hover path {
        stroke-width: 0.8px;
    }
`;

const SampleReview = {
    title: "후기 제목 영역입니다. 동해물과 백두산이",
    preview: "후기 본문이 들어가는 영역입니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 이 기상과 이 맘으로 충성을 다하여 외로우나 즐거우나 나라 사랑하세"
}

const ReviewBanner = () => {
    return (
        <BannerBlock>
            {/* img src */}
            <Cover>
                <ContentWrap>
                    <StyledSVG src={leftIcon} />
                    <MainContentBlock>
                        <h1>상담 후기</h1>
                        <small>모두 직접 작성해주신 상담 후기들입니다</small>
                        <ReviewContent item={SampleReview}/>
                        <LineButton>상담 문의하기</LineButton>
                    </MainContentBlock>
                    <StyledSVG src={rightIcon} />
                </ContentWrap>
            </Cover>
        </BannerBlock>
    );
};

export default ReviewBanner;