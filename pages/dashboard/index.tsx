import Layout from "@/components/dasboard/Layout";
import withAuth from "@/utils/withAuth";
import { useEffect, useState } from "react";
import { MdHomeRepairService } from "react-icons/md";

const DashboardPages = () => {
  const [totalObat, setTotalObat] = useState(0);

  useEffect(() => {
    const fetchTotalObat = async () => {
      try {
        const response = await fetch("/api/obat");
        const data = await response.json();
        setTotalObat(data.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTotalObat();
  }, []);

  return (
    <>
      <Layout>
        <div className="ml-64">
          <div className="flex items-center pl-4 bg-gray-400 h-12 font-semibold text-lg">
            <div className="flex gap-2 items-center">
              <MdHomeRepairService />
              <h1>Aplikasi Apotek</h1>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 my-20">
            <div className="bg-teal-600 rounded shadow-2xl w-[250px] h-[150px]">
              <div className="flex justify-center mt-3">
                <MdHomeRepairService size="50" className="text-white" />
              </div>
              <h1 className="text-2xl text-gray-200 text-center font-semibold">
                Jumlah Obat
              </h1>
              <p className="text-2xl text-gray-200 text-center font-semibold">
                {totalObat}
              </p>
            </div>
            <div className="bg-blue-600 rounded shadow-2xl  w-[250px] h-[150px]">
              <div className="flex justify-center mt-3">
                <MdHomeRepairService size="50" className="text-white" />
              </div>
              <h1 className="text-2xl text-gray-200 text-center font-semibold">
                Jumlah Stock
              </h1>
              <p className="text-2xl text-gray-200 text-center font-semibold">
                0
              </p>
            </div>
            <div className="bg-red-600 rounded shadow-2xl  w-[250px] h-[150px]">
              <div className="flex justify-center mt-3">
                <MdHomeRepairService size="50" className="text-white" />
              </div>
              <h1 className="text-2xl text-gray-200 text-center font-semibold">
                Obat Terjual
              </h1>
              <p className="text-2xl text-gray-200 text-center font-semibold">
                0
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default withAuth(DashboardPages);
