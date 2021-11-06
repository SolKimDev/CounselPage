import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Notices from './Notices';
import Events from './Events';

const BoardBlock = styled(Responsive)`
    margin-bottom: 8.75rem;
    display: flex;
    justify-content: space-between;

    div:first-child {
        margin-right:3.125%;
    }

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        display: block;
        margin-bottom: 8rem;

        & >  div {
            margin-right: 0;
        }
    }
`;

const NoticeBoard = () => {
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
        return () => mql.removeEventListener("change", screenChange)
    }, [])

    return(
        <section>
            <BoardBlock>
                {mQuery?(
                    <>
                    <Events />
                    <Notices />
                    </>
                ) : (
                    <>
                    <Notices />
                    <Events />
                    </>
                )}
            </BoardBlock>
        </section>
    );
};

export default NoticeBoard;