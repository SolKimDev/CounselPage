import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Loginpage from "./pages/login/login";
import Managingpage from "./pages/manage/manage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // false로 하고 useEffect에서 체크하기.
  return (
    <Router>
      {isLoggedIn ? (
        <Route path="/" component={Managingpage} />
      ) : (
        <Route path="/" render={() => <Loginpage setIsLoggedIn />} />
      )}
    </Router>
  );
}

export default App;
