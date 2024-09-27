import React from 'react';
import Nbcard from './Nbcard';
import { faIndustry, faHeadset, faHorseHead, faHockeyPuck } from '@fortawesome/free-solid-svg-icons'; 



const CardContainer = () => {
  const icons = [faIndustry, faHeadset, faHorseHead, faHockeyPuck , faHorseHead , faHockeyPuck ];
  

  const cardData = [
    { title: 'Çağrı Merkezi Takım Lideri', description: 'Eğitim, Sınav, Belgelendirme' }, 
    { title: 'Satış Müdürü', description: 'Satış, Eğitim, Sınav, Belgelendirme' },
    { title: 'Pazarlama Uzmanı', description: 'Sınav, Belgelendirme' },
    { title: 'Yazılım Geliştirici', description: 'Sınav, Belgelendirme' },
    { title: 'Proje Yöneticisi', description: 'CE Belgelendirme' },
    { title: 'Dijital Pazarlama Uzmanı', description: 'Eğitim, Sınav, Belgelendirme' }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        
      <div className="grid grid-cols-2 gap-6 py-10 w-full max-w-4xl">  
        {cardData.map((card, index) => (
          <div 
            className={`transform transition-transform duration-500 ease-in-out animate-slide-in`}
            key={index}
          > 
            <Nbcard title={card.title} description={card.description} icon={icons[index]} /> {/* Dinamik veri gönderimi */}
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
