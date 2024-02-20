import Layout from "@/components/dasboard/Layout";
import withAuth from "@/utils/withAuth";
import { formatRupiah } from "@/utils/rupiah";
import { useEffect, useState } from "react";
import { MdHomeRepairService } from "react-icons/md";

const DashboardPages = () => {
  const [totalObat, setTotalObat] = useState(0);
  const [totalStok, setTotalStok] = useState(0);
  const [totalPelanggan, setTotalPelanggan] = useState(0);
  const [totalPembayaran, setTotalPembayaran] = useState(0);

  useEffect(() => {
    fetchTotalObat();
    fetchTotalStok();
    fetchTotalPelanggan();
    fetchTotalPembayaran();
  }, []);

  const fetchTotalObat = async () => {
    try {
      const response = await fetch("/api/obat");
      const data = await response.json();
      setTotalObat(data.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchTotalStok = async () => {
    try {
      const response = await fetch("/api/transaction/stok");
      const data = await response.json();
      setTotalStok(data.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchTotalPelanggan = async () => {
    try {
      const response = await fetch("/api/transaction/pelanggan");
      const data = await response.json();
      setTotalPelanggan(data.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchTotalPembayaran = async () => {
    try {
      const response = await fetch("/api/transaction/pelanggan");
      const data = await response.json();
      
      let total = 0;
      data.data.forEach((transaksi: { total_pembayaran: number; }) => {
        total += transaksi.total_pembayaran;
      });
  
      setTotalPembayaran(total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formattedPrice = formatRupiah(totalPembayaran);

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
              <div className="flex justify-center mt-5">
                <MdHomeRepairService size="50" className="text-white" />
              </div>
              <h1 className="text-xl text-gray-200 text-center font-semibold">
                Jumlah Obat
              </h1>
              <p className="text-xl text-gray-200 text-center font-semibold">
                {totalObat}
              </p>
            </div>
            <div className="bg-blue-600 rounded shadow-2xl  w-[250px] h-[150px]">
              <div className="flex justify-center mt-5">
                <MdHomeRepairService size="50" className="text-white" />
              </div>
              <h1 className="text-xl text-gray-200 text-center font-semibold">
                Jumlah Stock
              </h1>
              <p className="text-xl text-gray-200 text-center font-semibold">
                {totalStok}
              </p>
            </div>
            <div className="bg-red-600 rounded shadow-2xl  w-[250px] h-[150px]">
              <div className="flex justify-center mt-5">
                <MdHomeRepairService size="50" className="text-white" />
              </div>
              <h1 className="text-xl text-gray-200 text-center font-semibold">
                Obat Terjual
              </h1>
              <p className="text-xl text-gray-200 text-center font-semibold">
                {totalPelanggan}
              </p>
            </div>
            <div className="bg-slate-600 rounded shadow-2xl  w-[250px] h-[150px]">
              <div className="flex justify-center mt-5">
                <MdHomeRepairService size="50" className="text-white" />
              </div>
              <h1 className="text-xl text-gray-200 text-center font-semibold">
                Total Penghasilan
              </h1>
              <p className="text-xl text-gray-200 text-center font-semibold">
                {formattedPrice}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default withAuth(DashboardPages);
