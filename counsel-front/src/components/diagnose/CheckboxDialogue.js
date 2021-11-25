import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Checked from '../../rsrc/icons/Components/CheckboxChecked.svg';
import LineButton from '../common/LineButton';
import ModalResult from './ModalResult';
import getCheckboxResult from './Results';

const FormBlock = styled.form`
    table { width: 100%; margin-bottom: 7.5rem;}
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

const StyledCheckbox = styled.div`
    width: 1.875rem;
    height: 1.875rem;
    background-color: white;
    border-radius: 20px;
    border: 2px solid ${palette.Line[1]};

    cursor: pointer;
`;

const StyledLabel = styled.label`
    display: flex;
    justify-content: center;

    img {
        visibility: hidden;
    }

    & > input {
        visibility: hidden;
        position: absolute;
    }

    & > input:checked + div{
        background-color: ${palette.Brand_Main[2]};
        border: none;

        & > img {
            visibility: visible;
        }
    }
`;

const ButtonArea = styled.div`
    display: flex;
    justify-content: center;

    margin-bottom: 7.5rem;
`;

const StyledInput = styled.input`
`;

const CheckboxDialogue = ({ title, items, url }) => {
    const [isFilled, setIsFilled] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [result, setResult] = useState({});

    const num = title.length-1;

    const checkRequired = () => {
        const inputList = document.querySelectorAll( '.diagnoseCB' );
        let total = 0;
        inputList.forEach((item) => (
            item.checked ? total ++ : '' //NOP
        ));

        //console.log({total});
        if((total >= items.length))
            setIsFilled(true);
    }

    const calcResult = () => {
        const inputList = document.querySelectorAll( '.diagnoseCB' );
        let total = 0;
        inputList.forEach((item) => (
            item.checked ? total += parseInt(item.value) : total += 0
        ));
        
        return getCheckboxResult( url, total );
    }

    const showResult = (e) => {
        e.preventDefault();
        setResult(calcResult);
        setIsModalVisible(true);
    }

    const closeModal = () => {
        console.log('cm() called!');
        setIsModalVisible(false);
    }

    return (
        <>
            <ModalResult visible={isModalVisible? 1 : 0} result={result} onClose={closeModal}/>
            <FormBlock onChange={checkRequired} onSubmit={showResult}>
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
                            <tr key={index}><td>{item.text}</td>
                            {[...Array(num)].map((n, subIndex) => {
                                return (
                                    <td key={index+'_'+subIndex}><StyledLabel><StyledInput type="radio" name={ "table_"+index } className='diagnoseCB' value={item.reverse ? (num-1)-parseInt(subIndex) : subIndex}/><StyledCheckbox className="StyledCB"><img src={Checked}/></StyledCheckbox></StyledLabel></td>
                                )
                            })}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p onClick={showResult}>showModal</p>
                <p>url = {url}</p>
                <ButtonArea>
                    {isFilled ? (<LineButton brand>결과 확인</LineButton>) : (<LineButton disabled>결과 확인</LineButton>)}
                </ButtonArea>
            </FormBlock>
        </>
    );
};

export default CheckboxDialogue;