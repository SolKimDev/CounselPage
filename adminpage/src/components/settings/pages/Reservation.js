import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

export const Reservation = () => {
  return (
    <>
      <Helmet>
        <title>상호명 관리자 페이지 - 예약 관리</title>
      </Helmet>
      <ContentWrap>reservation</ContentWrap>
    </>
  );
};

const ContentWrap = styled.article``;
