import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";

import { auth } from "./firebaseConfig";

import { Root } from "./components/Root/Root";
import { Registration } from "./pages/Registration/Registration";
import { Login } from "./pages/Login/Login";
import { Main } from "./pages/Main/Main";
import { JobInfoPage } from "./pages/JobInfoPage/JobInfoPage";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { Favorites } from "./pages/Favorites/Favorites";

function App() {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

  onAuthStateChanged(auth, (currentUser) => {
    setCurrentUser(currentUser);
  });

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Root>
          <Routes>
            <Route path="/signup" element={<Registration />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/:id" element={<JobInfoPage />} />
          </Routes>
        </Root>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
