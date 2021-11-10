import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const IconBlock = styled.div`
    min-width: 3rem;
    width: fit-content;
    height: 2.563rem;
    border-radius: 0.938rem;
    padding: 0 1rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-weight: 700;
    
    background-color: ${palette.Notice[0]};

    ${(props) =>
        props.event &&
        css`
            background-color: ${palette.Notice[2]};
        `}

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        width: 12.266vw;
        height: 2.832vh;
    }
`;

/*
    파라미터 없을 경우 기본적으로 '공지'
    event 파라미터 전달하면 이벤트 아이콘으로 변경.
*/
const NoticeIcon = (props) => {
    const [text, setText] = useState('공지');

    useEffect(() => {
        props.event && setText('이벤트');
    }, [props.event]);

    return (
        <IconBlock event={props.event ? 1 : 0 }>
            {text}
        </IconBlock>
    );
};

export default NoticeIcon;