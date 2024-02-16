const TabelData = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-white uppercase bg-gray-400">
            <tr>
              <th className="px-2 py-3 border-r">No</th>
              <th className="px-6 py-3 border-r">Kode Obat</th>
              <th className="px-10 py-3 border-r">Nama Obat</th>
              <th className="px-8 py-3 border-r">Harga</th>
              <th className="px-3 py-3 border-r">Stock</th>
              <th className="px-10 py-3 border-r">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs bg-white border-b hover:bg-gray-50">
              <td className="px-2 py-3 border-r">1</td>
              <td className="px-6 py-3 border-r">Kode Obat</td>
              <td className="px-10 py-3 border-r">Nama Obat</td>
              <td className="px-8 py-3 border-r">Harga</td>
              <td className="px-3 py-3 border-r">Stock</td>
              <td className="px-10 py-3 border-r">Action</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TabelData;
