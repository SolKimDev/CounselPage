import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";

const Manage = ({ setIsLoggedIn }) => {
  return (
    <ContentWrap>
      <Header setIsLoggedIn={setIsLoggedIn} />
      manage
    </ContentWrap>
  );
};

export default Manage;

const ContentWrap = styled.main``;
