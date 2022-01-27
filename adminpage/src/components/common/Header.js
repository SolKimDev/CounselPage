import React from "react";
import styled from "styled-components";

import { rem } from "polished";
import { fonts, palette } from "../../lib/styles";

import SVG from "react-inlinesvg";
import logoutIcon from "../../rsrc/icons/logout.svg";

const Header = ({ setIsLoggedIn }) => {
  const onLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <HeaderBlock>
      <LogoTemp />
      <LogoutBlock onClick={onLogout}>
        <LogoutSVG src={logoutIcon} /> 로그아웃
      </LogoutBlock>
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;
  width: 100%;
  height: ${rem(80 - 2)}; // 80 - border
  border-bottom: 2px solid ${palette.Line[0]};
  padding: 0 ${rem(24)};
  box-sizing: border-box;
`;

const LogoTemp = styled.div`
  width: ${rem(220)};
  height: ${rem(60)};
  background-color: ${palette.Font[2]};
`;

const LogoutBlock = styled.button`
  display: flex;
  align-items: center;

  color: ${palette.Font[0]};
  font-weight: ${fonts.Medium};
  font-size: ${rem(24)};
  border: none;
  background-color: white;

  cursor: pointer;

  &:hover {
    font-weight: ${fonts.Bold};
    & > svg {
      fill: ${palette.Font[0]};
    }
  }
`;

const LogoutSVG = styled(SVG)`
  width: ${rem(24)};
  height: ${rem(24)};

  margin-right: ${rem(8)};

  fill: ${palette.Font[1]};
`;
