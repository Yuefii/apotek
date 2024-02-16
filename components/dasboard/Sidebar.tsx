import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import SidebarNavigation from "./SidebarNavigation";
import Button from "../ui/Button";

const Sidebar = () => {
  const { pathname } = useRouter();

  const isLinkActive = (path: string) => {
    return (
      pathname === path &&
      "flex items-center py-2 px-4 text-white bg-gray-600 hover:bg-black/85 rounded-md"
    );
  };
  return (
    <>
      <div className="fixed left-0 top-0 w-64 h-full bg-gray-200 border-r-2 z-50">
        <Link href="/dashboard" className="flex items-center h-12 bg-gray-400">
          <span className="text-lg font-bold ml-3">Dashboard</span>
        </Link>
        <SidebarNavigation isLinkActive={isLinkActive} />
      </div>
    </>
  );
};

export default Sidebar;