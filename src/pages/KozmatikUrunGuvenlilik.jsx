import React from 'react';
import trainingImage from '../assets/images/Yetkilerimiz.png'; // Kendi görsel yolunuzu belirtin

const KozmetikUrunGuvenlilik = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Başlık */}
      <br />
      <br />
      <br />
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Sera Gazı Doğrulayıcı Eğitimi
      </h1>

      {/* Eğitim Görseli */}
      <div className="flex justify-center mb-8">
        <img
          src={trainingImage}
          alt="Sera Gazı Eğitimi"
          className="w-full h-auto max-w-3xl rounded-lg shadow-lg"
        />
      </div>

      {/* Açıklama */}
      <div className="text-lg leading-relaxed space-y-4 mb-12 text-gray-700">
        <p>
          Sera gazı doğrulayıcı eğitimi, katılımcılara sera gazı emisyon raporlamaları ve doğrulama süreçleri hakkında kapsamlı bilgi sağlamayı amaçlar. Eğitimde, uluslararası standartlara uygun doğrulama prosedürleri, emisyon kaynaklarının belirlenmesi ve raporlanması konuları işlenir.
        </p>
        <p>
          Bu eğitim programı, doğrulayıcı kuruluşlar, enerji sektöründeki profesyoneller, çevre danışmanları ve ilgili diğer tüm katılımcılar için uygundur. Eğitim sonunda katılımcılara sertifika verilir.
        </p>
      </div>

      {/* Eğitim Detayları */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-4 mb-12">
        <h2 className="text-2xl font-semibold">Eğitim Detayları</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Süre:</strong> 5 Gün (Toplam 40 saat)
          </li>
          <li>
            <strong>Kimler Katılabilir:</strong> Doğrulayıcı kuruluşlar, çevre mühendisleri, enerji uzmanları, kamu ve özel sektör temsilcileri
          </li>
          <li>
            <strong>Sertifika:</strong> Eğitim sonunda katılımcılara uluslararası geçerliliğe sahip sertifika verilecektir.
          </li>
          <li>
            <strong>İçerik:</strong> Sera gazı emisyon raporlaması, doğrulama süreçleri, emisyon kaynakları, uluslararası standartlar (ISO 14064, ISO 14065 vb.)
          </li>
        </ul>
      </div>

      {/* Eğitim Başvuru Butonu */}
      <div className="flex justify-center mb-12">
        <a
          href="/basvuru"
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Eğitime Başvur
        </a>
      </div>

      {/* Tablolu Bölüm */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse border border-gray-400">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-400 px-4 py-2">Song</th>
              <th className="border border-gray-400 px-4 py-2">Artist</th>
              <th className="border border-gray-400 px-4 py-2">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Malcolm Lockyer
              </td>
              <td className="border border-gray-400 px-4 py-2">1961</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Witchy Woman</td>
              <td className="border border-gray-400 px-4 py-2">The Eagles</td>
              <td className="border border-gray-400 px-4 py-2">1972</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Shining Star</td>
              <td className="border border-gray-400 px-4 py-2">
                Earth, Wind, and Fire
              </td>
              <td className="border border-gray-400 px-4 py-2">1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KozmetikUrunGuvenlilik;
