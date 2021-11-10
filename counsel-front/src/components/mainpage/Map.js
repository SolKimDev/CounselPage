import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const MapBlock = styled(Responsive)`
    display: flex;
    width: 100%;
    height: 24.063rem;

    margin-bottom: 13.75rem;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        width: 100%;        
        display:block;
        padding: 0;
        height: auto;
        
        margin-bottom: 6.25rem;
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        margin-bottom: 30vh;
    }
`

const MapDummy = styled.div`
    width: 66.4%;
    height: 100%;
    background-color: ${palette.BG[0]};

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        width: 100%;
        height: 32.813rem;
    }
`;

const InfoBlock = styled.div`
    width: 33.6%;
    height: 100%;
    background-color: ${palette.Brand_Main[2]};
    position: relative;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        display: flex;
        justify-content: space-between;
        position: static;
        width: 100%;
        padding: 0 6.64%;
        box-sizing: border-box;
        height: 8.75rem;
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        position: relative;
        padding: 0 4%;
    }
`;

const TextBlock = styled.div`
    margin-left: 1.25rem;
    margin-bottom: 1.25rem;
    color: white;
    font-weight: 300;
    font-size: 0.833em;

    position: absolute;
    bottom: 0px;

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {

        position: static;
        margin: 0;
        padding-top: 2.313rem;
        font-size: 0.833em;
    }

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        font-size: 0.6em;
        margin-bottom: 3vh;
        position: absolute;
        bottom: 0;
    }
`;

const TextRight = styled.div`
    position: static;
    padding-top: 5.5rem;
    color: white;

    /**********************MOBILE RESOLUTIONS*******************/
    @media ( max-width: 640px ) {
        font-size: 0.65em;
        margin-bottom: 3vh;
        position: absolute;
        bottom: 0;
        right: 4vw;
    }
`;

const Map = () => {
    const [mQuery, setMQuery] = useState(
        window.innerWidth < 1024 ? true : false
    );

    const screenChange = (event) => {
        const matches = event.matches;
        setMQuery(matches);
    }

    useEffect(() => {
        let mql = window.matchMedia("screen and (max-width: 1024px)");
        mql.addEventListener("change", screenChange);
        return() => mql.removeEventListener("change", screenChange);
    }, [])

    return (
        <MapBlock>
            <MapDummy />
            <InfoBlock>
                {mQuery?(
                <>
                <TextBlock>
                    (도로명) 제주특별자치도 제주시 첨단로 242<br />
                    (지번) 제주특별자치도 제주시 영평동 2181<br />
                    (우) 63309<br />
                </TextBlock>
                <TextRight>
                    TEL. 010-1234-5678
                </TextRight>
                </>
                ):(
                <>
                <TextBlock>
                    (도로명) 제주특별자치도 제주시 첨단로 242<br />
                    (지번) 제주특별자치도 제주시 영평동 2181<br />
                    (우) 63309<br />
                    TEL. 010-1234-5678
                </TextBlock>
                </>)}
            </InfoBlock>
        </MapBlock>
    );
};

export default Map;