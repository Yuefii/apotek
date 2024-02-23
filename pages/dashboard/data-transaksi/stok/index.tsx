import ButtonTambah from "@/components/dasboard/ButtonTambah";
import Header from "@/components/dasboard/Header";
import Layout from "@/components/dasboard/Layout";
import TabelDataStok from "@/components/dasboard/table/TableDataStok";
import ModalTambah from "@/components/modals/data-transaksi/ModalTambah";
import withAuth from "@/utils/withAuth";
import { useEffect, useState } from "react";
import { MdHomeRepairService } from "react-icons/md";

const Stok = () => {
  const [stok, setStok] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const handleTambahOpen = () => {
    setShowModal(true);
  };

  const handleTambahClose = () => {
    setShowModal(false);
  };

  const fetchData = async () => {
    try {
      const res = await fetch("/api/transaction/stok");
      if (!res.ok) {
        throw new Error("Gagal mengambil data obat");
      }
      const result = await res.json();
      setStok(result.data);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      setStok([]);
    }
  };

  return (
    <>
      <Layout>
        <div className="ml-64">
          <Header title="Data Stok Obat" />
          <div className="mx-10">
            <ButtonTambah onClick={handleTambahOpen} />
            <div className="container mx-auto">
              <TabelDataStok stok={stok} />
            </div>
          </div>
        </div>
        {showModal && (
          <ModalTambah
            fetchData={fetchData}
            handleTambahClose={handleTambahClose}
          />
        )}
      </Layout>
    </>
  );
};

export default withAuth(Stok);
