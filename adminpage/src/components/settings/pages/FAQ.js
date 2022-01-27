import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

export const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>상호명 관리자 페이지 - FAQ 관리</title>
      </Helmet>
      <ContentWrap>FAQ</ContentWrap>
    </>
  );
};

const ContentWrap = styled.article``;
