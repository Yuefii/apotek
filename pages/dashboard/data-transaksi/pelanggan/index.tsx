/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/dasboard/Layout"
import TabelDataPelanggan from "@/components/dasboard/table/TableDataPelanggan"
import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa"

const pelanggan = () => {
  const [pelanggan, setPelanggan] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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
          <div className="flex items-center pl-4 bg-gray-400 h-12 font-semibold text-lg">
            <div className="flex gap-2 items-center">
              <FaUserFriends />
              <h1 className="font-semibold">Pelanggan</h1>
            </div>
          </div>
          <div className="mx-10 mt-5">
            <div className="flex justify-end items-center">
              <button
                onClick={()=> {}}
                className="bg-blue-600 text-white font-semibold px-2 py-1 text-xs rounded mb-2"
              >
                Tambah
              </button>
            </div>
            <div className="container mx-auto">
              <TabelDataPelanggan pelanggan={pelanggan} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default pelanggan
