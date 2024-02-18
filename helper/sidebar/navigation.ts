import { FaRegFolder } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineReport } from "react-icons/md";

export const SidebarList = [
    {
        title: "Data Obat",
        link: "/dashboard/data-obat",
        icon: FaRegFolder
    },
    {
        title: "Data Transaksi",
        link: "/dashboard/data-transaksi",
        icon: GrTransaction
    },
    {
        title: "Laporan",
        link: "/dashboard/laporan",
        icon: MdOutlineReport
    },
]