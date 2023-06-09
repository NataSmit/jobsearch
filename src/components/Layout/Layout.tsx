import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { RotatingLines } from "react-loader-spinner";

import { Header } from "../Header/Header";
import { ErrorFallback } from "../ErrorFallback";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<RotatingLines strokeColor="#5964e0" />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
