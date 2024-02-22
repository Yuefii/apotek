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
      <ul className="mt-5">
        {SidebarList.map((item, index) => (
          <li key={index} className="mb-1">
            {item.subMenu ? (
              <div>
                <div
                  onClick={toggleDropdown}
                  className="w-full flex gap-3 items-center py-2 px-4 hover:bg-teal-400 hover:text-white cursor-pointer"
                >
                  {item.icon && (
                    <item.icon size={15} className="text-teal-900" />
                  )}
                  <span className="text-sm text-teal-900">{item.title}</span>
                </div>
                {isOpen && (
                  <ul className="pl-4">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="mb-1">
                        <Link
                          href={subItem.link}
                          className={`${isLinkActive(
                            `${subItem.link}`
                          )}w-full flex gap-3 items-center py-2 px-4 hover:bg-teal-400`}
                        >
                          {subItem.icon && (
                            <subItem.icon
                              size={15}
                              className="text-teal-900 ml-3"
                            />
                          )}
                          <span className="text-xs text-teal-900">
                            {subItem.title}
                          </span>
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
                )}w-full flex gap-3 items-center py-2 px-4 hover:bg-teal-400 hover:text-white`}
              >
                {item.icon && <item.icon size={15} className="text-teal-900" />}
                <span className="text-sm text-teal-900">{item.title}</span>
              </Link>
            )}
          </li>
        ))}
        <li
          onClick={logout}
          className="w-full flex gap-3 items-center py-2 px-4 hover:bg-teal-400 hover:text-white"
        >
          <MdLogout size={15} className="text-teal-900" />
          <span className="text-sm text-teal-900">Keluar</span>
        </li>
      </ul>
    </>
  );
};

export default SidebarNavigation;
