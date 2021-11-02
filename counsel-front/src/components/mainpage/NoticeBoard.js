import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Notices from './Notices';
import Events from './Events';

const BoardBlock = styled(Responsive)`
    margin-bottom: 8.75rem;
    display: flex;

    div:first-child {
        margin-right:3.125%;
    }
`;

const NoticeBoard = () => {

    //미디어 정해지면 미디어에 따라 배치 방법을 변경해야 합니다.
    //우선은 웹버전 기준으로 레이아웃을 구현합니다.
    return (
        <section>
            <BoardBlock>
                <Notices />
                <Events />
            </BoardBlock>
        </section>
    );
};

export default NoticeBoard;