import { useRouter } from "next/router";
import React from "react";
import SidebarNavigation from "./SidebarNavigation";
import { MdHomeRepairService } from "react-icons/md";

const Sidebar = () => {
  const { pathname } = useRouter();

  const isLinkActive = (path: string) => {
    return (
      pathname === path &&
      "flex items-center py-2 px-4 text-teal-900 bg-teal-400 hover:bg-black/85 rounded-md"
    );
  };
  return (
    <>
      <div className="fixed left-0 top-0 w-64 h-full bg-white shadow-2xl border z-50">
        <div className="h-auto flex justify-center bg-teal-300">
          <div>
            <MdHomeRepairService size="100" />
            <h1 className="text-lg text-teal-900 -mt-3 text-center mb-3 font-bold">
              Apotek
            </h1>
          </div>
        </div>
        <SidebarNavigation isLinkActive={isLinkActive} />
      </div>
    </>
  );
};

export default Sidebar;
