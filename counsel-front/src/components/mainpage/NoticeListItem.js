import React, { useEffect, useState } from 'react';
import palette from '../../lib/styles/palette';
import styled, { css } from 'styled-components';

const ItemBlock = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 0.625rem;
`;

const NoticeType = styled.div`
    display: flex;
    justify-content: center;

    width: 5.25rem;
    margin-right: 0.625rem;
    font-weight: 700;
    color: ${palette.Font[2]};

    ${(props) =>
        props.notice &&
        css`
            color: ${palette.Notice[0]};
    `}

    ${(props) =>
        props.event &&
        css`
            color: ${palette.Notice[2]};
    `}

`;

const Title = styled.div`
    width: 84.838%;
    color: ${palette.Font[2]};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${(props) =>
        props.content && 
        css`
            color: ${palette.Font[0]};
            cursor: pointer;

            &:hover {
                font-weight: bold;
            }
    `}
`;

const NoticeListItem = (props) => {
    const [type, setType] = useState('준비중');
    const [text, setText] = useState('준비중입니다...');

    useEffect(() => {
        if(props.item) {
            switch(props.item.type) {
                case 'notice':
                    setType('공지');
                    break;
                case 'event':
                    setType('이벤트');
                    break;
                default:
            }
            setText(props.item.title);
        }
    }, [props.item]);

    if(props.item) {
        switch(props.item.type) {
            case 'notice':
                return (
                    <ItemBlock>
                        <NoticeType notice>{ type }</NoticeType>
                        <Title content>{ text }</Title>
                    </ItemBlock>
                );
            case 'event':
                return (
                    <ItemBlock>
                        <NoticeType event>{ type }</NoticeType>
                        <Title content>{ text }</Title>
                    </ItemBlock>
                )
            default:
        }
    } else {
        return(
            <ItemBlock>
                <NoticeType>{ type }</NoticeType>
                <Title>{ text }</Title>
            </ItemBlock>
        )
    }
};

export default NoticeListItem;