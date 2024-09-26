import React from 'react';
import images from "../assets/images/imagesHero.jpg"; // Görseli import ediyoruz
import Card from './Cards'; // Kart bileşenini import ediyoruz

const Hero = () => {
  // Kart verileri
  const cards = [
    {
      title: "Sertifikasyon Süreci",
      description: "Sertifikasyon sürecimizin adımlarını öğrenin.",
      image: "https://via.placeholder.com/300" // Buraya gerçek görsel URL'lerinizi koyun
    },
    {
      title: "Eğitim Programları",
      description: "Uzman eğitmenlerimizle eğitim programlarımız hakkında bilgi alın.",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Başvuru Süreci",
      description: "Başvuru sürecini nasıl başlatacağınızı öğrenin.",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Kalite Yönetimi",
      description: "Kalite yönetimi ve belgelendirme hakkında bilgi alın.",
      image: "https://via.placeholder.com/300"
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
            href="#"
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black rounded-lg font-semibold transition duration-300"
          >
            Daha Fazla Bilgi
          </a>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-10">
          {cards.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
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
