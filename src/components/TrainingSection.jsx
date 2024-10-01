import React from 'react';
import Slider from 'react-slick';
import TrainingImage1 from '../assets/images/Yetkilerimiz.png';
import TrainingImage2 from '../assets/images/Yetkilerimiz2.png';
import TrainingImage3 from '../assets/images/Yetkilerimiz3.png';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

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
                src={TrainingImage1}
                alt="NBC Uygunluk Değerlendirme Eğitim"
                className="w-auto h-auto rounded-lg"
              />
            </div>
            <div className="mb-8 text-center">
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
          </div>

          <div className="flex flex-row items-center justify-center">
            <div className="flex justify-center">
              <img
                src={TrainingImage2}
                alt="ISO 9001 Eğitimleri"
                className="w-auto h-auto rounded-lg"
              />
            </div>
            <div className="mb-8 text-center">
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
          </div>

          <div className="flex flex-row items-center justify-center">
            <div className="flex justify-center">
              <img
                src={TrainingImage3}
                alt="ISO 17021 Eğitimleri"
                className="w-auto h-auto rounded-lg"
              />
            </div>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ISO 17021 Eğitimleri
              </h2>
              <p className="text-gray-600 mb-6">
                ISO 17021 sertifikasyon eğitimi ile kalite yönetim süreçlerinde uzmanlaşın.
              </p>
              <a
                href="#"
                className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition-colors duration-300 font-semibold"
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