import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Root({ children }: Props) {
  return <div className="root">{children}</div>;
}
