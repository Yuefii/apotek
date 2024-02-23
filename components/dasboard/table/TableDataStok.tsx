import { useState } from "react";
import Pagination from "../Pagination";
import HeadDataStok from "./head/HeadDataStok";

const TabelDataStok = ({ stok }: any) => {
  const [activePage, setActivePage] = useState<number>(1);
  const itemsPerPage = 10;

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = stok.slice(startIndex, endIndex);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm table-auto">
          <HeadDataStok />
          <tbody>
            {currentData.map((item: any, index: any) => (
              <tr
                key={startIndex + index}
                className="text-xs text-center bg-white text-teal-900 border-b hover:bg-gray-50"
              >
                <td className="py-3 border-r">{startIndex + index}</td>
                <td className="py-3 border-r">{item.kode_transaksi}</td>
                <td className="py-3 border-r">{item.tanggal_tambah}</td>
                <td className="py-3 border-r">{item.kode_obat}</td>
                <td className="py-3 border-r">{item.nama_obat}</td>
                <td className="py-3 border-r">{item.jumlah_tambah}</td>
                <td className="py-3 border-r">{item.satuan_obat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={stok.length}
        itemsPerPage={itemsPerPage}
        activePage={activePage}
        onPageChange={setActivePage}
      />
    </>
  );
};

export default TabelDataStok;
