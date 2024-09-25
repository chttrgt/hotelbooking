import React from "react";

interface IRoutersLayoutProps {
  children: React.ReactNode;
}

const RoutersLayout = ({ children }: IRoutersLayoutProps) => {
  return (
    <>
      Navbar
      <div className="min-h-screen">{children}</div>
      Footer
    </>
  );
};

export default RoutersLayout;
