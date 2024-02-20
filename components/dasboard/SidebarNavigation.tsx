import Link from "next/link";
import { useState } from "react";
import { SidebarList } from "@/helper/sidebar/navigation";
import { useRouter } from "next/router";
import { MdLogout } from "react-icons/md";

const SidebarNavigation = ({ isLinkActive }: any) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  return (
    <>
      <ul>
        {SidebarList.map((item, index) => (
          <li key={index} className="mb-1">
            {item.subMenu ? (
              <div>
                <div
                  onClick={toggleDropdown}
                  className="w-full flex gap-3 items-center py-2 px-4 font-semibold hover:bg-slate-600 hover:text-white cursor-pointer"
                >
                  {item.icon && <item.icon className="text-black" />}
                  <span className="text-sm">{item.title}</span>
                </div>
                {isOpen && (
                  <ul className="pl-4">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="mb-1">
                        <Link
                          href={subItem.link}
                          className={`${isLinkActive(
                            `${subItem.link}`
                          )}w-full flex gap-3 items-center py-2 px-4 font-semibold hover:bg-slate-600 hover:text-white`}
                        >
                          {subItem.icon && (
                            <subItem.icon className="text-black ml-3" />
                          )}
                          <span className="text-xs">{subItem.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                href={item.link}
                className={`${isLinkActive(
                  `${item.link}`
                )}w-full flex gap-3 items-center py-2 px-4 font-semibold hover:bg-slate-600 hover:text-white`}
              >
                {item.icon && <item.icon className="text-black" />}
                <span className="text-sm">{item.title}</span>
              </Link>
            )}
          </li>
        ))}
        <li
          onClick={logout}
          className="w-full flex gap-3 items-center py-2 px-4 font-semibold hover:bg-slate-600 hover:text-white"
        >
          <MdLogout />
          <span className="text-sm">Keluar</span>
        </li>
      </ul>
    </>
  );
};

export default SidebarNavigation;
