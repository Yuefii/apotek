import Layout from "@/components/dasboard/Layout";
import TabelDataStok from "@/components/dasboard/TableDataStok";
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
          <div className="flex items-center pl-4 bg-gray-400 h-12 font-semibold text-lg">
            <div className="flex gap-2 items-center">
              <MdHomeRepairService />
              <h1 className="font-semibold">Stok Obat</h1>
            </div>
          </div>
          <div className="mx-10 mt-5">
            <div className="flex justify-end items-center">
              <button
                onClick={handleTambahOpen}
                className="bg-blue-600 text-white font-semibold px-2 py-1 text-xs rounded mb-2"
              >
                Tambah
              </button>
            </div>
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
