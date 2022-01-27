import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

export const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>상호명 관리자 페이지 - 대시보드</title>
      </Helmet>
      <ContentWrap>dashboard</ContentWrap>
    </>
  );
};

const ContentWrap = styled.article``;
