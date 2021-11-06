import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import MenuItem from './MenuItem';

const HeaderBlock = styled.header`
    position: fixed;
    z-index: 5;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
    display: flex;
    justify-content: space-between;
`;

const Spacer = styled.div`
    height: 5rem;

    /**********************TABLET RESOLUTIONS*******************/

    @media ( max-width: 1024px ) {
        height: 3.125rem;
    }
`;

// 레이아웃 확인을 위해 사용하는 임시 개체입니다.
const Logo = styled.div`
    width: 19.313rem;
    height: 5rem;
    background: ${palette.Font[1]};

    &:hover {
        background: ${palette.Font[2]};
    } 

    /**********************TABLET RESOLUTIONS*******************/

    @media ( max-width: 1024px ) {
        width: 12.063rem;
        height: 3.125rem;
    }
`;

//메뉴 내비게이션 블록입니다.
const MenuBlock = styled.nav`
    width: 41.25rem;
    height: 5rem;
    ul {
        display: flex;
        justify-content: space-around;
    }

    /**********************TABLET RESOLUTIONS*******************/
    @media ( max-width: 1024px ) {
        width: 23.75rem;
        height: 3.125rem;

        font-size: 0.666em;
    }
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">
                        <Logo></Logo>
                    </Link>
                    <MenuBlock>
                        <ul>
                            <MenuItem>센터 안내</MenuItem>
                            <MenuItem>게시판</MenuItem>
                            <MenuItem>자가진단</MenuItem>
                            <MenuItem>상담 안내</MenuItem>
                            <MenuItem>상담 신청</MenuItem>
                        </ul>
                    </MenuBlock>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;