import Layout from "@/components/dasboard/Layout";
import TabelDataTransaksi from "@/components/dasboard/TableDataTransaksi";
import withAuth from "@/utils/withAuth";
import { GrTransaction } from "react-icons/gr";

const DataTransaksi = () => {
  return (
    <>
      <Layout>
        <div className="ml-64">
          <div className="flex items-center pl-4 bg-gray-400 h-12 font-semibold text-lg">
            <div className="flex gap-2 items-center">
              <GrTransaction />
              <h1 className="font-semibold">Data Transaksi</h1>
            </div>
          </div>
          <div className="mx-10 mt-5">
            <div className="flex justify-end items-center">
              <button className="bg-blue-600 text-white font-semibold px-2 py-1 text-xs rounded mb-2">
                Tambah
              </button>
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

export default withAuth(DataTransaksi);
