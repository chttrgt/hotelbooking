import React from "react";
import Navbar from "./_components/Navbar";

interface IRoutersLayoutProps {
  children: React.ReactNode;
}

const RoutersLayout = ({ children }: IRoutersLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
    </>
  );
};

export default RoutersLayout;
