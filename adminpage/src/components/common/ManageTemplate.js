import { rem } from "polished";
import React from "react";
import styled from "styled-components";

import SVG from "react-inlinesvg";

import { palette, fonts } from "../../lib/styles";
import {
  Dashboard,
  Banner,
  Reservation,
  FAQ,
  Security,
} from "../settings/pages";

const pageMap = {
  Dashboard,
  Banner,
  Reservation,
  FAQ,
  Security,
};

const ManageTemplate = ({ MenuMap, currentPage, IconMap }) => {
  const title = MenuMap[currentPage];
  const PageObject = pageMap[currentPage];
  return (
    <ContentWrap>
      <TitleBlock>
        <CurrentMenuIcon src={IconMap[currentPage]} />
        {title}
      </TitleBlock>
      <ContentBlock>
        <PageObject />
      </ContentBlock>
    </ContentWrap>
  );
};

export default ManageTemplate;

const ContentWrap = styled.div`
  width: 100%;
  background-color: ${palette.BG[0]};
  padding: ${rem(32) + " " + rem(64) + " " + rem(72) + " " + rem(64)};
  box-sizing: border-box;
`;

const TitleBlock = styled.h1`
  display: flex;
  align-items: center;
  font-size: ${rem(40)};
  font-weight: ${fonts.Bold};
`;

const CurrentMenuIcon = styled(SVG)`
  width: ${rem(40)};
  height: ${rem(40)};

  margin-right: ${rem(8)};

  fill: ${palette.Font[0]};
`;

const ContentBlock = styled.section`
  // TODO : 화면 크기에 따라 전체 크기 및 내부 컨텐츠 영역이 변할 수 있도록 작업해야 합니다.
  width: ${rem(1476)};
  height: ${rem(836)};
  padding: ${rem(51) + " " + rem(32) + " " + rem(34) + " " + rem(32)};
  box-sizing: border-box;

  background-color: ${palette.BG[1]};
`;
