import { MdHomeRepairService } from "react-icons/md";

const CardData = ({
  totalObat,
  totalStok,
  totalPelanggan,
  formattedPrice,
}: any) => {
  return (
    <>
      <div className="col-span-3 bg-teal-200 rounded shadow-2xl w-[250px] h-[150px]">
        <div className="flex justify-center mt-5">
          <MdHomeRepairService size="50" />
        </div>
        <h1 className="text-lg text-center">Jumlah Obat</h1>
        <p className="text-xl text-center">{totalObat}</p>
      </div>
      <div className="col-span-9 bg-teal-200 rounded shadow-2xl w-[250px] h-[150px]">
        <div className="flex justify-center mt-5">
          <MdHomeRepairService size="50"/>
        </div>
        <h1 className="text-xl text-center">
          Jumlah Stock
        </h1>
        <p className="text-xl text-center">
          {totalStok}
        </p>
      </div>
      <div className="col-span-3 bg-teal-200 rounded shadow-2xl w-[250px] h-[150px]">
        <div className="flex justify-center mt-5">
          <MdHomeRepairService size="50"/>
        </div>
        <h1 className="text-xl text-center">
          Obat Terjual
        </h1>
        <p className="text-xl text-center">
          {totalPelanggan}
        </p>
      </div>
      <div className="col-span-9 bg-teal-200 rounded shadow-2xl w-[250px] h-[150px]">
        <div className="flex justify-center mt-5">
          <MdHomeRepairService size="50"/>
        </div>
        <h1 className="text-xl text-center">
          Total Penghasilan
        </h1>
        <p className="text-xl text-center">
          {formattedPrice}
        </p>
      </div>
    </>
  );
};

export default CardData;
