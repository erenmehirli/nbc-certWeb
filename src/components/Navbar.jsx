import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../assets/images/logo.png";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Navbar = () => {

  const customStyle = {
    backgroundColor: '#1D3780', // Arka plan rengi
    color: '#FFFFFF', // Metin rengi
    padding: '16px',
  };

  return (
    <div>
      {/* Üst bilgi çubuğu */}
      <div className="bg-white text-black py-6 shadow-lg pb-20">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          {/* Logo */}
          <div className="flex-shrink-0 pl-10">
            <a href="/" className="font-bold text-xl text-white">
              <img src={logo} alt="NBC Sertifikasyon" className="h-10" />
            </a>
          </div>

          {/* Masaüstü: İletişim Bilgileri */}
          <div className="hidden lg:flex justify-between space-x-8">
            <div className="flex items-center space-x-2">
              <LocalPhoneIcon />
              <div>
                <span className="block font-semibold">Telefon</span>
                <span className="text-gray-700 hover:text-blue-500">+90 (312) 255-5558</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MailOutlineIcon />
              <div className="pr-10">
                <span className="block font-semibold">Email</span>
                <span>
                  <a href="mailto:info@nbccert.com.tr" className="hover:text-blue-500">
                    info@nbccert.com.tr
                  </a>
                </span>
              </div>
              <a
                href="/table"
                className="px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300"
                style={customStyle}
              >
                Eğitim takvimi
              </a>
            </div>
          </div>

     
          
        </div>
      </div>

      {/* Mobil Menü */}
      
      
    </div>
  );
};

export default Navbar;
