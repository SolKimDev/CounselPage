import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const MapBlock = styled(Responsive)`
    display: flex;
    height: 24.063rem;

    margin-bottom: 13.75rem;
`

const MapDummy = styled.div`
    width: 66.4%;
    height: 100%;
    background-color: ${palette.BG[0]};
`;

const InfoBlock = styled.div`
    width: 33.6%;
    min-width: 26.875rem;
    height: 100%;
    background-color: ${palette.Brand_Main[2]};
    position: relative;
`;

const TextBlock = styled.div`
    margin-left: 1.25rem;
    margin-bottom: 1.25rem;
    color: white;
    font-weight: 300;

    position: absolute;
    bottom: 0px;
`;

const Map = () => {
    return (
        <MapBlock>
            <MapDummy />
            <InfoBlock>
                <TextBlock>
                    (도로명) 제주특별자치도 제주시 첨단로 242<br />
                    (지번) 제주특별자치도 제주시 영평동 2181<br />
                    (우) 63309<br />
                    TEL. 010-1234-5678
                </TextBlock>
            </InfoBlock>
        </MapBlock>
    );
};

export default Map;