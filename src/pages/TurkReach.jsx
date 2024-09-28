import React from "react";
import turkReachImage from "../assets/images/Yetkilerimiz3.png"; 

const TurkReach = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Başlık */}
      <br />
      <br />
      <br />
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        TURKREACH
      </h1>

      {/* Açıklama */}
      <div className="text-lg leading-relaxed space-y-4 mb-12 text-gray-700 text-center">
        <p>
          TURKREACH, Türkiye'de kimyasal maddelerin kayıt altına alınması, değerlendirilmesi ve izlenmesine yönelik bir düzenlemedir. Bu düzenleme, kimyasalların insan sağlığı ve çevre üzerindeki olumsuz etkilerini en aza indirmek amacıyla oluşturulmuştur.
        </p>
        <p>
          Bu sistem, kimyasal maddelerle çalışan üreticilerin, ithalatçıların ve kullanıcıların sorumluluklarını belirler. TURKREACH, Türkiye'nin AB REACH yönetmeliğine uyum sürecinde geliştirilmiş olup, aynı standartları taşımaktadır.
        </p>
      </div>

      {/* Görsel ve Bilgiler */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-6 md:space-y-0 md:space-x-6">
        {/* Görsel */}
        <div className="flex-shrink-0">
          <img
            src={turkReachImage}
            alt="TURKREACH"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Bilgilendirme */}
        <div className="md:w-1/2 space-y-4 text-gray-700">
          <p>
            TURKREACH yönetmeliği, 23 Haziran 2017 tarihinde Resmi Gazete'de yayımlanmış olup, 31 Aralık 2023 tarihine kadar uygulanacaktır. Bu süreç, Türkiye'deki kimya sektörüne büyük bir dönüşüm sağlamış ve uluslararası ticarette rekabet avantajı yaratmıştır.
          </p>
          <p>
            Bu yönetmelik çerçevesinde kimyasalların kaydı, ithalatı, üretimi, kullanımı ve pazarlanması ile ilgili sorumluluklar belirlenmiştir. Kimyasal madde üreticileri ve ithalatçıları, kimyasalları uygun şekilde kayıt altına almalı ve gerekli testleri yapmalıdır.
          </p>
        </div>
      </div>

      {/* Kimyasallar ve Belgelendirme Bilgileri */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-4 mb-12">
        <h2 className="text-2xl font-semibold text-center mb-4">
          TURKREACH ile İlgili Bilgiler
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Kayıt:</strong> Kimyasal maddelerin kaydı, kimyasalların insan sağlığı ve çevre üzerindeki olası etkilerini değerlendirmeye yöneliktir.
          </li>
          <li>
            <strong>Değerlendirme:</strong> Kayıt altına alınan kimyasal maddeler, uluslararası standartlara göre değerlendirilir ve uygunlukları test edilir.
          </li>
          <li>
            <strong>İzin:</strong> Bazı tehlikeli kimyasal maddelerin Türkiye’de piyasaya sürülebilmesi için izin alınması gerekir.
          </li>
          <li>
            <strong>Kısıtlama:</strong> Çevre ve insan sağlığı açısından yüksek risk oluşturan kimyasalların üretim ve kullanımına sınırlamalar getirilmiştir.
          </li>
        </ul>
      </div>

      {/* Bilgi Butonu */}
      <div className="flex justify-center mb-12">
        <a
          href="/iletisim"
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Daha Fazla Bilgi Alın
        </a>
      </div>
    </div>
  );
};

export default TurkReach;
