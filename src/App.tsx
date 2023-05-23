import React from "react";
import { Routes, Route } from "react-router-dom";

import { Root } from "./components/Root/Root";
import { Registration } from "./components/Registration/Registration";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Root>
        <Routes>
          <Route path="/signup" element={<Registration />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </Root>
    </div>
  );
}

export default App;
