import { MdDelete, MdEdit } from "react-icons/md";

const TabelDataTransaksi = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm table-auto">
          <thead className="text-xs text-white uppercase bg-gray-400">
            <tr className="text-center">
              <th className="py-3 border-r">No</th>
              <th className="py-3 border-r">Kode Transaksi</th>
              <th className="py-3 border-r">Tanggal Transaksi</th>
              <th className="py-3 border-r">Kode Obat</th>
              <th className="py-3 border-r">Nama Obat</th>
              <th className="py-3 border-r">Jumlah</th>
              <th className="py-3 border-r">Satuan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs text-center bg-white border-b hover:bg-gray-50">
              <td className="py-3 border-r">No</td>
              <td className="py-3 border-r">Kode Transaksi</td>
              <td className="py-3 border-r">Tanggal Transaksi</td>
              <td className="py-3 border-r">Kode Obat</td>
              <td className="py-3 border-r">Nama Obat</td>
              <td className="py-3 border-r">Jumlah</td>
              <td className="py-3 border-r">Satuan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TabelDataTransaksi;
