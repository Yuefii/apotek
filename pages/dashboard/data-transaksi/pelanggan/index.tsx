/* eslint-disable react-hooks/rules-of-hooks */
import Header from "@/components/dasboard/Header";
import Layout from "@/components/dasboard/Layout";
import TabelDataPelanggan from "@/components/dasboard/table/TableDataPelanggan";
import ModalTambah from "@/components/modals/data-pelanggan/ModalTambah";
import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";

const pelanggan = () => {
  const [pelanggan, setPelanggan] = useState([]);
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
      const res = await fetch("/api/transaction/pelanggan");
      if (!res.ok) {
        throw new Error("Gagal mengambil data obat");
      }
      const result = await res.json();
      setPelanggan(result.data);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      setPelanggan([]);
    }
  };
  return (
    <>
      <Layout>
        <div className="ml-64">
          <Header title="Data Pelanggan" />
          <div className="mx-10">
            <div className="flex justify-end items-center">
              <button
                onClick={handleTambahOpen}
                className="bg-teal-400 text-white font-semibold px-2 py-1 text-xs rounded mb-2"
              >
                Tambah
              </button>
            </div>
            <div className="container mx-auto">
              <TabelDataPelanggan pelanggan={pelanggan} />
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

export default pelanggan;
