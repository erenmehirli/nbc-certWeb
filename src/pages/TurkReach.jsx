import React from 'react';
import kkdikimg from '../assets/images/KKDİK.png';
import turkreach from '../assets/images/turkreach2.jpg';
const TurkReach = () => {
  return (

    <div>
          {/* Fotoğraf */}
      <div className="relative">
        <img
          src={turkreach}
          alt="Turk Reach"
          className="w-full h-96 object-cover bg-cover rounded-lg shadow-lg"
        />
        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black bg-opacity-70 p-4 rounded-lg">
          <h1 className="text-4xl font-bold">Türk Reach</h1>
          {/* Breadcrumbs */}
          <div id="breadcrumbs" className="text-black-300 mt-4">
            <div className="breadcrumb-trail">
              <a
                className="text-black hover:underline"
                href="https://nbccert.com.tr/"
              >
                Home
              </a>
              <span className="mx-2">/</span>
              <span>Türk Reach</span>
            </div>
          </div>
        </div>
      </div>
        <div  className="container mx-auto px-4 py-10 max-w-screen-md"> 
      <div className="text-center mt-10">
        <h3 className="text-md text-blue-600 font-bold mb-4">NBC Uygunluk Değerlendirme Eğitim Ltd. Şti.</h3>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed font-bold">
          REACH (Registration, Evaluation, Authorisation and Restriction of Chemicals), Avrupa Birliği’nde kimyasallara ilişkin mevcut birçok mevzuatı tek bir çatı altında toplayan bir AB tüzüğüdür.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          TÜRKREACH, Kimyasalların Kaydı, Değerlendirilmesi, İzni ve Kısıtlanması anlamına gelen ifadesinin harflerinden oluşturulmuş bir kısaltma olup KKDİK olarak ifade edilmektedir.
        </p>
      </div>

      <div className=" p-6 my-10">
        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          KKDİK Yönetmeliği, insan sağlığı ve çevreyi kimyasalların olumsuz etkilerinden en üst düzeyde korumayı amaçlamaktadır. Maddeyi kendi halinde veya karışım içinde yıllık bir ton ya da daha fazla miktarda imal eden veya ithal eden imalatçı ya da ithalatçı Bakanlığın internet sayfasında yer alan Kimyasal Kayıt Sistemi aracılığıyla Bakanlığa kayıt başvurusunda bulunur.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed">
          Tüm kayıt ettirecekler, 31/12/2020 tarihine kadar aşağıdaki bilgileri içeren ön-MBDF’yi (ön-kayıt) Bakanlığın internet sayfasında yer alan Kimyasal Kayıt Sistemi aracılığıyla Bakanlığa iletir:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
          <li>Ek-6’ya göre maddenin kimliği,</li>
          <li>Tedarik zincirindeki rolü.</li>
        </ul>
        <p className="text-lg text-gray-800 mt-4 leading-relaxed">
          Kayıt süreci öncelikle ön-kayıt (Ön-MBDF) olarak yapılacak olup, sonrasında kesin kayıt ile 31/12/2023 tarihine kadar sürecin tamamlanmış olması gerekmektedir.
        </p>
      </div>

      <div className=" p-6 my-10">
        <h4 className="text-2xl text-black font-bold mb-4">AB Pazarına Kimyasal Madde Mi İhraç Ediyorsunuz?</h4>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
        AB pazarına kimyasal madde pazarlayan bir firma olarak, Avrupa Parlamentosunun <a href="https://echa.europa.eu/documents/10162/13641/echa_review_dinp_and_didp_en.pdf" className='text-blue-500'>1907/2006 Mevzuat Numaralı </a>ve Konseyin 18 Aralık 2006 tarihli Kimyasalların Kaydı, Değerlendirilmesi, Kısıtlanması ve Yasaklanması anlamına gelen REACH Tüzüğüne uyumlu olmanız gerekmektedir. 1 Temmuz 2007’de yürürlüğe giren REACH Tüzüğü insan sağlığını ve çevreyi, kimyasallar tarafından oluşabilecek risklere karşı korumayı hedeflemektedir.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
        REACH’ in AB’deki üreticiler, AB’deki Alt Kullanıcılar ve kimyasalı tek başına, bir karışım içinde ve bir eşyanın içinde AB’ye ihraç eden AB-dışı üreticiler üzerinde önemli etkileri vardır. <i className='underline'>AB’ye ihracat yapan AB-dışı kimyasal madde üreticileri, REACH ile ilgili yükümlülüklerini yerine getirmek ve gizli firma bilgilerini korumak için yasal olarak bir Tek Temsilci atamalıdır. </i>Buna ek olarak, bir kimyasal maddenin REACH kaydı karmaşık bir işlemdir ve üretici ve ithalatçıların ciddi çabasının yanı sıra uzman danışmanlara da ihtiyaç duyabilirler. Tek temsilci kayıt ve <i className='font-bold'>KKDİK </i>mevzuatı ile ilgili tüm yükümlülükleri yerine getirmelidir. Tek Temsilci, ithalatçının tüm yükümlülüklerinden sorumludur. Tek Temsilci, kayıt ve KKDİK mevzuatı ile ilgili tüm yükümlülükleri yerine getirir.

        </p>
        <p className='text-lg text-gray-700 leading-relaxed'>
        Türkiye’de yerleşik firmaların kayıt sırasında firma kimlik bilgilerinin gizliliğini korumak için <i className='font-bold'>Üçüncü taraf temsilci</i> ataması da yapabilirler.
        </p>
      </div>

      <div className=" p-6 my-10">
        <h4 className="text-2xl text-black font-bold mb-4">Tek Temsilcilik Hizmetleri</h4>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Tonaj takibi ve güncel Güvenlik Bilgi Formu takibi</li>
          <li>Ön-kayıt</li>
          <li>SIEF/Konsorsiyum Temsili</li>
          <li>Gecikmeli ön-kayıt</li>
          <li>Soruşturma (Inquiry) Bildirimi</li>
          <li>Kayıt</li>
          <li>Yasal temsilcilik</li>
        </ul>
      </div>

      <div className="  p-6 my-10">
        <h4 className="text-2xl text-black font-bold mb-4">Kayıt Yoksa Pazar Da Yok!</h4>
        <p className="text-lg text-gray-700 leading-relaxed">
          AB pazarına sürülen maddelerin kayıt veya ön-kaydının yapılması gerekmektedir. Aksi takdirde REACH’e uyumlu değilsiniz ve AB piyasasındaki pazar payınız tehlikede demektir.
        </p>
      </div>

      <div className="  p-6 my-10 text-center">
        <h4 className="text-2xl text-black font-bold mb-4">SDS Hazırlama</h4>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">Belgelendirme için bize ulaşabilirsiniz.</p>
        <a href="/contact"> <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300">
          İletişim
        </button>   </a>
        
      </div>
      </div>
      <div>
        <img src={kkdikimg} alt="" />
        <div className=" p-6 my-10 text-center">
        <h4 className="text-xl font-thin text-blue-500 font-bold mb-4">Bize ulaşın</h4>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">TURK REACH Kimyasalların Kaydı, Değerlendirilmesi, İzni ve Kısıtlanması ile ilgili sorularınız için bize ulaşın!</p>
        <a href="/contact"> <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300">
          İletişim
        </button>   </a>
        
      </div>
      </div>
    </div>
  );
};

export default TurkReach;
