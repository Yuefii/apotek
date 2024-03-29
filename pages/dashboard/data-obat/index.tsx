import ButtonTambah from "@/components/dasboard/ButtonTambah";
import Header from "@/components/dasboard/Header";
import Layout from "@/components/dasboard/Layout";
import TabelDataObat from "@/components/dasboard/table/TableDataObat";
import ModalTambah from "@/components/modals/data-obat/ModalTambah";
import withAuth from "@/utils/withAuth";
import { useEffect, useState } from "react";

const DataObat = () => {
  const [dataObat, setDataObat] = useState([]);
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
      const res = await fetch("/api/obat");
      if (!res.ok) {
        throw new Error("Gagal mengambil data obat");
      }
      const result = await res.json();
      setDataObat(result.data);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      setDataObat([]);
    }
  };

  const handleUpdateObat = async (kodeObat: string, updatedData: any) => {
    try {
      const res = await fetch(`/api/obat/${kodeObat}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (!res.ok) {
        throw new Error("Gagal memperbarui data obat");
      }
      fetchData();
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const handleDeleteObat = async (kodeObat: string) => {
    try {
      const res = await fetch(`/api/obat/${kodeObat}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Gagal memperbarui data obat");
      }
      fetchData();
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <Layout>
      <div className="ml-64">
        <Header title="Data Obat" />
        <div className="mx-10">
          <ButtonTambah onClick={handleTambahOpen} />
          <div className="container mx-auto">
            <TabelDataObat
              dataObat={dataObat}
              onUpdateObat={handleUpdateObat}
              onDeleteObat={handleDeleteObat}
            />
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
  );
};

export default withAuth(DataObat);
