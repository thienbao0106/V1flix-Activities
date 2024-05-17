import React from "react";
import Navbar from "../components/Common/Navbar/Navbar";

export interface LayoutProps {
  children?: React.ReactNode;
}

const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="px-32">{children}</main>
    </>
  );
};

export default BaseLayout;
