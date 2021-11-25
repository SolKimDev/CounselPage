import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import CheckboxDialogue from './CheckboxDialogue';

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

const TableTitle = ['문항 내용','1일 이하','1~2일','3~4일','5~7일'];
const TableItem = [
    {text:'평소에는 아무렇지도 않던 일들이 귀찮게 느껴졌다.'},
    {text:'먹고 싶지 않았다. 입맛이 없었다.'},
    {text:'가족이나 친구가 도와주더라도 울적한 기분을 떨쳐 버릴 수 없었다.'},
    {text:'다른 사람들만큼 능력이 있다고 느꼈다.', reverse:true},
]

const Anxiety = () => {
    return (
        <Responsive>
            <TitleBlock>
            <h2>불안검사</h2>
            <small>아래에 적혀 있는 문항을 잘 읽은 후, 오늘을 포함하여 <span className='boldtext'>지난 한 달 동안</span> 느끼고 행동한 것을 가장 잘 나타내는 항목을 선택해 주십시오.</small>
        </TitleBlock>
            <CheckboxDialogue title={TableTitle} items={TableItem} />
        </Responsive>
    );
};

export default Anxiety;