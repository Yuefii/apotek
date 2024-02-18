import Button from "@/components/ui/Button";
import Modal from "../../ui/Modal";

interface ModalDeleteProps {
  handleConfirmDelete: () => void;
  handleCancelDelete: () => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  handleConfirmDelete,
  handleCancelDelete,
}: any) => {
  return (
    <>
      <Modal>
        <p className="text-center">
          Apakah Anda yakin ingin menghapus data ini?
        </p>
        <div className="flex justify-center gap-3 mt-4">
          <Button onClick={handleConfirmDelete}>Delete</Button>
          <Button onClick={handleCancelDelete}>Batal</Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalDelete;
