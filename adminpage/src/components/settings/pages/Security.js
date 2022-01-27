import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

export const Security = () => {
  return (
    <>
      <Helmet>
        <title>상호명 관리자 페이지 - 보안 설정</title>
      </Helmet>
      <ContentWrap>security</ContentWrap>
    </>
  );
};

const ContentWrap = styled.article``;
