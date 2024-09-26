import React from 'react';
import AboutImage from '../assets/images/Yetkilerimiz.webp'; // Hakkımızda görselini buraya ekleyin
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <br />
        <br />
        <br />
        <br />
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Hakkımızda
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Sol Taraf (Metin) */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              NBC Sertifikasyon
            </h3>
            <p className="text-gray-600 mb-4">
              NBC Sertifikasyon, kalite yönetim sistemleri konusunda uzmanlaşmış bir kuruluştur. Müşterilerine en yüksek standartlarda hizmet sunmayı amaçlamakta ve sektördeki en iyi uygulamaları takip etmektedir.
            </p>
            <p className="text-gray-600 mb-4">
              Sektördeki deneyimimiz ve uzmanlığımız ile müşterilerimizin ihtiyaçlarını anlayarak onlara özel çözümler sunuyoruz. Hedefimiz, müşterilerimizin kalite yönetim süreçlerini geliştirerek onların rekabet avantajı elde etmelerine yardımcı olmaktır.
            </p>
          </div>

          {/* Sağ Taraf (Resim) */}
          <div className="lg:w-1/2">
            <img
              src={AboutImage}
              alt="Hakkımızda"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Ek Bilgiler */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Vizyonumuz
          </h3>
          <p className="text-gray-600 mb-4">
            Kalite ve güvenilirliği ön planda tutarak, müşteri memnuniyetini sağlamak ve sektördeki en iyi sertifikasyon kuruluşu olmaktır.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Misyonumuz
          </h3>
          <p className="text-gray-600 mb-4">
            Müşterilerimize en yüksek kalitede hizmet sunarak, onların kalite yönetim sistemlerini sürekli olarak geliştirmelerine destek olmaktır.
          </p>
        </div>
      </div>

      {/* Kartlar Bölümü */}
      <div className="flex flex-col px-5 lg:px-20 py-16 items-center gap-5 lg:gap-10">
        <h1 className="text-xl text-center lg:text-4xl font-bold">
          Hizmetlerimizin Size Sunduğu Fırsatlar
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center text-dark gap-5">
          {/* Kart 1 */}
          <div className="flex flex-col p-8 rounded-lg w-full gap-5 text-center border-4 border-blue-400 transition-transform transform hover:scale-105" style={{ backgroundColor: "#ffff", transitionDuration: "400ms" }}>
            <CheckCircleIcon fontSize="large" className="mx-auto mb-4 text-blue-600" />
            <h1 className="text-xl font-bold">Uluslararası Pazarlara Ulaşım</h1>
            <p>
              Küresel ticaret fırsatlarını yakalamak ve işinizi uluslararası arenada daha geniş bir yelpazeye yaymak mümkün hale gelir.
            </p>
          </div>

          {/* Kart 2 */}
          <div className="flex flex-col p-8 rounded-lg w-full gap-5 text-center border-4 border-blue-400 transition-transform transform hover:scale-105" style={{ backgroundColor: "#ffff", transitionDuration: "400ms" }}>
            <CheckCircleIcon fontSize="large" className="mx-auto mb-4 text-blue-600" />
            <h1 className="text-xl font-bold">Prestij Kazanma</h1>
            <p>
              Uluslararası arenada saygınlık kazanmak için, sektörde tanınmış, stratejik avantajlara sahip ve güçlü ekonomik yapılarıyla bilinen ülkelerde şirket kurarak global prestijinizi artırabilirsiniz.
            </p>
          </div>

          {/* Kart 3 */}
          <div className="flex flex-col p-8 rounded-lg w-full gap-5 text-center border-4 border-blue-400 transition-transform transform hover:scale-105" style={{ backgroundColor: "#ffff", transitionDuration: "400ms" }}>
            <CheckCircleIcon fontSize="large" className="mx-auto mb-4 text-blue-600" />
            <h1 className="text-xl font-bold">Vergi Fırsatlarından Yararlanmak</h1>
            <p>
              Vergi teşvikleri ve avantajları sunan uluslararası yapılar oluşturarak, başta KDV olmak üzere çeşitli vergi yükümlülüklerinde tasarruf sağlamak.
            </p>
          </div>

          {/* Kart 4 */}
          <div className="flex flex-col p-8 rounded-lg w-full gap-5 text-center border-4 border-blue-400 transition-transform transform hover:scale-105" style={{ backgroundColor: "#ffff", transitionDuration: "400ms" }}>
            <CheckCircleIcon fontSize="large" className="mx-auto mb-4 text-blue-600" />
            <h1 className="text-xl font-bold">Rekabet Üstünlüğü</h1>
            <p>
              Sektörünüzde öne çıkmanızı sağlayacak stratejik yaklaşımlar sunarak, sürdürülebilirlik ve inovasyon odaklı çalışmalarınızla rekabet üstünlüğü kazanmanıza yardımcı oluyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
