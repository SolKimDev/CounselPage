import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { rem } from "polished";

import Inputbox from "../../components/login/Inputbox";
import { login } from "../../lib/api/auth";

const Login = ({ setIsLoggedIn }) => {
  const [isIDEmpty, setIsIDEmpty] = useState(false);
  const [isPWEmpty, setIsPWEmpty] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [valueID, setValueID] = useState("");
  const [valuePW, setValuePW] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    valueID === "" ? setIsIDEmpty(true) : setIsIDEmpty(false);
    valuePW === "" ? setIsPWEmpty(true) : setIsPWEmpty(false);
    login(valueID, valuePW) ? setIsLoggedIn(true) : setIsFailed(true);
  };

  return (
    <ContentWrap>
      <Helmet>
        <title>상호명 관리자 페이지 - 로그인</title>
      </Helmet>
      <LoginBlock onSubmit={onSubmit}>
        <InnerBlock>
          <TitleBlock>
            <LogoTemp /> 관리자 페이지
          </TitleBlock>
          <InputBlock>
            <Inputbox
              isPassword={false}
              isEmpty={isIDEmpty}
              value={valueID}
              setValue={setValueID}
            />
            <Inputbox
              isPassword={true}
              isEmpty={isPWEmpty}
              value={valuePW}
              setValue={setValuePW}
            />
          </InputBlock>
          <ButtonBlock>
            <ErrorMsg>
              {isIDEmpty || isPWEmpty || isFailed
                ? "ID 혹은 비밀번호가 올바르지 않습니다. 다시 한 번 확인해 주세요."
                : ""}
            </ErrorMsg>
            <LoginButton>로그인</LoginButton>
          </ButtonBlock>
        </InnerBlock>
      </LoginBlock>
    </ContentWrap>
  );
};

export default Login;

const ContentWrap = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${palette.BG[0]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBlock = styled.form`
  width: ${rem(880)};
  height: ${rem(520)};
  background-color: ${palette.BG[1]};
  padding: ${rem(44) + " " + rem(52) + " " + rem(20) + " " + rem(52)};
  box-sizing: border-box;
`;

const InnerBlock = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 2px solid ${palette.Line[1]};
`;

const TitleBlock = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: ${rem(36)};
  font-weight: 500;
  color: ${palette.Font[0]};
  margin-bottom: ${rem(104)};
`;

const LogoTemp = styled.div`
  width: ${rem(240)};
  height: ${rem(64)};
  background-color: ${palette.Font[2]};
  margin-right: ${rem(24)};
`;

const InputBlock = styled.div`
  width: 100%;
  padding: 0 ${rem(24)};

  margin-bottom: ${rem(48)};
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: ${rem(45)};
`;

const LoginButton = styled.button`
  width: ${rem(93)};
  height: ${rem(40)};
  background-color: ${palette.Font[0]};
  border: none;
  border-radius: ${rem(5)};

  color: white;
  font-size: ${rem(20)};
  font-weight: 400;

  cursor: pointer;

  &:hover {
    background-color: ${palette.Font[1]};
  }
`;

const ErrorMsg = styled.p`
  display: flex;
  align-items: center;
  font-size: ${rem(20)};
  color: ${palette.Alert};
`;
