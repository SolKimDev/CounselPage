import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

export const Banner = () => {
  return (
    <>
      <Helmet>
        <title>상호명 관리자 페이지 - 배너 설정</title>
      </Helmet>
      <ContentWrap>banner</ContentWrap>
    </>
  );
};

const ContentWrap = styled.article``;
