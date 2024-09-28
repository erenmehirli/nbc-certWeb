import React from 'react';
import seraImage from '../assets/images/SeraGazı.png'; // Görsel yolu

const SeraGazi = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Başlık */}
      
      <br />
      <br />
      <br />
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
      Sera Gazı Doğrulayıcısı
      <br />
      Sera Gazı Baş Doğrulayıcısı
      </h1>
      <h1 className='text-4xl font-light text-center  text-gray-800'>
      Personel Belgelendirme Akreditasyonu
      </h1>

    
     <br />
     <br />
     <br />
      {/* Metin Bölümü */}
      <div className="text-lg leading-relaxed space-y-4 mb-12 text-gray-700">
        <p>
        Kuruluşumuz ISO 14064 -1,-2,-3 standartının denetimini yapan kişilerin – doğrulayıcı ve baş doğrulayıcı – belgelendirmesi konusunda, Amerika’da yerleşik IAS Akreditasyon kurumu tarafından ISO 17024 standardına göre “Sera gazı doğrulayıcısı” ve “Sera gazı baş doğrulayıcısı” belgelendirme programına uygun olarak personel belgelendirme akreditasyonuna sahiptir.
        </p>
        <br />
        <p>
        Sera Gazı Emisyonları, Sera Gazı Emisyonları İzleme Ve Raporlama İlkeleri, Sera Gazı Emisyonları Doğrulama İlkeleri ve Hesaplamaları gibi birçok konu başlığını ele almaktadır.
        </p>
        <br />
        <p>
        Sera gazı raporlamasında tutarlılığı sağlamak ve diğer iletişimlerde uluslararası piyasa kamu güvenliğini sağlamak için doğrulama ekiplerinin ve geçerli kılma ekiplerinin yetkinlik gerekliliklerini tanımlamaya, ölçmeye ve belgelemeye ihtiyaç vardır. Bu program, doğrulama kuruluşlarında ve doğrulama kuruluşlarında çeşitli doğrulama veya doğrulama faaliyetlerinde yer alan personelin yetkinliğini belirlenen ekipte belirlemek, göstermek ve yönetmek için oluşturulmuştur.
        </p>
        <br />
        <p>
        Doğrulama veya geçerli kılma kuruluşunun rolü, doğrulama veya geçerli kılma sürecini etkin bir şekilde tamamlamak için ekiplere gerekli yetkinliği sağlamaktır. Doğrulayıcı sertifikasyon programı, doğrulama ekipleri ve geçerli kılma ekiplerinin  yeterliliğini ölçmek için ilkeleri içerir. Bu desteklenen ilkeler, doğrulama veya geçerli kılma ekiplerinin rolüne dayalı genel gereksinimlerdir. Doğrulama ekipleri, doğrulayıcı sertifikasyon programına, sera gazı (GHG) program yöneticilerine, düzenleyicilere, doğrulayıcılara ve doğrulama kuruluşlarına fayda sağlamak için uzmanlığa ihtiyaç duyar. Doğrulayıcı sertifikasyon programı, yeterlilik gerekliliklerini inceleme yoluyla ölçer ve sertifika gerekliliklerini tanımlar.
        </p>
      </div>


<div className='w-full'>
<img src={seraImage} className="" />

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

export default SeraGazi;
