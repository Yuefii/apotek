const TabelData = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-white uppercase bg-gray-400">
            <tr>
              <th className="px-2 py-3 border-r">No</th>
              <th className="px-6 py-3 border-r">Kode Transaksi</th>
              <th className="px-2 py-3 border-r">Tanggal Transaksi</th>
              <th className="px-2 py-3 border-r">Kode Obat</th>
              <th className="px-2 py-3 border-r">Nama Obat</th>
              <th className="px-2 py-3 border-r">Jumlah</th>
              <th className="px-2 py-3 border-r">Satuan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs bg-white border-b hover:bg-gray-50">
              <th className="px-2 py-3 border-r">1</th>
              <th className="px-2 py-3 border-r">Kode Transaksi</th>
              <th className="px-2 py-3 border-r">Tanggal Transaksi</th>
              <th className="px-2 py-3 border-r">Kode Obat</th>
              <th className="px-2 py-3 border-r">Nama Obat</th>
              <th className="px-2 py-3 border-r">Jumlah</th>
              <th className="px-2 py-3 border-r">Satuan</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TabelData;
