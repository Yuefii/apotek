import { MdDelete, MdEdit } from "react-icons/md";

const TabelDataObat = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm table-auto">
          <thead className="text-xs text-white uppercase bg-gray-400">
            <tr className="text-center">
              <th className="py-3 border-r">No</th>
              <th className="py-3 border-r">Kode Obat</th>
              <th className="py-3 border-r">Nama Obat</th>
              <th className="py-3 border-r">Harga</th>
              <th className="py-3 border-r">Stok</th>
              <th className="py-3 border-r">Satuan</th>
              <th className="py-3 border-r">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs text-center bg-white border-b hover:bg-gray-50">
              <td className="py-3 border-r">1</td>
              <td className="py-3 border-r">Kode Obat</td>
              <td className="py-3 border-r">Nama Obat</td>
              <td className="py-3 border-r">Harga</td>
              <td className="py-3 border-r">Stok</td>
              <td className="py-3 border-r">Satuan</td>
              <td className="py-3 border-r">
                <div className="flex items-center justify-center gap-2">
                  <span className="bg-blue-600 p-1.5 rounded text-white cursor-pointer hover:opacity-90">
                    <MdEdit size={15} />
                  </span>
                  <span className="bg-red-600 p-1.5 rounded text-white cursor-pointer hover:opacity-90">
                    <MdDelete size={15} />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TabelDataObat;
