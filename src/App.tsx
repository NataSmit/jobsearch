import React from "react";
import { Routes, Route } from "react-router-dom";

import { Root } from "./components/Root/Root";
import { Registration } from "./components/Registration/Registration";
import { Login } from "./components/Login/Login";
import { Main } from "./components/Main/Main";
import { JobInfoPage } from "./components/JobInfoPage/JobInfoPage";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Root>
        <Routes>
          <Route path="/signup" element={<Registration />} />
          <Route path="/signin" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
          <Route
            path="/:id"
            element={
              <>
                <Header />
                <JobInfoPage />
              </>
            }
          ></Route>
        </Routes>
      </Root>
    </div>
  );
}

export default App;
