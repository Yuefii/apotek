import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Modal from "../../ui/Modal";
import { ChangeEvent } from "react";

interface DataObat {
  nama_obat: string;
  harga_obat: number;
  satuan_obat: string;
}

interface ModalUpdateProps {
  handleCancelEdit: () => void;
  handleSaveEdit: () => void;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof DataObat
  ) => void;
  editingObat: DataObat;
}

const ModalUpdate: React.FC<ModalUpdateProps> = ({
  handleCancelEdit,
  handleSaveEdit,
  handleInputChange,
  editingObat,
}) => {
  return (
    <>
      <Modal>
        <Input
          label="Nama Obat"
          type="text"
          value={editingObat.nama_obat}
          onChange={(e) => handleInputChange(e, "nama_obat")}
        />
        <Input
          label="Harga Obat"
          type="number"
          value={editingObat.harga_obat}
          onChange={(e) => handleInputChange(e, "harga_obat")}
        />
        <Input
          label="Satuan Obat"
          type="text"
          value={editingObat.satuan_obat}
          onChange={(e) => handleInputChange(e, "satuan_obat")}
        />
        <div className="flex justify-center gap-3 mt-4">
          <Button onClick={handleSaveEdit}>Simpan</Button>
          <Button onClick={handleCancelEdit}>Batal</Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalUpdate;
