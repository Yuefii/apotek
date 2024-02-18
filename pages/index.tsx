import Link from "next/link";
import React, { useEffect, useState } from "react";

const HomePages = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h1 className="font-extrabold text-4xl">WELCOME TO APOTEK</h1>
        <p className="text-gray-600 text-center my-2">
          Semangat dan selamat beraktivitas
        </p>
        <div className="flex items-center justify-center gap-5">
          <Link
            className="bg-gray-600 text-white text-xs py-2 px-4 rounded"
            href="/dashboard"
          >
            Dashboard
          </Link>
          {isLoggedIn ? (
            <button
              className="bg-gray-600 text-white text-xs py-2 px-4 rounded"
              onClick={() => {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              className="bg-gray-600 text-white text-xs py-2 px-4 rounded"
              href="/auth/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePages;
