import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import rightIcon from '../../rsrc/icons/chevron-right-small.svg';

const ButtonBlock = styled.button`
    padding: 0.75rem 1.25rem 0.75rem 1.563rem;
    border: none;
    color:white;
    font-size: 1.15rem;
    font-weight: 600;
    background-color: #77A2C8;
    border-radius: 0.625rem;

    display: flex;
    align-items: center;

    cursor: pointer;

    &:hover {
        background-color: #A6C6E2;
    }

    & path {
        fill: none;
        stroke: white;
        stroke-width: 2;
    }
`;

const StyledSVG = styled(SVG)`
    width: 1.5rem;
    height: 1.5rem;
`;

const FilledButton = ({ children }) => {
    return (
        <ButtonBlock>
            {children}<StyledSVG src={rightIcon} />
        </ButtonBlock>
    );
};

export default FilledButton;