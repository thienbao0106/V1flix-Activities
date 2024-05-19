import React from "react";
import Navbar from "../components/Common/Navbar/Navbar";

export interface LayoutProps {
  children?: React.ReactNode;
}

const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="lg:px-32 px-10 font-display">{children}</main>
    </>
  );
};

export default BaseLayout;
