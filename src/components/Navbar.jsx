import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div>
      {/* Üst bilgi çubuğu */}
      <div className="bg-white text-black py-6 shadow-lg pb-20">
        {/* Beyaz bölümün height'i büyütüldü */}
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          {/* Logo */}
          <div className="flex-shrink-0 pl-10">
            <a href="/" className="font-bold text-xl text-white">
              <img
                src={logo}
                alt="NBC Sertifikasyon"
                className="h-10"
              />
            </a>
          </div>
          <div className="flex justify-between space-x-8">
            {/* Telefon Bilgisi */}
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10a9 9 0 0118 0v2a9 9 0 01-18 0v-2zm1 0h4m1 0h8m1 0h4M5 7h14m0 10a9 9 0 01-14 0"
                />
              </svg>
              <div>
                <span className="block font-semibold">Telefon</span>
                <span className="text-gray-700">+90 (312) 255-5558</span>
              </div>
            </div>

            {/* Email Bilgisi */}
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H8M2 5h20v14H2z"
                />
              </svg>
              <div className="pr-10">
                <span className="block font-semibold">Email</span>
                <span className="text-gray-700">info@nbccert.com.tr</span>
              </div>
            </div>
          </div>

          {/* Sağ taraf: sosyal medya ikonları */}
        </div>
      </div>

      {/* Ana Navbar */}
      
    </div>
  );
};

export default Navbar;
