import React from "react";
import { User as FirebaseUser } from "firebase/auth";

export const CurrentUserContext = React.createContext<FirebaseUser | null>(
  null
);
