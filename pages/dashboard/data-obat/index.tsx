import Layout from "@/components/dasboard/Layout";
import TabelData from "@/components/dasboard/TableDataObat";
import { FaFolder } from "react-icons/fa";

const DataObat = () => {
  return (
    <Layout>
      <div className="ml-64">
        <div className="bg-gray-400 h-12 font-semibold text-2xl">
          {/* KONTEN */}
        </div>
        <div className="mx-10 mt-5">
          <div className="flex gap-1 items-center">
            <FaFolder />
            <h1 className="font-semibold">Data Obat</h1>
          </div>
          <div className="container mx-auto">
            <TabelData />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DataObat;
