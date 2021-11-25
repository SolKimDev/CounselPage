import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import LineButton from '../common/LineButton';

import checkIcon from '../../rsrc/icons/check_green.svg';
import warningIcon from '../../rsrc/icons/warning.svg';
import alertIcon from '../../rsrc/icons/alert.svg';

const Fullscreen = styled.div`
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AskModalBlock = styled.div`
    padding: 3.125rem 3.75rem 3.75rem 3.75rem;
    box-sizing: border-box;
    text-align: center;
    background: white;
    padding: 1.5rem;
    border-radius: 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
    h2 {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    p {
        margin-bottom: 3rem;
    }
`;

const IconArea = styled.img`
    width: 4.375rem;
    height: 4.375rem;
    margin-bottom: 1.25rem;
    //background-color: gray;
`;

const MsgBlock = styled.div`
    h2 {
        font-size: 1.583em;
        //color: ${palette.Brand_Main[2]};
        margin-bottom: 3.125rem;
    }
    
    div {
        text-align: left;
        
        li::before {
            content: '– '
        }

        li {
            list-style: none;
            font-size: 0.833em;
            word-break: keep-all;

            list-style-position: inside;
            text-indent: -1rem;
            margin-left: 1rem;
            margin-bottom: .2rem;
        }
    }


    max-width: 30.313rem;
    margin-bottom: 3.125rem;
`;

const ButtonArea = styled.div`
    display: flex;
    justify-content: center;

    *:first-child {
        margin-right: 0.313rem;
    }

    button {
        max-width: 15rem;
    }
`;

const StyledTitle = styled.h2`
    ${(props) => 
        css`
            color:${props.color};
        `}
`;

const ModalResult = ({ visible, result, onClose }) => {
    const [source, setSource] = useState('');
    const [titleColor, setTitleColor] = useState('');
    const { type, title, text } = result;

    useEffect(() => {
        selectSource(type);
        selectTitleColor(type);
    },[type]);

    const selectSource = (type) => {
        switch (type) {
            case 0:
                setSource(checkIcon);
                break;
            case 1:
                setSource(warningIcon);
                break;
            case 2:
                setSource(alertIcon);
                break;
        }
    }

    const selectTitleColor = (type) => {
        switch (type) {
            case 0:
                setTitleColor("#95D46C");
                break;
            case 1:
                setTitleColor("#F0C419");
                break;
            case 2:
                setTitleColor("#E5322E");
                break;
        }
    }

    if (!visible) return null;

    return (
        <Fullscreen>
            <AskModalBlock>
                <IconArea src={source}/>
                <MsgBlock>
                    <StyledTitle color={titleColor}>{title}</StyledTitle>
                    <div>
                        <ul>
                            {text.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </MsgBlock>
                <ButtonArea>
                    <LineButton brand>상담 신청</LineButton>
                    <LineButton brand onClick={onClose}>닫기</LineButton>
                </ButtonArea>
            </AskModalBlock>
        </Fullscreen>
    );
};

export default ModalResult;