"use client";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure DOM is ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};

export default ClientLayout;