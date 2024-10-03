
import React from 'react';
import images from "../assets/images/imagesHero.jpg"; // Görseli import ediyoruz
import Card from './Cards'; // Kart bileşenini import ediyoruz
import cardResim from "../assets/images/seragazi_370x210.jpg";
import cardResim1 from "../assets/images/hakkimizda_kimya.jpg";
import cardResim2 from "../assets/images/isyonetimi.jpg";
import cardResim3 from "../assets/images/Chemical molecule under the microscope_AdobeStock.jpeg";
import ahsap from '../assets/images/kereste.jpg';




const Hero = () => {
  // Kart verileri
  const cards = [
    {
      title: "Sera Gazı",
      subtitle: "Emisyonları Doğrulama İlkeleri ve Hesaplamaları",
      description: "Sera Gazı Emisyonları, Sera Gazı Emisyonları İzleme Ve Raporlama İlkeleri, Sera Gazı",
      image: cardResim 
    },
    {
      title: "Kimya Sektörü",
      subtitle: "Kimya Sektörü",
      description: "Kimyasalların Kaydı Değerlendirmesi İzni ve Kısıtlanması (KKDİK), Kimyasal Değerlendirme Uzmanı (KDU)",
      image: cardResim1
    },
    {
      title: "İş ve Yönetim",
      subtitle: "",
      description: "Çağrı merkezi çalışanları, anketörler, meslek ve KOBİ danışmanları, kariyer ve yetenek yönetim uzmanları",
      image: cardResim2
    },
    {
      title: "TÜRK REACH",
      subtitle: "",
      description: "Registration, Evaluation, Authorisation and Restriction of Chemicals, Kimyasalların Kaydı, Değerlendirilmesi, İzni ve Kısıtlanması ",
      image: cardResim3
    },
    {
      title: "Ahşap Ürün Belgelendirme",
      subtitle: "",
      description: "Ahşap Ürün CE Belgelendirme çalışmaları",
      image: ahsap 
    }
  ];

  return (
    <div 
      className="relative bg-cover bg-center min-h-screen z-10" 
      style={{ backgroundImage: `url(${images})` }} // Background Image'i doğru şekilde çağırıyoruz
    >
      {/* Overlay */}  
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* İçerik */}  
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white pb-4 pt-48">
        {/* Başlık */}  
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Yetkin, Güvenilir, Tarafsız Sertifikasyon
        </h1>

        {/* Açıklama */}  
        <p className="text-lg lg:text-2xl mb-8 max-w-3xl">
          NBC Sertifikasyon olarak sektördeki uzmanlığımız ve kaliteli hizmet anlayışımızla...
        </p>

        {/* Butonlar */}  
        <div className="flex space-x-4 mb-10">
          <a
            href="#"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300"
          >
            Hemen Başvur
          </a>
          <a
            href="/contact"
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black rounded-lg font-semibold transition duration-300"
          >
            Daha Fazla Bilgi
          </a>
        </div>

        {/* Kartlar */}  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  text-black gap-6 px-6 mt-10">
          {cards.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              subtitle={card.subtitle}  
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
