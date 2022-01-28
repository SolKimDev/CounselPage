import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Loginpage from "./pages/login/Login";
import Managingpage from "./pages/manage/Manage";

import { tempData } from "./lib/api/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  /* TODO : 백엔드 연동 후 로그인 유지 로직 수정하기 
   * 조건 1 : 백엔드에서는 세션 유지 시간만큼만 토큰을 저장합니다. 따라서 토큰 값이 만료되었다면 백엔드에 저장된 토큰과 로컬스토리지 토큰이 일치하지 않게 됩니다.
   * 따라서 아래의 작업을 'auth/checkLogin'으로 함수화하여 백엔드에 저장된 값과 비교할 수 있도록 해야 합니다.
   */
  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        setIsLoggedIn(false);
      } else {
        user.token === tempData.token && user.IP === tempData.IP
          ? setIsLoggedIn(true)
          : setIsLoggedIn(false);
      }
    } catch (e) {
      console.log("localStorage is not working");
    }
  });

  return (
    <HelmetProvider>
      <Router>
        {isLoggedIn ? (
          <Route
            path="/"
            render={() => <Managingpage setIsLoggedIn={setIsLoggedIn} />}
          />
        ) : (
          <Route
            path="/"
            render={() => <Loginpage setIsLoggedIn={setIsLoggedIn} />}
          />
        )}
      </Router>
    </HelmetProvider>
  );
}

export default App;
