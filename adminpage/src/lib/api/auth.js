import axios from "axios";
const client = axios.create();

// 모킹을 위한 고정된 임시값입니다.
export const tempData = {
  username: "user",
  password: "1234",
  token: "h2394jhDdy3rQk",
  IP: "1.2.3.4",
};

/*
 * TODO : 서버와의 통신을 통해 ID/PW가 맞는지 검증합니다.
 * 송신 : ID / PW / 현재 접속 IP
 * 수신 : ID / PW / IP 화이트리스 검사 후 적합한 경우 ID 값을 할당합니다.
 */
export const login = (username, password, currentIP) => {
  // 아래 로직은 백엔드 모킹하는 임시 로직입니다.

  const ctx = {
    status: "",
  };

  /* returns :
   * status : 401 / 500
   * token : access token
   */
  if (
    username === tempData.username &&
    password === tempData.password &&
    currentIP === tempData.IP
  ) {
    ctx.status = 500;
    ctx.token = tempData.token;
    return ctx;
  } else {
    ctx.status = 401;
    return false;
  }
};

/*
 * TODO : 백엔드 완성 이후 서버와 연동하도록 작성할 것
 */
export const logout = (token) => {
  // 아래 로직은 백엔드 모킹하는 임시 로직입니다.
  const ctx = {
    status: "",
  };

  ctx.status = 204;
  return ctx;
};
