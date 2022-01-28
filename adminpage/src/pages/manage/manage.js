import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../components/common/Header";
import ManageTemplate from "../../components/common/ManageTemplate";
import SideMenu from "../../components/common/SideMenu";

import { rem } from "polished";

import Banner from "../../rsrc/icons/Banner.svg";
import Dashboard from "../../rsrc/icons/Dashboard.svg";
import FAQ from "../../rsrc/icons/FAQ.svg";
import Reservation from "../../rsrc/icons/Reservation.svg";
import Security from "../../rsrc/icons/Security.svg";

const MenuMap = {
  Dashboard: "대시보드",
  Banner: "배너 설정",
  Reservation: "예약 관리",
  FAQ: "FAQ 관리",
  Security: "보안 설정",
};

const IconMap = {
  Dashboard,
  Banner,
  Reservation,
  FAQ,
  Security,
};

const Manage = ({ setIsLoggedIn }) => {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  return (
    <>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <ContentWrap>
        <SideMenu
          MenuMap={MenuMap}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          IconMap={IconMap}
        />
        <ManageTemplate MenuMap={MenuMap} currentPage={currentPage} IconMap={IconMap}/>
      </ContentWrap>
    </>
  );
};

export default Manage;

const ContentWrap = styled.main`
  display: flex;
  width: 100%;
  min-height: calc(100vh - ${rem(80)}); // 100vh - heder height
`;
