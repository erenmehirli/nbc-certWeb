import React from "react";
import {  FiPackage ,FiUser } from "react-icons/fi"; // İkonları ekledim
import belgedogrulama from "../assets/images/belgedogrulama.jpg";

// Card Bileşeni
const Card = ({ title, subtitle, email, Icon }) => {
  const customStyle = {
    backgroundColor: '#1D3780', // Arka plan rengi
    color: '#FFFFFF', // Metin rengi
    padding: '16px',
  };
  return (
    <div className="relative p-6 bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-950 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      <div className="flex items-center relative z-10">
        <div className="p-4 bg-gray-200 rounded-full">
          <Icon className="text-4xl text-blue-500 group-hover:text-white transition-colors duration-300" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-blue-950 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm mt-2 text-gray-600 group-hover:text-violet-200 transition-colors duration-300">
            {subtitle}
          </p>
          <a
            href={`mailto:${email}`}
            className="text-blue-600 group-hover:text-violet-200 flex items-center mt-2 transition-colors duration-300"
          >
            {email} <span className="ml-2">✉️</span>
          </a>
        </div>
      </div>
    
    </div>
  );
};

const BelgeDogrulama = () => {
  return (
    <div className="">
      {/* Arka Plan Resmi Üstünde Başlık */}
      <div
        id="featured-title"
        className="relative bg-cover bg-center min-h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${belgedogrulama})`, // Resim url() içerisine alındı
        }}
      >
        <div className="container mx-auto py-16 h-full flex items-center justify-center">
          <div className="inner-wrap text-center text-blue-950">
            <div className="title-group">
              <h1 className="main-title text-5xl font-bold">Belge Sorgula</h1>
            </div>
            <div id="breadcrumbs" className="mt-4">
              <div className="breadcrumbs-inner">
                <div className="breadcrumb-trail text-sm">
                  <a
                    href="/"
                    className="text-blue-950 hover:text-white transition"
                  >
                    Home
                  </a>
                  <span className="mx-2">/</span>
                  <span>Belge Sorgula</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="container mx-auto">
        {/* Üst Kısım */}
        <div className="py-12">
          <div className="text-center text-blue-950">
            <h2 className="text-3xl font-bold">
              Personel ve Ürün Belge geçerliliğini buradan sorgulayabilirsiniz.
            </h2>
            <div className="mt-4 w-16 h-1 bg-blue-950 mx-auto"></div>
          </div>
        </div>

        {/* İki Sütunlu Bölüm */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personel Belge Sorgulama */}
          <Card
            title="Personel Belge Sorgulaması"
            subtitle="Belge sorgulaması için Belge Tipi, Ad-Soyad, T.C. Kimlik Numaranızı bize e-posta yoluyla ulaştırınız."
            email="info@nbccert.com.tr"
            Icon={FiUser} // İkon prop olarak geçti
          />

          {/* Ürün Belge Sorgulama */}
          <Card
            title="Ürün Belge Sorgulaması"
            subtitle="Belge sorgulaması için Belge Tipi, Ad-Soyad, T.C. Kimlik Numaranızı bize e-posta yoluyla ulaştırınız."
            email="info@nbccert.com.tr"
            Icon={FiPackage} // İkon prop olarak geçti
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    
  );
};

export default BelgeDogrulama;