import { useState } from "react";
import { formatRupiah } from "@/utils/rupiah";
import Pagination from "../Pagination";

const TabelDataPelanggan = ({ pelanggan }: any) => {
  const [activePage, setActivePage] = useState<number>(1);
  const itemsPerPage = 10;

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = pelanggan.slice(startIndex, endIndex);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm table-auto">
          <thead className="text-xs text-white uppercase bg-teal-400">
            <tr className="text-center">
              <th className="py-3 border-r">No</th>
              <th className="py-3 border-r">Kode Pelanggan</th>
              <th className="py-3 border-r">Tanggal Transaksi</th>
              <th className="py-3 border-r">Total Pembayaran</th>
              <th className="py-3 border-r">Obat</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item: any, index: any) => (
              <tr
                key={startIndex + index}
                className="text-xs text-center text-teal-900 bg-white border-b hover:bg-gray-50"
              >
                <td className="py-3 border-r">{startIndex + index}</td>
                <td className="py-3 border-r">{item.kode_pelanggan}</td>
                <td className="py-3 border-r">{item.tanggal_transaksi}</td>
                <td className="py-3 border-r">{formatRupiah(item.total_pembayaran)}</td>
                <td className="py-3 border-r text-left px-2">
                  {item.obat &&
                    item.obat.map((item: any, index: any) => (
                      <li key={index}>{item.nama_obat}</li>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={pelanggan.length}
        itemsPerPage={itemsPerPage}
        activePage={activePage}
        onPageChange={setActivePage}
      />
    </>
  );
};

export default TabelDataPelanggan;
