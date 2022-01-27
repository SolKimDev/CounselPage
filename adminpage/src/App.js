import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Loginpage from "./pages/login/Login";
import Managingpage from "./pages/manage/Manage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // false로 하고 useEffect에서 체크하기.
  return (
    <HelmetProvider>
      <Router>
        {isLoggedIn ? (
          <Route path="/" component={Managingpage} />
        ) : (
          <Route path="/" render={() => <Loginpage setIsLoggedIn={setIsLoggedIn} />} />
        )}
      </Router>
    </HelmetProvider>
  );
}

export default App;
