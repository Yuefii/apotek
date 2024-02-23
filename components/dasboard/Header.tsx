import { IoMdMenu } from "react-icons/io";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <div className="flex items-center pl-4 bg-teal-300 shadow-2xl h-12 font-semibold text-lg">
        <div className="flex gap-2 items-center">
          <IoMdMenu />
        </div>
      </div>
      <div className="py-10 pl-10">
        <h1 className="text-3xl text-teal-900">{title}</h1>
        <p className="text-sm text-teal-600">
          Selamat Datang, Semangat Kerjanya.
        </p>
      </div>
    </>
  );
};

export default Header;
