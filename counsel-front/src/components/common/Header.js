import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const FullHeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const TabletHeaderBlock = styled.div`

`;

const MobileHeaderBlock = styled.div`

`;

const Wrapper = styled(Responsive)`
    display: flex;
    justify-content: space-between;
`;

const Spacer = styled.div`
    height: 5rem;
`;

// 레이아웃 확인을 위해 사용하는 임시 개체입니다.
const Logo = styled.div`
    width: 19.313rem;
    height: 5rem;
    background: ${palette.Font[1]};

    &:hover {
        background: ${palette.Font[2]};
    } 
`;

const MenuBlock = styled.nav`
    width: 41.25rem;
    display: flex;
    justify-content: space-around;
`;

const MenuItem = styled.div`
    color: ${palette.Font[1]};
    height: 5rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        color: ${palette.Font[0]};
    }
`;

const Header = () => {
    return (
        <>
            <FullHeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">
                        <Logo></Logo>
                    </Link>
                    <MenuBlock>
                        <MenuItem>센터 안내</MenuItem>
                        <MenuItem>게시판</MenuItem>
                        <MenuItem>자가진단</MenuItem>
                        <MenuItem>상담 안내</MenuItem>
                        <MenuItem>상담 신청</MenuItem>
                    </MenuBlock>
                </Wrapper>
            </FullHeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;