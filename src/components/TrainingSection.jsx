import React from 'react';
import Slider from 'react-slick';
import TrainingImage1 from '../assets/images/Yetkilerimiz.png'; // İlk görsel
import TrainingImage2 from '../assets/images/Yetkilerimiz2.png'; // İkinci görsel
import TrainingImage3 from '../assets/images/Yetkilerimiz3.png'; // Üçüncü görsel
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

const TrainingSection = () => {
  // Slider ayarları
  const settings = {
    dots: true, // Alt tarafta slider göstergesi
    infinite: true, // Sonsuz döngü
    speed: 500, // Geçiş hızı
    slidesToShow: 1, // Ekranda kaç tane slide gösterilecek
    slidesToScroll: 1, // Kaç slide ilerleyecek
    nextArrow: <NextArrow />, // Özelleştirilmiş Next butonu
    prevArrow: <PrevArrow />, // Özelleştirilmiş Prev butonu
  };

  return (
    <section className="bg-slate-100 py-12 rounded-t-xl">
      <div className="container mx-auto">
        {/* Slider */}
        <Slider {...settings}>
          <div className="flex flex-row lg:flex-row items-center justify-between px-4">
            {/* Sol taraf (metin) */}
            <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                NBC Uygunluk Değerlendirme Eğitim
              </h2>
              <p className="text-gray-600 mb-6">
                NBC uygunluk değerlendirme eğitimi ile sektördeki deneyiminizi artırın ve kalite yönetim standartlarına uygun yetkinlik kazanın.
              </p>
              <a
                href="#"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
              >
                Eğitimlere Katılın
              </a>
            </div>

            {/* Sağ taraf (resim) */}
            <div className="lg:w-1/2">
              <img
                src={TrainingImage1}
                alt="NBC Uygunluk Değerlendirme Eğitim"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between px-4">
            <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ISO 9001 Eğitimleri
              </h2>
              <p className="text-gray-600 mb-6">
                ISO 9001 kalite yönetim sistemleri eğitimimizle yetkinliklerinizi geliştirin.
              </p>
              <a
                href="#"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
              >
                Eğitimlere Katılın
              </a>
            </div>

            <div className="lg:w-1/2">
              <img
                src={TrainingImage2}
                alt="ISO 9001 Eğitimleri"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between px-4">
            <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ISO 17021 Eğitimleri
              </h2>
              <p className="text-gray-600 mb-6">
                ISO 17021 sertifikasyon eğitimi ile kalite yönetim süreçlerinde uzmanlaşın.
              </p>
              <a
                href="#"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
              >
                Eğitimlere Katılın
              </a>
            </div>

            <div className="lg:w-1/2">
              <img
                src={TrainingImage3}
                alt="ISO 17021 Eğitimleri"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

// Özelleştirilmiş Next ve Prev butonları
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <ArrowForwardIosOutlinedIcon/>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <ArrowBackIosOutlinedIcon/>
  </div>
);

export default TrainingSection;
