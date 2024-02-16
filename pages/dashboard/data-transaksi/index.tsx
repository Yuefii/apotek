import Layout from "@/components/dasboard/Layout";
import TabelDataTransaksi from "@/components/dasboard/TableDataTransaksi";
import { FaFolder } from "react-icons/fa";

const DataTransaksi = () => {
  return (
    <>
      <Layout>
        <div className="ml-64">
          <div className="bg-gray-400 h-12 font-semibold text-2xl">
            {/* KONTEN */}
          </div>
          <div className="mx-10 mt-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center">
              <FaFolder />
              <h1 className="font-semibold">Data Transaksi</h1>
              </div>
              <button className="bg-blue-600 text-white font-semibold px-2 py-1 text-xs rounded mb-2">Tambah</button>
            </div>
            <div className="container mx-auto">
              <TabelDataTransaksi />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DataTransaksi;
