import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }: any) => {
  return (
    <>
      <main>
        <Sidebar />
        <main>{children}</main>
      </main>
    </>
  );
};

export default Layout;
