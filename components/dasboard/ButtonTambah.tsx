interface ButtonTambahProps {
  onClick: () => void;
}

const ButtonTambah: React.FC<ButtonTambahProps> = ({ onClick }) => {
  return (
    <>
      <div className="flex justify-end items-center">
        <button
          onClick={onClick}
          className="bg-teal-400 text-white font-semibold px-2 py-1 text-xs rounded mb-2"
        >
          Tambah
        </button>
      </div>
    </>
  );
};

export default ButtonTambah;
