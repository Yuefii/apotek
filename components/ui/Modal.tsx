interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <>
      <div className="backdrop-blur ml-64 fixed top-0 right-0 left-0 z-[99999] flex justify-center items-center h-screen">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <main className="p-4 md:p-5">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
