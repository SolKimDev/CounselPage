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
`;

const LineButton = (props) => {
    return (
        <ButtonBlock blue={props.blue ? 1 : 0}>
            {props.children}
        </ButtonBlock>
    );
};

export default LineButton;