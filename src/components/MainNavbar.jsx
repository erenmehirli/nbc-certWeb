import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/images/logo.png";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex relative items-center w-full">
      <nav className="absolute bg-gradient-to-r from-black via-gray-900 to-blue-900 w-11/12 mx-auto flex items-center py-3 shadow-lg rounded-lg z-20" style={{ left: "4%" }}>
        <div className="container px-4 flex items-center justify-between h-16">
          {/* Navbar Links */}
          <div className="hidden lg:flex items-center gap-14 pl-8">
            <a href="/" className="text-white text-sm font-medium group relative w-max">
              Ana Sayfa
              <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 duration-500 bg-blue-500 group-hover:w-full"></span>
            </a>

            <a href="/about-us" className="text-white text-sm font-medium group relative w-max">
              Hakkımızda
              <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 duration-500 bg-blue-500 group-hover:w-full"></span>
            </a>

            {/* Dropdown with icon */}
            <FlyoutLink
              title={
                <span className="flex items-center gap-1">
                  Eğitimlerimiz
                  <KeyboardArrowDownOutlinedIcon />
                </span>
              }
              FlyoutContent={EgitimContent}
            />

            <FlyoutLink
              title={
                <span className="flex items-center gap-1">
                  Hizmetler
                  <KeyboardArrowDownOutlinedIcon />
                </span>
              }
              FlyoutContent={HizmetContent}
            />

            <a href="/documents" className="text-white text-sm font-medium group relative w-max">
              Dökümanlar
              <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 duration-500 bg-blue-500 group-hover:w-full"></span>
            </a>

            <a href="/contact" className="text-white text-sm font-medium group relative w-max">
              İletişim
              <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 duration-500 bg-blue-500 group-hover:w-full"></span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="relative text-gray-600">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-4 w-4" />
            <input
              type="search"
              name="search"
              placeholder="Ara..."
              className="bg-white h-10 pl-10 pr-5 w-72 rounded-full text-sm focus:outline-none"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <CloseOutlinedIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuOutlinedIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gray-800 w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
                Ana Sayfa
              </a>
              <a href="#" className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
                Hakkımızda
              </a>
              <a href="#" className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
                Hizmetler
              </a>
              <a href="/documents" className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
                Belgeler
              </a>
              <a href="#" className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
                İletişim
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

// FlyoutLink component for dropdown functionality
const FlyoutLink = ({ title, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href="#" className="relative text-white text-sm font-medium group w-max">
        {title}
        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 duration-500 bg-blue-500 group-hover:w-full"></span>
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black shadow-lg rounded-lg"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Dropdown content for Eğitimlerimiz
const EgitimContent = () => (
  <div className="w-48 bg-white p-5 gap-8 shadow-xl rounded-lg">
    <a href="/sera-gazı-eğitim" className="block text-sm hover:underline">
      Sera Gazı Doğrulayıcı Eğitimi
    </a>
    <br />
    <a href="/kimyasal-degerlendirme-egitim" className="block text-sm hover:underline">
      Kimyasal Değerlendirme Uzmanı Eğitimi
    </a>
    <br />
    <a href="/kozmetik-urun-guvenlilik" className="block text-sm hover:underline">
      Kozmetik Ürün Güvenlilik Değerlendirmesi
    </a>
  </div>
);

// Dropdown content for Hizmetler
const HizmetContent = () => (
  <div className="w-48 bg-white p-5 gap-8 shadow-xl rounded-lg">
    <a href="/sera-gazi" className="block text-sm hover:underline">
      Sera Gazı
    </a>
    <br />
    <a href="/kimya-sektoru" className="block text-sm hover:underline">
      Kimya Sektörü
    </a>
    <br />
    <a href="#" className="block text-sm hover:underline">
      Ahşap Ürün Belgelendirme
    </a>
    <br />
    <a href="#" className="block text-sm hover:underline">
      Türk Reach
    </a>
    <br />
    <a href="#" className="block text-sm hover:underline">
      İş ve Yönetim Sektörü
    </a>
  </div>
);

export default MainNavbar;
