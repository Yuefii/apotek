import Layout from "@/components/dasboard/Layout";
import TabelDataObat from "@/components/dasboard/TableDataObat";
import withAuth from "@/utils/withAuth";
import { useEffect, useState } from "react";
import { FaFolder } from "react-icons/fa";

const DataObat = () => {
  const [dataObat, setDataObat] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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
        <div className="bg-gray-400 h-12 font-semibold text-2xl">
          {/* KONTEN */}
        </div>
        <div className="mx-10 mt-5">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <FaFolder />
              <h1 className="font-semibold">Data Obat</h1>
            </div>
            <button
              className="bg-blue-600 hover:opacity-90 text-white font-semibold px-2 py-1 text-xs rounded mb-2"
              onClick={() => {
                // Logika untuk menambah obat baru
              }}
            >
              Tambah
            </button>
          </div>
          <div className="container mx-auto">
            <TabelDataObat
              dataObat={dataObat}
              onUpdateObat={handleUpdateObat}
              onDeleteObat={handleDeleteObat}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(DataObat);
