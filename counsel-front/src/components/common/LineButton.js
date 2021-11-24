import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const ButtonBlock = styled.button`
    border: 1px solid white;
    font-weight: 400;
    font-size: 1em;
    background: none;
    color: white;
    padding: 0.75rem 3.5rem;
    width: fit-content;

    cursor: pointer;

    &:hover {
        color: black;
        background-color: white;
        font-weight: 600;
    }
    ${(props) => 
        props.disabled &&
        css`
        color: ${palette.Font[1]};
        font-weight: 600;
        border: 1px solid ${palette.Font[1]};
        cursor: default;

        &:hover {
            color: ${palette.Font[1]};
            font-weight: 600;
        }
    `}

    ${(props) => 
        props.blue &&
        css`
        color: ${palette.Font[1]};
        font-weight: 600;
        border: 1px solid ${palette.Font[0]};

        &:hover {
            border 1px solid ${palette.Font[0]};
            background: ${palette.Font[0]};
            color: white;
        }
    `}

    ${(props) => 
        props.brand &&
        css`
        color: white;
        font-weight: 600;
        border 1px solid ${palette.Brand_Main[2]};
        background: ${palette.Brand_Main[2]};

        &:hover {
            color: ${palette.Font[0]};
            border 1px solid ${palette.Brand_Main[3]};
            background: ${palette.Brand_Main[3]};
        }
    `}
`;

const LineButton = (props) => {
    const { disabled, blue, brand, onClick} = props;
    return (
        <ButtonBlock disabled={disabled ? 1:0} blue={blue ? 1 : 0} brand={brand ? 1:0} onClick={onClick}>
            {props.children}
        </ButtonBlock>
    );
};

export default LineButton;