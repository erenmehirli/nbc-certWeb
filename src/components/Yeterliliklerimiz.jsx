import React from 'react';
import Yeterliliklerimiz1 from "../assets/images/Yetkilerimiz.png"; 
import Yeterliliklerimiz2 from "../assets/images/Yetkilerimiz2.png"; 
import Yeterliliklerimiz3 from "../assets/images/Yetkilerimiz3.png"; 


const Yeterliliklerimiz = () => {
  // Kart verileri
  const cards = [
    {
    
      description: "Kuruluşumuz ISO 14064 -1,-2,-3 standartının denetimini yapan kişilerin – doğrulayıcı ve baş doğrulayıcı – belgelendirmesi konusunda, Amerika da yerleşik IAS Akreditasyon kurumu tarafından ISO 17024 standartına göre “Sera gazı doğrulayıcısı” ve “Sera gazı baş doğrulayıcısı” belgelendirme programına uygun olarak personel belgelendirme akreditasyonuna sahiptir.",
      image: Yeterliliklerimiz1, 
    },
    {
     
      description: "Kimyasalların Kaydı, Değerlendirilmesi, İzni ve Kısıtlanması hakkında Yönetmelik (KKDİK) kapsamında T.C. Çevre Şehircilik ve İklim Değişikliği Bakanlığı tarafından Kimyasal Değerlendirme Uzmanı (KDU) ve Güvenlik Bilgi Formu (GBF) hazırlayıcısı eğitim kuruluşu olarak atanmıştır. TÜRKAK 17024 Standardına göre Kimyasal Değerlendirme Uzmanı ve Güvenlik Bilgi Formu Hazırlayıcısı belgelendirme programlarına uygun olarak personel belgelendirme akreditasyonuna sahiptir.",
   
      image: Yeterliliklerimiz2, 
    },
    {
     
      description: "Kuruluşumuz TS EN ISO 17024 standartına göre akredite edilmiş, Mesleki yeterlilik kurumu (MYK) tarafından da incelenmiş ve 15UY0203-4 rev01  Çağrı merkezi müşteri temsilcisi, 15UY0204-5 rev01  Çağrı merkezi takım lideri ulusal yeterlilik yetki kapsamında sınav ve belgelendirme faaliyetlerini yürüten personel belgelendirme kuruluşudur.",

      image: Yeterliliklerimiz3, 
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Başlık */}
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Akreditasyon ve Yeterliliklerimiz
        </h2>

        {/* Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-gray-200 shadow-lg flex flex-col items-center p-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              {/* Resim */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-60 object-cover mb-4 rounded-md" // Resmi büyütüyoruz
              />

        

              {/* Açıklama */}
              <p className="text-gray-600 mb-4">{card.description}</p>

              {/* Buton */}
              <button className="text-blue-600 py-2 px-6 rounded transition-colors flex items-center space-x-1">
                <span>Learn More</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Yeterliliklerimiz;
