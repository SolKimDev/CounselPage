import React from "react";
import styled from "styled-components";

import { rem } from "polished";
import { palette } from "../../lib/styles";
import NavItem from "./NavItem";

const SideMenu = ({ MenuMap, setCurrentPage, currentPage }) => {
  const MenuArray = Object.entries(MenuMap);
  return (
    <SideBlock>
      <NavBlock>
        {MenuArray.map((Item) => (
          <NavItem key={Item[0]} setCurrentPage={setCurrentPage} keyOfMap={Item[0]} currentPage={currentPage}>
            {Item[1]}
          </NavItem>
        ))}
      </NavBlock>
    </SideBlock>
  );
};

export default SideMenu;

const SideBlock = styled.aside`
  background-color: ${palette.BG[1]};
  box-sizing: border-box;
  width: ${rem(316)};
  padding: ${rem(43) + " " + rem(24) + " 0 " + rem(24)};
`;

const NavBlock = styled.nav``;
