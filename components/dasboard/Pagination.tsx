import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  activePage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  activePage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  let startPage: number, endPage: number;
  if (totalPages <= 10) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (activePage <= 6) {
      startPage = 1;
      endPage = 10;
    } else if (activePage + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    } else {
      startPage = activePage - 5;
      endPage = activePage + 4;
    }
  }

  return (
    <div className="flex justify-center mt-4 mb-10 text-xs">
      <button
        onClick={() => onPageChange(activePage - 1)}
        disabled={activePage === 1}
        className="mx-1 px-3 py-1 bg-teal-400 rounded hover:bg-teal-600"
      >
        Previous
      </button>
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`mx-1 px-3 py-1 border border-teal-400 rounded hover:bg-teal-400 ${
            activePage === pageNumber ? "border border-teal-400" : ""
          }`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() => onPageChange(activePage + 1)}
        disabled={activePage === totalPages}
        className="mx-1 px-3 py-1 bg-teal-400 rounded hover:bg-teal-600"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
