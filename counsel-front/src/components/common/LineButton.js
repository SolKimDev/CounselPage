import React from 'react';
import styled from 'styled-components';

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
`;

const LineButton = ({ children }) => {
    return (
        <ButtonBlock>
            {children}
        </ButtonBlock>
    );
};

export default LineButton;