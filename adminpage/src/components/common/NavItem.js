import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import SVG from "react-inlinesvg";

import { rem } from "polished";
import { palette, fonts } from "../../lib/styles";

const NavItem = ({
  children,
  setCurrentPage,
  keyOfMap,
  currentPage,
  IconSrc,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClick = () => {
    setCurrentPage(keyOfMap);
  };

  useEffect(() => {
    setIsSelected(keyOfMap === currentPage);
  }, [keyOfMap, currentPage]);

  return (
    <ItemBlock onClick={onClick} isSelected={isSelected}>
      <SideMenuIcon src={IconSrc} />
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

    & > svg {
      fill: ${palette.Font[0]};
    }
  }

  ${(props) =>
    props.isSelected &&
    css`
      font-weight: ${fonts.Bold};
      color: ${palette.Brand_Main[2]};
      border-bottom: 3px solid ${palette.Brand_Main[2]};

      & > svg {
        fill: ${palette.Brand_Main[2]};
      }

      &:hover {
        & > svg {
          fill: ${palette.Brand_Main[2]};
        }
      }
    `}
`;

const SideMenuIcon = styled(SVG)`
  width: ${rem(32)};
  height: ${rem(32)};

  margin-right: ${rem(12)};

  fill: ${palette.Font[1]};
`;
