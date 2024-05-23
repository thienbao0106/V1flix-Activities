import React from "react";
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";

export interface LayoutProps {
  children?: React.ReactNode;
}

const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="lg:px-32 px-10 font-display">{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
