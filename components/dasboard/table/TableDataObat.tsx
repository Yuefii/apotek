import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import ModalUpdate from "../../modals/data-obat/ModalUpdate";
import ModalDelete from "../../modals/data-obat/ModalDelete";
import Pagination from "../Pagination";
import { formatRupiah } from "@/utils/rupiah";

interface DataObat {
  kode_obat: string;
  nama_obat: string;
  harga_obat: number;
  satuan_obat: string;
  stok: number;
}

interface DataObatProps {
  dataObat: DataObat[];
  onUpdateObat: (kodeObat: string, updatedData: Partial<DataObat>) => void;
  onDeleteObat: (kodeObat: string) => void;
}

const TabelDataObat: React.FC<DataObatProps> = ({
  dataObat,
  onUpdateObat,
  onDeleteObat,
}) => {
  const [editingObat, setEditingObat] = useState<DataObat | null>(null);
  const [deleteObat, setDeleteObat] = useState<DataObat | null>(null);
  const [activePage, setActivePage] = useState<number>(1);
  const itemsPerPage = 10;

  const handleEditClick = (obat: DataObat) => {
    setEditingObat(obat);
  };

  const handleSaveEdit = () => {
    if (editingObat) {
      onUpdateObat(editingObat.kode_obat, editingObat);
      setEditingObat(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingObat(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof DataObat
  ) => {
    if (editingObat) {
      let value: string | number = e.target.value;
      if (key === "harga_obat") {
        value = parseInt(value);
      }
      setEditingObat({
        ...editingObat,
        [key]: value,
      });
    }
  };

  const handleDeleteClick = (obat: DataObat) => {
    setDeleteObat(obat);
  };

  const handleConfirmDelete = () => {
    if (deleteObat) {
      onDeleteObat(deleteObat.kode_obat);
      setDeleteObat(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteObat(null);
  };

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = dataObat.slice(startIndex, endIndex);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm table-auto">
          <thead className="text-xs text-white uppercase bg-teal-400">
            <tr className="text-center">
              <th className="py-3 border-r">No</th>
              <th className="py-3 border-r">Kode Obat</th>
              <th className="py-3 border-r">Nama Obat</th>
              <th className="py-3 border-r">Harga</th>
              <th className="py-3 border-r">Satuan</th>
              <th className="py-3 border-r">Stok</th>
              <th className="py-3 border-r">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={startIndex + index}
                className="text-xs text-center text-teal-900 bg-white border-b hover:bg-gray-50"
              >
                <td className="py-3 border-r">{startIndex + index + 1}</td>
                <td className="py-3 border-r">{item.kode_obat}</td>
                <td className="py-3 border-r">{item.nama_obat}</td>
                <td className="py-3 border-r">{formatRupiah(item.harga_obat)}</td>
                <td className="py-3 border-r">{item.satuan_obat}</td>
                <td className="py-3 border-r">{item.stok}</td>
                <td className="py-3 border-r">
                  <div className="flex items-center justify-center gap-2">
                    <span
                      className="bg-teal-400 p-1.5 rounded text-white cursor-pointer hover:opacity-90"
                      onClick={() => handleEditClick(item)}
                    >
                      <MdEdit size={15} />
                    </span>
                    <span
                      onClick={() => handleDeleteClick(item)}
                      className="bg-red-600 p-1.5 rounded text-white cursor-pointer hover:opacity-90"
                    >
                      <MdDelete size={15} />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingObat && (
        <ModalUpdate
          handleCancelEdit={handleCancelEdit}
          handleSaveEdit={handleSaveEdit}
          handleInputChange={handleInputChange}
          editingObat={editingObat}
        />
      )}

      {deleteObat && (
        <ModalDelete
          handleConfirmDelete={handleConfirmDelete}
          handleCancelDelete={handleCancelDelete}
        />
      )}

      <Pagination
        totalItems={dataObat.length}
        itemsPerPage={itemsPerPage}
        activePage={activePage}
        onPageChange={setActivePage}
      />
    </>
  );
};

export default TabelDataObat;
