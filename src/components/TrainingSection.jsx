import React from 'react';
import Slider from 'react-slick';
import kozmetik from '../assets/images/kozmtk.jpg';

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import seragazi from '../assets/images/seragazi_370x210.jpg'
import kimyasal from '../assets/images/kimyasal due.png'
const TrainingSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
  };

  return (
    <section className="py-12 rounded-t-xl relative">
    <div className="container mx-auto">
      <Slider {...settings}>
        <div className="flex flex-row items-center justify-center">
          <div className="flex justify-center">
            <img
              src={seragazi}
              alt="NBC Uygunluk Değerlendirme Eğitim"
              className="w-[370px] h-[210px] object-cover rounded-lg" // Sabit genişlik ve yükseklik
            />
          </div>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
             Sera Gazı Doğrulayıcı Eğitimi
            </h2>
            <a
              href="/sera-gazı-eğitim"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              Eğitimlere Katılın
            </a>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <div className="flex justify-center">
            <img
              src={kimyasal}
              alt="ISO 9001 Eğitimleri"
              className="w-[370px] h-[210px] object-cover rounded-lg" // Sabit genişlik ve yükseklik
            />
          </div>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Kimyasal Değerlendirme Uzmanı Eğitimi
            </h2>
            <a
              href="/kimyasal-degerlendirme-egitim"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              Eğitimlere Katılın
            </a>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <div className="flex justify-center">
            <img
              src={kozmetik}
              alt="ISO 17021 Eğitimleri"
              className="w-[370px] h-[210px] object-cover rounded-lg" // Sabit genişlik ve yükseklik
            />
          </div>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
             Kozmetik Ürün Güvenlik Değerlendirmesi
            </h2>
            <a
              href="/kozmetik-urun-guvenlilik"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition-colors duration-300 font-semibold"
            >
              Eğitimlere Katılın
            </a>
          </div>
        </div>
      </Slider>
    </div>
  </section>
);
};
const NextArrow = ({ onClick }) => {
  return (
    <div
      className={`
        absolute right-8 top-1/2 transform -translate-y-1/2 
        bg-slate-100 text-slate-500 p-4 rounded-full cursor-pointer z-10
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all
        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
      `}
      onClick={onClick}
    >
      <ArrowForwardIosOutlinedIcon />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className={`
        absolute left-8 top-1/2 transform -translate-y-1/2 
        bg-slate-100 text-slate-500 p-4 rounded-full cursor-pointer z-10
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all
        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
      `}
      onClick={onClick}
    >
      <ArrowBackIosOutlinedIcon />
    </div>
  );
};

export default TrainingSection;
