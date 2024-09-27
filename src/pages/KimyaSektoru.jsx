import React from 'react';
import seraImage from '../assets/images/Yetkilerimiz2.png'; // Görsel yolu

const KimyaSektoru = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Başlık */}
      <br />
      <br />
      <br />
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Sera Gazı
      </h1>

      {/* Sayfa Görseli */}
      <div className="flex justify-center mb-8">
        <img
          src={seraImage}
          alt="Sera Gazı"
          className="w-full h-auto max-w-3xl rounded-lg shadow-lg"
        />
      </div>

      {/* Metin Bölümü */}
      <div className="text-lg leading-relaxed space-y-4 mb-12 text-gray-700">
        <p>
          Sera gazları, atmosferde bulunan ve güneşten gelen enerjiyi tutarak
          gezegenimizin ısınmasına neden olan gazlardır. Bu gazlar doğal olarak
          oluşabilir veya insan faaliyetleri sonucu atmosfere salınabilir.
          Karbondioksit (CO2), metan (CH4), diazot monoksit (N2O) gibi sera
          gazları, iklim değişikliğine önemli derecede katkı sağlar.
        </p>
        <p>
          Sera gazı emisyonlarının azaltılması, iklim değişikliğini hafifletmek
          için büyük önem taşımaktadır. Çeşitli sektörlerde sera gazı emisyonları
          izlenmekte, raporlanmakta ve kontrol altına alınmaya çalışılmaktadır.
        </p>
      </div>

      {/* Hizmetler Listesi */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-4 mb-12">
        <h2 className="text-2xl font-semibold">Sera Gazı Doğrulama Hizmetlerimiz</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Emisyon Raporlaması:</strong> Sera gazı emisyonlarının
            düzenli olarak raporlanması ve izlenmesi.
          </li>
          <li>
            <strong>Doğrulama Hizmeti:</strong> Emisyon verilerinin bağımsız
            kuruluşlar tarafından doğrulanması.
          </li>
          <li>
            <strong>Sertifikasyon:</strong> Doğrulama sonrasında emisyon
            verilerinin uluslararası standartlara uygun olarak sertifikalandırılması.
          </li>
          <li>
            <strong>Danışmanlık:</strong> Sera gazı emisyonlarını azaltmaya yönelik
            strateji ve yöntemler hakkında profesyonel danışmanlık hizmetleri.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KimyaSektoru;
