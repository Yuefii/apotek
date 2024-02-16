import Link from "next/link";
import { SidebarList } from "@/helper/sidebar/navigation";

const SidebarNavigation = ({ isLinkActive }: any) => {
  return (
    <>
      {SidebarList.map((item, index) => (
        <ul key={index}>
          <li className="mb-1">
            <Link
              href={item.link}
              className={`${isLinkActive(
                `${item.link}`
              )}w-full flex gap-3 items-center py-2 px-4 font-semibold hover:bg-slate-600 hover:text-white`}
            >
              {item.icon && <item.icon className="text-black" />}
              <span className="text-sm">{item.title}</span>
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
};

export default SidebarNavigation;
