import React from "react";
import Sidebar from "./sidebar/Sidebar";

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
