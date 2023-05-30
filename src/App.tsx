import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";

import { auth } from "./firebaseConfig";

import { Root } from "./components/Root/Root";
import { Registration } from "./components/Registration/Registration";
import { Login } from "./components/Login/Login";
import { Main } from "./components/Main/Main";
import { JobInfoPage } from "./components/JobInfoPage/JobInfoPage";
import { Header } from "./components/Header/Header";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { Favorites } from "./components/Favorites/Favorites";
import { useGetJobAdsQuery } from "./redux/jobAdsApi";

function App() {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

  onAuthStateChanged(auth, (currentUser) => {
    setCurrentUser(currentUser);
  });

  const { data } = useGetJobAdsQuery("");
  console.log("testData", data);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
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
              path="/favorites"
              element={
                <>
                  <Header />
                  <Favorites />
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
