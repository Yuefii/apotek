import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Modal from "../../ui/Modal";
import { useState } from "react";

const ModalTambah = ({ fetchData, handleTambahClose }: any) => {
  const [formData, setFormData] = useState({
    nama_obat: "",
    harga_obat: "",
    satuan_obat: "",
  });

  const handleTambah = async () => {
    try {
      const res = await fetch(`/api/obat`, {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Modal>
        <Input
          label="Nama Obat"
          type="text"
          value={formData.nama_obat}
          onChange={handleChange}
          name="nama_obat"
        />
        <Input
          label="Harga Obat"
          type="number"
          value={formData.harga_obat}
          onChange={handleChange}
          name="harga_obat"
        />
        <Input
          label="Satuan Obat"
          type="text"
          value={formData.satuan_obat}
          onChange={handleChange}
          name="satuan_obat"
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
