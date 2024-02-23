import Layout from "@/components/dasboard/Layout";
import withAuth from "@/utils/withAuth";
import { formatRupiah } from "@/utils/rupiah";
import { useEffect, useState } from "react";
import { MdHomeRepairService } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import CardData from "@/components/dasboard/card/CardData";

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
      data.data.forEach((transaksi: { total_pembayaran: number }) => {
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
          <div className="flex items-center pl-4 bg-teal-300 shadow-2xl h-12 font-semibold text-lg">
            <div className="flex gap-2 items-center">
              <IoMdMenu />
            </div>
          </div>
          <div className="py-10 pl-10">
            <h1 className="text-3xl text-teal-900">Dashboard</h1>
            <p className="text-sm text-teal-600">
              Selamat Datang, Semangat Kerjanya.
            </p>
          </div>
          <div className="grid grid-cols-12 items-center gap-5 pl-10">
            <CardData
              formattedPrice={formattedPrice}
              totalObat={totalObat}
              totalStok={totalStok}
              totalPelanggan={totalPelanggan}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default withAuth(DashboardPages);  
