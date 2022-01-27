import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { rem } from "polished";
import { palette, fonts } from "../../lib/styles";

const NavItem = ({ children, setCurrentPage, keyOfMap, currentPage }) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClick = () => {
    setCurrentPage(keyOfMap);
  };

  useEffect(() => {
    setIsSelected(keyOfMap === currentPage);
  }, [keyOfMap, currentPage]);

  return (
    <ItemBlock onClick={onClick} isSelected={isSelected}>
      <IconTemp>
        {/* TODO : 아이콘 표시를 위한 임시값입니다. 이후 각 아이콘을 할당해야 합니다. */}
        {keyOfMap.charAt(0)}
      </IconTemp>
      {children}
    </ItemBlock>
  );
};

export default NavItem;

const ItemBlock = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background-color: transparent;
  width: 100%;

  color: ${palette.Font[0]};
  font-size: ${rem(28)};
  font-weight: ${fonts.Regular};

  height: ${rem(56)};
  box-sizing: border-box;
  padding-bottom: ${rem(14)};
  border-bottom: 1px solid ${palette.Line[1]};

  margin-bottom: ${rem(24)};

  cursor: pointer;

  &:hover {
    font-weight: ${fonts.Bold};
  }

  ${(props) =>
    props.isSelected &&
    css`
      font-weight: ${fonts.Bold};
      color: ${palette.Brand_Main[2]};
      border-bottom: 3px solid ${palette.Brand_Main[2]};
    `}
`;

const IconTemp = styled.div`
  width: ${rem(32)};
  height: ${rem(32)};
  background-color: ${palette.Font[1]};

  font-size: ${rem(20)};
  margin-right: ${rem(12)};
`;
