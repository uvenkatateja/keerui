import React, { ReactNode } from "react";

interface LazyShowProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const LazyShow = ({ children }: LazyShowProps) => {
  return <>{children}</>;
};

export default LazyShow;