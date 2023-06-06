import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  currentUserId: string;
}

export default function ProtectedRoutes({ currentUserId }: Props) {
  return currentUserId ? <Outlet /> : <Navigate to="/signin" />;
}
