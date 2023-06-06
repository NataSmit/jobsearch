import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { RotatingLines } from "react-loader-spinner";

import { Header } from "../Header/Header";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Suspense fallback={<RotatingLines strokeColor="#5964e0" />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
