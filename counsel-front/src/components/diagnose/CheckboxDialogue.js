import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const FormBlock = styled.form`
    table { width: 100%; }
    table > thead { height: 3.75rem; background-color:${palette.Brand_Main[2]}; color: white; }
    table > thead * { font-weight:400; 
        *:not(*:first-child) {
            border-left: 1px solid ${palette.Line[1]};
        }
    }
    table > thead, tbody {
        & > tr {
            & > td:first-child, th:first-child {
                width: 60%;
            }

            & > th:not(th:first-child) {
                width: 8%;
            }

            & > td:not(td:first-child) {
                text-align: center;
            }
        }
    }
    table > tbody > tr {
        height: 5.313rem;
        background-color: ${palette.BG[0]};
        border-bottom: 1px solid ${palette.Line[1]};
    }

    table > tbody > tr > td:not(td:first-child) {
        border-left: 1px solid ${palette.Line[1]};
    }

    table > tbody > tr > td:first-child {
        padding: 0 1.938rem;
    }

    table * {
        //border: 1px solid black;
    }
`;

const CheckboxDialogue = ({ title, items }) => {
    return (
        <FormBlock>
            <table>
                <thead>
                    <tr>
                        {title.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr><td>{item.text}</td></tr>
                    ))}
                </tbody>
            </table>
        </FormBlock>
    );
};

export default CheckboxDialogue;