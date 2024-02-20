import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Modal from "../../ui/Modal";
import { useEffect, useState } from "react";

const ModalTambah = ({ fetchData, handleTambahClose }: any) => {
  const [obat, setObat] = useState([]);
  const [formData, setFormData] = useState({
    kode_obat: "",
    jumlah_tambah: "",
    tanggal_tambah: "",
  });

  useEffect(() => {
    fetchDataObat();
  }, []);

  const fetchDataObat = async () => {
    try {
      const res = await fetch("/api/obat");
      if (!res.ok) {
        throw new Error("Gagal mengambil data obat");
      }
      const result = await res.json();
      setObat(result.data);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      setObat([]);
    }
  };

  const handleTambah = async () => {
    try {
      const res = await fetch(`/api/transaction/stok`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });      

      if (!res.ok) {
        throw new Error("Gagal memperbarui data obat");
      }
      fetchData();
      handleTambahClose();
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Modal>
        <h1 className="text-center text-xl font-semibold mb-5">Tambahkan Stok Obat Anda!</h1>
        <select
          name="kode_obat"
          value={formData.kode_obat}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
        >
          {obat.map((item: any) => (
            <option value={item.kode_obat} key={item.kode_obat}>
              {item.nama_obat}
            </option>
          ))}
        </select>
        <Input
          label="Jumlah Stok Obat"
          type="number"
          value={formData.jumlah_tambah}
          onChange={handleChange}
          name="jumlah_tambah"
        />
        <Input
          label="Tanggal Penambahan Stok"
          type="date"
          value={formData.tanggal_tambah}
          onChange={handleChange}
          name="tanggal_tambah"
        />
        <div className="flex justify-center gap-3 mt-4">
          <Button onClick={handleTambah}>Tambah</Button>
          <Button onClick={handleTambahClose}>Batal</Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalTambah;
