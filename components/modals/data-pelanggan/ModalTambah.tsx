import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Modal from "../../ui/Modal";
import { useEffect, useState } from "react";

interface Obat {
  kode_obat: string;
  stok: number;
  nama_obat: string;
}

const ModalTambah = ({ fetchData, handleTambahClose }: any) => {
  const [obat, setObat] = useState([]);
  const [stockUnavailableMsg, setStockUnavailableMsg] = useState("");
  const [formData, setFormData] = useState({
    transaksi: [
      {
        kode_obat: "",
        jumlah: 0,
      },
    ],
    tanggal_transaksi: "",
    total_pembayaran: 0,
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
      const isStockAvailable = formData.transaksi.every((transaksi) => {
        const selectedObat: any = obat.find(
          (item: Obat) => item.kode_obat === transaksi.kode_obat
        );
        return selectedObat && selectedObat.stok > 0;
      });

      if (!isStockAvailable) {
        const outOfStockItems = formData.transaksi.filter((transaksi) => {
          const selectedObat: any = obat.find(
            (item: Obat) => item.kode_obat === transaksi.kode_obat
          );
          return selectedObat && selectedObat.stok <= 0;
        });

        const outOfStockNames = outOfStockItems.map((transaksi) => {
          const selectedObat: any = obat.find(
            (item: Obat) => item.kode_obat === transaksi.kode_obat
          );
          return selectedObat?.nama_obat;
        });

        setStockUnavailableMsg(
          `Stok ${outOfStockNames.join(", ")} telah habis`
        );
        return;
      }

      const res = await fetch(`/api/transaction/pelanggan`, {
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("Data saat mengubah input:", formData);
  };

  const handleTransaksiChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    // Menggunakan spread operator untuk membuat salinan array
    const updatedTransaksi = [...formData.transaksi];

    // Mengakses objek di dalam array dan mengatur nilai properti sesuai dengan name yang diterima
    updatedTransaksi[index] = {
      ...updatedTransaksi[index],
      [name]: value,
    };

    // Memperbarui state formData dengan data yang diperbarui
    setFormData((prevData) => ({
      ...prevData,
      transaksi: updatedTransaksi,
    }));

    // Menampilkan data yang diperbarui ke konsol
    console.log("Data saat mengubah input:", formData);
  };

  const handleAddTransaksi = () => {
    setFormData((prevData) => ({
      ...prevData,
      transaksi: [...prevData.transaksi, { kode_obat: "", jumlah: 0 }],
    }));
  };

  return (
    <>
      <Modal>
        <h1 className="text-center text-xl font-semibold mb-5">
          Tambahkan Stok Obat Anda!
        </h1>
        <div className="flex gap-4 justify-between">
          <div>
            <Input
              label="Tanggal Transaksi"
              type="date"
              value={formData.tanggal_transaksi}
              onChange={handleChange}
              name="tanggal_transaksi"
            />
            <Input
              label="Total Pembayaran"
              type="number"
              value={formData.total_pembayaran}
              onChange={handleChange}
              name="total_pembayaran"
            />
            {stockUnavailableMsg && (
              <p className="mt-2 text-red-600 text-xs">{stockUnavailableMsg}</p>
            )}
            <div className="flex justify-center gap-3 mt-4">
              <Button className="text-xs" onClick={handleTambah}>
                Tambah
              </Button>
              <Button className="text-xs" onClick={handleTambahClose}>
                Batal
              </Button>
            </div>
          </div>

          <div>
            {formData.transaksi.map((transaksi, index) => (
              <div key={index}>
                <label className="text-xs" htmlFor="obat">
                  Pilih Obat {index + 1}
                </label>
                <select
                  name="kode_obat"
                  value={transaksi.kode_obat}
                  onChange={(e) => handleTransaksiChange(index, e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-1.5"
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
                  value={transaksi.jumlah}
                  onChange={(e) => handleTransaksiChange(index, e)}
                  name="jumlah"
                />
              </div>
            ))}
            {formData.transaksi.length <= 2 && (
              <Button
                className="mt-3 w-full text-xs"
                onClick={handleAddTransaksi}
              >
                Tambah Transaksi
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalTambah;
