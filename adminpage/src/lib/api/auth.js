import axios from "axios";
const client = axios.create();

export const login = (username, password) => {
  /*
   * TODO : 서버와의 통신을 통해 ID/PW가 맞는지 검증합니다.
   * 송신 : ID / PW / 현재 접속 IP
   * 수신 : ID / PW / IP 화이트리스 검사 후 적합성 여부 (boolean)
   * 전역으로 관리할 값이 로그인 상태 뿐이므로, 복잡하게 Redux를 쓰는 대신 Context API로 해결해 봅시다. (혹은 그냥 State 하나로 해결이 될지도?)
   */

  // 아래 로직은 백엔드 모킹하는 임시 로직입니다.
  if (username === "user" && password === "1234") {
    return true;
  } else {
    return false;
  }
};
