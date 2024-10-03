import React from "react";
import Nbcard from "./Nbcard";
import {
  faIndustry,
  faHeadset,
  faHorseHead,
  faHockeyPuck,
} from "@fortawesome/free-solid-svg-icons";

const CardContainer = () => {
  const icons = [
    faIndustry,
    "EngineerSvg",
    faHeadset,
    faHorseHead,
    "WoodSvg",
    faHockeyPuck,
  ];

  const cardData = [
    {
      title: "Sera Gazı Doğrulayıcı",
      description: "Eğitim, Sınav, Belgelendirme",
      path: "/sera-gazi", // Kart için rota
    },
    {
      title: "Kimyasal Değerlendirme Uzmanı (KDU)",
      description: "Satış, Eğitim, Sınav, Belgelendirme",
      path: "/kimyasal-degerlendirme-egitim",
    },
    {
      title: "Çağrı Merkezi Müşteri Temsilcisi",
      description: "Sınav, Belgelendirme",
      path: "/cagri-merkezi",
    },
    {
      title: "Çağrı Merkezi Takım Lideri",
      description: "Sınav, Belgelendirme",
      path: "/cagrımerkezi",
    },
    {
      title: "Ahşap Ürün Belgelendirme",
      description: "CE Belgelendirme",
      path: "/ahsap",
    },
    {
      title: "Kozmetik Ürün Güvenlilik Değerlendirmesi",
      description: "Eğitim, Sınav, Belgelendirme",
      path: "/kozmetik-urun-guvenlilik",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-2 gap-6 py-10 w-full max-w-4xl">
        {cardData.map((card, index) => (
          <div
            className={`transform transition-transform duration-500 ease-in-out animate-slide-in`}
            key={index}
          >
            <Nbcard
              title={card.title}
              description={card.description}
              icon={icons[index]}
              path={card.path} // Dinamik rota gönderimi
            />{" "}
            {/* Dinamik veri gönderimi */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
