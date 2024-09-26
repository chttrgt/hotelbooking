import React from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

interface IRoutersLayoutProps {
  children: React.ReactNode;
}

const RoutersLayout = ({ children }: IRoutersLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default RoutersLayout;
