import React from "react";
interface IAuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return (
    <div>
      header
      {children}
      footer
    </div>
  );
};

export default AuthLayout;
