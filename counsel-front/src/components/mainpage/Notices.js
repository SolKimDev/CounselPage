import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import SVG from 'react-inlinesvg';
import plusIcon from '../../rsrc/icons/plusbutton-medium.svg';
import NoticeIcon from '../common/NoticeIcon';
import NoticeListItem from './NoticeListItem';

const Wrapper = styled.div`
    width: 45%;
`;

const TitleBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    margin-bottom: 1.875rem;
`;

const StyledSVG = styled(SVG)`
    width: 3.75rem;
    height: 3.75rem;

    cursor: pointer;

    &:hover .st0{
        fill: ${palette.Line[0]};
    }
`;

const IconWrapper = styled.div`
    margin-right: 10px;
    cursor: pointer;
`;

const TopNoticeBlock = styled.div`
    width: 100%;
    margin-bottom: 1.25rem;

    cursor: pointer;
`;

const TopNoticeTitleBlock = styled.div`
    display: flex;

    margin-bottom: 1.875rem;
`;

const TopNoticeTitle = styled.div`
    font-weight: 500;
    font-size: 1.166em;

    width: 83.064%;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    cursor: pointer;

    &:hover {
        color: ${palette.Font[1]};
    }
`;

const TopNoticePreview = styled.p`
    color: ${palette.Font[1]};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.5em;
    height: 4.5em;

    cursor: pointer;

    &:hover {
        color: ${palette.Font[2]};
    }
`;

const HrWithMarginBottom = styled.hr`
    margin-bottom: 1.875rem;
`;

const NoticeListBlock = styled.div`

`;


const SampleNotice = {
    type: "notice",
    title: '공지 제목이 들어가는 영역입니다.',
    id: '1234'
}

const SampleLongNotice = {
    type: "notice",
    title: '공지 긴 글 제목이 들어가는 영역입니다. 길이가 긴 글은 영역이 넘어가는 경우 생략됩니다.',
    id: '5678'
}

const SampleEvent = {
    type: "event",
    title: '이벤트 제목이 들어가는 영역입니다.',
    id: '7890'
}

const Notices = () => {
    return (
        <Wrapper>
            <TitleBlock>    
                <h1>공지사항</h1>
                <StyledSVG src={plusIcon} />
            </TitleBlock>

            {/* 링크는 TopNoticeBlock에 먹이세요 */}
            <TopNoticeBlock>
                <TopNoticeTitleBlock>
                    <IconWrapper>
                        <NoticeIcon />
                    </IconWrapper>
                    <TopNoticeTitle>
                        힘들때 당신곁에. 전문상담사가 찾아갑니다.
                    </TopNoticeTitle>
                </TopNoticeTitleBlock>
                <TopNoticePreview className="preview">
                    작고 풍부하게 무엇이 열락의 이상의 때까지 것이다. 인간의 작고 황금시대를 청춘의 열락의 피에 운다. 커다란 몸이 인간이 풀밭에 인간의 유소년에게서 없는 군영과 모래뿐일 것이다. 따뜻한 고행을 풀이 부패를 미인을 착목한는
                </TopNoticePreview>
            </TopNoticeBlock>

            <HrWithMarginBottom/>

            {/* NoticeListBlock에서는 준비된 공지가 없을 경우, '준비중입니다'를 띄우도록 해야 합니다. */}
            <NoticeListBlock>
                <NoticeListItem item={ SampleNotice }/>
                <NoticeListItem item={ SampleLongNotice }/>
                <NoticeListItem item={ SampleEvent }/>
                <NoticeListItem />
                <NoticeListItem />
            </NoticeListBlock>
        </Wrapper>
    );
};

export default Notices;