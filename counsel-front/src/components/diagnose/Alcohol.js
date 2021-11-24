import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import { Data_Alcohol } from '../../lib/ListedItems';
import TableAlcohol from './TableAlcohol';
import LineButton from '../common/LineButton';
import ModalResult from './ModalResult';

const TitleBlock = styled.div`
    h2 {
        font-size: 1.333em;
    }
    small {
        font-size: 0.833em;
        span {
            font-weight: bold;
            color: ${palette.Brand_Main[2]};
        }
    }

    margin-bottom: 3.125rem;
`;

const FormBlock = styled.form`
    table { width: 100%; word-break: keep-all; }
    table > thead { height: 3.75rem; background-color:${palette.Brand_Main[2]}; color: white; }
    table > thead * { font-weight:400; 
        *:not(*:first-child) {
            border-left: 1px solid ${palette.Line[1]};
        }

        border-bottom: 1px solid ${palette.Line[1]};
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
        padding: 1.563rem 1.938rem;
        box-sizing: border-box;
    }

    table * {
        //border: 1px solid black;
    }

    .labl {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        height: 7.75rem;
    }

    .labl > input {
        visibility: hidden;
        position: absolute;
    }

    .labl > div {
        display: flex;
        height: 7.75rem;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .labl > input:checked + div {
        display: flex;
        height: 7.75rem;
        background-color: ${palette.Brand_Main[2]};
        color: white;
        align-items: center;
        justify-content: center;
    }

    & > p {
        margin-bottom: 1rem;
        & > label {
            margin: 0.5rem;
            & > input {
                margin-left : 0.2rem;
            }
        }
    }

    margin-bottom: 8rem;
`;

const GuideText = styled.div`
    color: ${palette.Font[1]};
    margin-bottom: 7.5rem;
    font-size: 0.8em;
    text-align: right;
`;

const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
`;

const Alcohol = () => {
    const [isFilled, setIsFilled] = useState(false);
    const [isModalVisable, setIsModalVisable] = useState(false);
    const [isGenderChecked, setIsGenderChecked] = useState(false);
    const [genderSelected, setGenderSelected] = useState('');
    const [result, setResult] = useState({});
    
    const checkRequired = (e) => {
        //console.log('cr() called!');

        const inputList = document.querySelectorAll( '.labl input' );
        let total = 0;
        inputList.forEach((item) => (
            item.checked ? total ++ : '' //NOP
        ));

        //console.log({total});
        //console.log({isGenderChecked});
        if((total >= 10) && isGenderChecked)
            setIsFilled(true);
    }

    const handleGenderSelected = async (e) => {
        //console.log('hgs() called!');
        setGenderSelected(e.target.value);
        setIsGenderChecked(true);
    }

    useEffect(() => {
        checkRequired();
    }, [isGenderChecked]);


    //=====================================MODAL==========================//

    const calcResult = () => {
        const inputList = document.querySelectorAll( '.labl input' );

        let total = 0;
        inputList.forEach((item) => (
            item.checked ? total += parseInt(item.value) : '' //NOP
        ));

        console.log('cr() called!');
        let type = 0;

        if(genderSelected === 'male') {
            switch(true) {
                case (total < 10) :
                    type = 0;
                    break;
                case (total > 9) && (total < 20):
                    type = 1;
                    break;
                case (total > 19):
                    type = 2;
            }
        } else {
            switch(true) {
                case (total < 6) :
                    type = 0;
                    break;
                case (total > 5) && (total < 10):
                    type = 1;
                    break;
                case (total > 9):
                    type=2;
            }
        }

        switch (type) {
            case 0: 
                return {
                    type,
                    score : total,
                    title : '정상음주군',
                    text : ['비교적 건강하고 안전한 음주습관을 지니고 있습니다.',
                            '적정 음주량을 유지하고 건강한 음주지침을 지켜주세요.']
                }
            case 1:
                return {
                    type,
                    score : total,
                    title : '위험음주군',
                    text : ['음주량과 음주횟수가 너무 많은 편입니다.',
                            '현재 술 때문에 큰 문제가 없지만, 음주문제의 예방을 위해 주기적으로 음주행동을 점검할 것을 권장합니다.',
                            '전문요원에게 상담을 받을 것을 권장합니다.']
                }
            case 2:
                return {
                    type,
                    score : total,
                    title : '알코올 사용장애 추정군',
                    text : ['음주량과 음주횟수의 조절이 어려운 상태입니다.',
                            '술을 마셔야 기분이 좋고, 일이 잘되거나 관계가 좋아진다고 생각합니다.',
                            '술을 줄이는 단계가 아니라 절주가 필요합니다.',
                            '전문 병의원 및 알코올 상담센터 등에서의 전문적인 진단과 치료가 필요합니다.']
                }
        }
    }

    const showResult = (e) => {
        e.preventDefault();
        setResult(calcResult);
        setIsModalVisable(true);
    }

    const closeModal = () => {
        console.log('cm() called!');
        setIsModalVisable(false);
    }


    return (
        <>
            <ModalResult visible={isModalVisable? 1 : 0} result={result} onClose={closeModal}/>
            <Responsive>
                <TitleBlock>
                <h2>알코올 사용 장애 선별 검사( AUDIT-K )</h2>
                <small>다음 각 문항 중 자신에게 해당되는 답변을 선택해 주십시오. 질문의 1잔은<span className='boldtext'>술의 종류와 관계없이</span> 1잔의 양을 의미합니다.</small>
            </TitleBlock>
                <FormBlock onChange={checkRequired} onSubmit={showResult}>
                    <p>응답자 성별 : 
                        <label>남성<input type="radio" name="gender" value='male' onChange={handleGenderSelected} required/></label>
                        <label>여성<input type="radio" name="gender" value='female' onChange={handleGenderSelected} required /></label>
                    </p>
                    <table>
                        <thead><tr><th>문항 내용</th><th>0점</th><th>1점</th><th>2점</th><th>3점</th><th>4점</th></tr></thead>
                        <tbody>
                            {Data_Alcohol.map((item, index) => (
                                <TableAlcohol item={item} index={index} key={index}/>
                            ))}
                        </tbody>
                    </table>
                    <GuideText>1주일 권장 음주량은 다음과 같습니다. &nbsp;&nbsp;&nbsp; 남성: 12잔 미만 | 여성 및 65세 이상 노인 : 5잔 미만</GuideText>
                    <ButtonArea>
                        {isFilled ? (<LineButton brand>결과 확인</LineButton>) : (<LineButton disabled>결과 확인</LineButton>)}
                    </ButtonArea>
                    {/* <p onClick={showResult}>openmodal</p> */}
                </FormBlock>
            </Responsive>
        </>
    );
};

export default Alcohol;