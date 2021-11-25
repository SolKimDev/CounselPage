import React, { useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import CheckboxDialogue from './CheckboxDialogue';
import { Data_Depression } from '../../lib/ListedItems';
import { getType } from './Results';

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

const Depression = ({match}) => {
    const title = Data_Depression[0];
    const items = Data_Depression[1];

    return (
        <Responsive>
            <TitleBlock>
            <h2>우울검사 ( CES-D )</h2>
            <small>아래에 적혀 있는 문항을 잘 읽은 후, 오늘을 포함하여 <span className='boldtext'>지난 일주일 동안</span> 느끼고 행동한 것을 가장 잘 나타내는 항목을 선택해 주십시오.</small>
        </TitleBlock>
            <CheckboxDialogue title={title} items={items} url={getType(match.url)}/>
        </Responsive>
    );
};

export default Depression;