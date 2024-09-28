import React from "react";
import woodCertificationImage from "../assets/images/Yetkilerimiz3.png"; 

const AhsapUrun = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Başlık */}
      <br />
      <br />
      <br />
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Ahşap Ürün Belgelendirme
      </h1>

      {/* Başlık Altı Açıklama */}
      <div className="text-lg leading-relaxed space-y-4 mb-12 text-gray-700 text-center">
        <p>
          Ahşap ürün belgelendirme süreci, ahşap ürünlerin uluslararası standartlara
          uygunluğunu denetleyen ve onaylayan bir prosedürdür. Bu sertifikasyon,
          ürünlerin kalitesini ve güvenliğini artırarak pazardaki rekabet gücünü
          yükseltir.
        </p>
      </div>

      {/* Görsel ve Açıklamalar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-6 md:space-y-0 md:space-x-6">
        {/* Görsel */}
        <div className="flex-shrink-0">
          <img
            src={woodCertificationImage}
            alt="Ahşap Ürün Belgelendirme"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Açıklamalar */}
        <div className="md:w-1/2 space-y-4 text-gray-700">
          <p>
            Ahşap ürün belgelendirme süreci, çevreye duyarlı ve sürdürülebilir
            ahşap kaynaklarının kullanımını teşvik eden bir sistemdir. Bu sistem,
            ürünlerin kalitesini ve sürdürülebilirliğini garanti altına alır.
          </p>
          <p>
            Belgelendirme, ahşap ürünlerin hem ulusal hem de uluslararası
            pazarlarda geçerliliğini sağlarken, çevresel sorumluluklarınızı
            yerine getirdiğinizi gösterir.
          </p>
        </div>
      </div>

      {/* Hizmetler Bölümü */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-4 mb-12">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Ahşap Ürün Belgelendirme Hizmetlerimiz
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Kalite Kontrol:</strong> Ahşap ürünlerin kalite standartlarına uygun olup olmadığını denetleyen testler.
          </li>
          <li>
            <strong>Çevreye Uygunluk:</strong> Ürünlerin çevreye olan etkisini ölçerek çevre dostu standartlara uyum sağlaması.
          </li>
          <li>
            <strong>Sürdürülebilirlik Sertifikası:</strong> Ahşap ürünlerin sürdürülebilir kaynaklardan üretildiğini belgeleyen sertifikalar.
          </li>
          <li>
            <strong>Uluslararası Standartlara Uyum:</strong> Ürünlerin uluslararası kabul görmüş standartlara uygun olduğunu onaylayan sertifikalar.
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

export default AhsapUrun;
