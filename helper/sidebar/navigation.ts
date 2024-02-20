import { FaUserFriends } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdHomeRepairService, MdOutlineReport } from "react-icons/md";

export const SidebarList = [
  {
    title: "Data Obat",
    link: "/dashboard/data-obat",
    icon: MdHomeRepairService,
  },
  {
    title: "Data Transaksi",
    link: "/dashboard/data-transaksi",
    icon: GrTransaction,
    subMenu: [
      {
        title: "Stok Obat",
        link: "/dashboard/data-transaksi/stok",
        icon: MdHomeRepairService
      },
      {
        title: "Pelanggan",
        link: "/dashboard/data-transaksi/pelanggan",
        icon: FaUserFriends
      },
    ]
  },
  {
    title: "Laporan",
    link: "/dashboard/laporan",
    icon: MdOutlineReport
  },
];
