import React from "react";
import { useState, useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";

import { auth } from "./firebaseConfig";

import { Root } from "./components/Root/Root";
import { Registration } from "./pages/Registration/Registration";
import { Login } from "./pages/Login/Login";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { saveCurrentUserIDToLS } from "./utils/utils";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import Layout from "./components/Layout/Layout";
const Main = lazy(() => import("./pages/Main/Main"));
const JobInfoPage = lazy(() => import("./pages/JobInfoPage/JobInfoPage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const History = lazy(() => import("./pages/History/History"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

function App() {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  console.log("currentUser", currentUser);

  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
    if (user) {
      saveCurrentUserIDToLS(user.uid);
    }
  });

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Root>
          <Routes>
            <Route path="/signup" element={<Registration />} />
            <Route path="/signin" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Main />} />
              <Route path="/:id" element={<JobInfoPage />} />
              <Route path="/search/:query/:location" element={<SearchPage />} />
              <Route
                element={
                  <ProtectedRoutes currentUserId={currentUser?.uid || ""} />
                }
              >
                <Route path="/history" element={<History />} />
                <Route path="/favorites" element={<Favorites />} />
              </Route>
            </Route>
          </Routes>
        </Root>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
