import Layout from "@/components/dasboard/Layout";
import withAuth from "@/utils/withAuth";
import { formatRupiah } from "@/utils/rupiah";
import { useEffect, useState } from "react";
import CardData from "@/components/dasboard/card/CardData";
import Header from "@/components/dasboard/Header";

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
          <Header title="Dashboard" />
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
