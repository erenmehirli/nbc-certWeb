import React from 'react';

const EducationTable = () => {
  return (
    <section className="relative bg-white py-10">
      <div className="absolute inset-0 "></div>
      <div className="container mx-auto px-4">
        {/* Spacer */}
        <div className="py-6"></div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full bg-white table-auto border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-left">Eğitimin Adı</th>
                <th className="py-3 px-6 text-left">Eğitim Yeri</th>
                <th className="py-3 px-6 text-left">Eğitim Tarihi</th>
                <th className="py-3 px-6 text-left">Sınav Tarihi</th>
                <th className="py-3 px-6 text-left">Kurum</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-6">KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMİ</td>
                <td className="py-3 px-6">İSTANBUL</td>
                <td className="py-3 px-6">07-15 EKİM 2024</td>
                <td className="py-3 px-6">17 EKİM 2024</td>
                <td className="py-3 px-6">İSTANBUL TEKNİK ÜNİVERSİTESİ</td>
              </tr>
              <tr className="bg-white border-b border-gray-200">
                <td className="py-3 px-6">SERA GAZI DOĞRULAYICI VE BAŞ DOĞRULAYICI EĞİTİMİ</td>
                <td className="py-3 px-6">ONLINE</td>
                <td className="py-3 px-6">21-25 EKİM 2024</td>
                <td className="py-3 px-6">26 EKİM 2024</td>
                <td className="py-3 px-6">İSTANBUL TEKNİK ÜNİVERSİTESİ</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-6">KOZMETİK ÜRÜN GÜVENLİLİK DEĞERLENDİRİCİSİ EĞİTİMİ VE SINAVI</td>
                <td className="py-3 px-6">ONLINE/ANKARA-İZMİR-İSTANBUL</td>
                <td className="py-3 px-6">10-17 EYLÜL 2024</td>
                <td className="py-3 px-6">15-17-18 EYLÜL 2024</td>
                <td className="py-3 px-6">NBC UYGUNLUK DEĞERLENDİRME EĞİTİM LTD ŞTİ</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-6">KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMİ</td>
                <td className="py-3 px-6">DENİZLİ</td>
                <td className="py-3 px-6">16-25 EYLÜL 2024</td>
                <td className="py-3 px-6">3 EKİM 2024</td>
                <td className="py-3 px-6">	KİMYA MÜHENDİSLERİ ODASI-DENİZLİ</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-6">KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMİ</td>
                <td className="py-3 px-6">BURSA</td>
                <td className="py-3 px-6">15-16-17-18-21-22-23-24EKİM 2024</td>
                <td className="py-3 px-6">25 EKİM 2024</td>
                <td className="py-3 px-6">MAVİ YEŞİL DANIŞMANLIK</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-6">KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMİ</td>
                <td className="py-3 px-6">BURSA</td>
                <td className="py-3 px-6">10-11-12-13-16-17-18-19 ARALIK 2024</td>
                <td className="py-3 px-6">20 ARALIK 2024</td>
                <td className="py-3 px-6">MAVİ YEŞİL DANIŞMANLIK</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-6">KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMİ</td>
                <td className="py-3 px-6">ANKARA</td>
                <td className="py-3 px-6">25-26-27-30 EYLÜL-1-2-3-4 EKİM</td>
                <td className="py-3 px-6">5 EKİM 2024</td>
                <td className="py-3 px-6">NBC UYGUNLUK DEĞERLENDİRME EĞİTİM LTD ŞTİ</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-6">KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMİ</td>
                <td className="py-3 px-6">İSTANBUL</td>
                <td className="py-3 px-6">2-11 ARALIK 2024</td>
                <td className="py-3 px-6">12 ARALIK 2024</td>
                <td className="py-3 px-6">İSTANBUL TEKNİK ÜNİVERSİTESİ</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-6">KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMİ</td>
                <td className="py-3 px-6">ADANA</td>
                <td className="py-3 px-6">-</td>
                <td className="py-3 px-6">11 EKİM 2024</td>
                <td className="py-3 px-6">KİMYA MÜHENDİSLERİ ODASI- ADANA</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-6">SERA GAZI DOĞRULAYICI VE BAŞ DOĞRULAYICI EĞİTİMİ</td>
                <td className="py-3 px-6">ONLINE</td>
                <td className="py-3 px-6">7-11 EKİM 2024</td>
                <td className="py-3 px-6">12 Ekim 2024</td>
                <td className="py-3 px-6">BUREAU VERITAS</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-6">KOZMETİK ÜRÜN GÜVENLİLİK DEĞERLENDİRİCİSİ EĞİTİMİ VE SINAVI</td>
                <td className="py-3 px-6">ONLINE/ANKARA-İZMİR-İSTANBUL	</td>
                <td className="py-3 px-6">15-16-17-18/19-21-22 EKİM 2024</td>
                <td className="py-3 px-6">20-22-23 EKİM 2024</td>
                <td className="py-3 px-6">NBC UYGUNLUK DEĞERLENDİRME EĞİTİM LTD ŞTİ</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-6">KİMYASAL KAYIT SİSTEMİ EĞİTİMİ</td>
                <td className="py-3 px-6">ONLINE</td>
                <td className="py-3 px-6">30-31 EKİM 2024</td>
                <td className="py-3 px-6">-</td>
                <td className="py-3 px-6">NBC UYGUNLUK DEĞERLENDİRME EĞİTİM LTD ŞTİ</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-6">AHŞAP YAPI TASARIM EĞİTİMİ</td>
                <td className="py-3 px-6">ONLINE</td>
                <td className="py-3 px-6">16-17 OCAK 2025</td>
                <td className="py-3 px-6">18 Ocak 2025</td>
                <td className="py-3 px-6">NBC UYGUNLUK DEĞERLENDİRME EĞİTİM LTD ŞTİ</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-6">SERA GAZI DOĞRULAYICI VE BAŞ DOĞRULAYICI EĞİTİMİ</td>
                <td className="py-3 px-6">ONLINE</td>
                <td className="py-3 px-6">14-18 EKİM 2024</td>
                <td className="py-3 px-6">19 EKİM 2024</td>
                <td className="py-3 px-6">KİMYA SANAYİCİLERİ DERNEĞİ- MAVİ YEŞİL DANIŞMANLIK</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Spacer */}
        <div className="py-6"></div>
      </div>
    </section>
  );
};

export default EducationTable;
