import React, { useState } from 'react';
import nbccosc from "../assets/images/nbcosc.png";
import banner from '../assets/images/koz-banner.jpeg';
const KozmetikUrunGuvenlilik = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const eğitimVerileri = [
    {
      konu: "MEVZUAT",
      yer: "* Kozmetik Mevzuatı genel bilgi• Kozmetik Ürünlerde Güvenlilik Değerlendirmesine İlişkin Kılavuz• Kozmetik Ürün İddialarına İlişkin Kılavuz• Kozmetik Ürünler ile Sınır Teşkil Eden Ürünlere İlişkin Kılavuz• Kozmetik Mevzuatına uygun etiket ve ambalaj hazırlanması",
      tarih: "Konu: MEVZUAT. Zaman: 13 Eyl 2024 09:00 ÖÖ İstanbul- Katıl Zoom Toplantı https://us06web.zoom.us/j/89647798205?pwd=xBZOb3NESNtRzJ8kMNlHbaLyQJBQlP.1- Toplantı Kimliği: 896 4779 8205 Parola: 197236",
      süre: "4 saat",
      eğitmen: "13 Eylül 2024 Cuma",
    },
    {
      konu: "FARMASOTİK TEKNOLOJİ",
      yer: "• Kozmetik ürünlerin uygulama bölgeleri ve şekilleri ile ilgili genel bilgi• Kozmetik ürünlerin bileşenleri ve formülasyonları• Geleneksel ve modern kozmetik taşıyıcı sistemler• Kozmetik ürünlerin fiziksel ve kimyasal stabilitesi• Kozmetik ürünlerin ambalajlanması• Kozmetik ürün ambalajının fiziksel, kimyasal ve mikrobiyolojik stabilite ve ürün güvenliği üzerine etkisi• Nanomateryal içeren kozmetik ürünler hakkında genel bilgi",
      tarih: "Konu: FARMASOTİK TEKNOLOJİ Zaman: 10 Eyl 2024 09:00 ÖÖ İstanbul- Katıl Zoom Toplantı https://us06web.zoom.us/j/85952541146?pwd=zuSBjP51RFtGobHwi2ybmpinJCaas5.1- Toplantı Kimliği: 859 5254 1146 Parola: 470659",
      süre: "6 saat",
      eğitmen: "10 Eylül 2024 Salı",
    },
    {
      konu: "MİKROBİYOLOJİ",
      yer: "• Mikroorganizmalar hakkında genel bilgi• Kozmetiklerde yasaklı mikroorganizmalar• Mikrobiyolojik kontrol basamakları• Kozmetiklerde kullanılan koruyucular ve challenge testleri• Pre/Pro/Post/Para biyotikler ve kozmetik ürünlerde değerlendirmesi",
      tarih: "Konu: MİKROBİYOLOJİ Zaman: 11 Eyl 2024 09:00 ÖÖ İstanbul- Katıl Zoom Toplantı https://us06web.zoom.us/j/84251530217?pwd=gl8aU2yv8aIK9JwonqJqgTna7xu9IO.1- Toplantı Kimliği: 842 5153 0217 Parola: 900074",
      süre: "4 saat",
      eğitmen: "12 Eylül 2024 Perşembe",
    },
    {
      konu: "FARMOKOGNOZİ",
      yer: "• Uçucu yağlar• Elde edilişleri• Aktif maddeleri• Kullanım amaçları• Uçucu yağların kozmetik ürünlerde güvenli kullanımı• Taşıyıcı yağlar• Elde edilişleri• Aktif maddeleri• Kullanım amaçları• Bitkisel ekstreler• Elde edilişleri• Aktif maddeleri• Kullanım amaçları• Doğal kozmetik bileşenler ve ambalaj materyali etkileşimi",
      tarih: "Konu: FARMOKOGNOZİ Zaman: 16 Ağu 2024 02:00 ÖS İstanbul- Katıl Zoom Toplantı https://us06web.zoom.us/j/88366370335?pwd=DjYwBvYnvJyDySmKACc3YW78Y0iuIB.1- Toplantı Kimliği: 883 6637 0335 Parola: 968881",
      süre: "4 saat",
      eğitmen: "13 Eylül 2024 Cuma",
    },
    {
      konu: "ANALİTİK KİMYA",
      yer: "• Sulu çözelti kimyası• Asitlik bazlık ve pH kavramları• Çözünürlük, dağılma ve partisyon katsayısı kavramlarına giriş• Derişim hesaplamaları• Volümetrik analiz hakkında genel bilgi• Spektroskopik ve kromatografik yöntemler hakkında gelen bilgi",
      tarih: "Konu: ANALİTİK KİMYA Zaman: 10 Eyl 2024 05:00 ÖS İstanbul- Katıl Zoom Toplantı https://us06web.zoom.us/j/88471702922?pwd=Kmd2IJKIkxwt0AN7GI1Ys4jWsybwwi.1- Toplantı Kimliği: 884 7170 2922 Parola: 093700",
      süre: "2 saat",
      eğitmen: "10 Eylül 2024 Salı",
    },
    {
      konu: "FARMOSÖTİK TOKSİKOLOJİ",
      yer: "• Kozmetik ürünlerin toksik etkileri• Lokal toksik etkiler• Sistemik toksik etkiler• Riskli gruplar (3 yaş altı, pediatrik grup, gebelik, laktasyon)• Kozmetik ürün bileşenleri ve bitmiş ürünlerde yapılan toksikolojik araştırmalar• In vitro testler• 3R prensibine göre alternatif yöntemler (Cilt irritasyon, cilt korozyonu, göz irritasyonu)• Klinik araştırmalar• Nanomateryal toksikolojisi hakkında genel bilgi• Safsızlıklar ve kalıntıların değerlendirilmesi• Güvenlilik değerlendirmesinde kullanılan toksikolojik parametreler• Doz bilgisi (POD, NOAEL, SED, MOS, A değeri)• Tehlike ve risk kavramları• Kozmetik ürünlerde güvenlilik değerlendirmesi için gerekli olan verilerin belirlenmesi• Kozmetik ürün bileşenleri ve bitmiş ürünlerde risk değerlendirmesi• Kozmetik ürünlerde güvenlilik hesaplamaları ve yorumlanması• Kozmetovijilans",
      tarih: "BİRİNCİ GÜN Konu: FARMOSÖTİK TOKSİKOLOJİ -1 Zaman: 11 Eyl 2024 02:00 ÖS İstanbul-Katıl Zoom Toplantı https://us06web.zoom.us/j/84275908156?pwd=QS0inRyMvZgTfcCqmHPTXs68HIBrqS.1- Toplantı Kimliği: 842 7590 8156 Parola: 116690- İKİNCİ GÜN Konu: FARMOSÖTİK TOKSİKOLOJİ -2 Zaman: 12 Eyl 2024 09:00 ÖS İstanbul- Katıl Zoom Toplantı https://us06web.zoom.us/j/83328491971?pwd=aoycXqFg4LUNaJcwkaXH2ga6zrJ3BS.1- Toplantı Kimliği: 833 2849 1971 Parola: 137937",
      süre: "4/8 saat",
      eğitmen: "11.09.2024/12.09.2024",
    },
    {
      konu: "UYGULAMALI EĞİTİM",
      yer: "Örnek ürün (en az 2) üzerinden Kozmetik Ürünler Yönetmeliği EK I/B kapsamında ürün güvenlilik değerlendirme raporu hazırlanması:• Formülasyonda yer alan bileşenlerin fizikokimyasal özellikleri ve kullanım amaçları ve konsantrasyonlarının mevzuatsal değerlendirmesi• Formülasyonda yer alan bileşenlerin toksikolojik profillerinin veri tabanları ve bilimsel literatür üzerinden araştırmalarının yapılarak değerlendirilmesi• A (rölatif günlük maruziyet değeri) değerleri bulunmayan maddelerin A değeri hesabının yapılması• NOAEL değeri bulunmayan bileşenler için güvenli kullanım konsantrasyonlarının yorumlanması• SED/MOS değerlerinin hesaplanması ve hedef gruplara yönelik yorumlanması• Örnek mikrobiyolojik ve koruyucu etkinlik test raporlarının yorumlanması• Örnek fiziksel ve kimyasal stabilite test raporlarının yorumlanması (SKT, PAO vb.)• Genel değerlendirme",
      tarih: "ANKARA - NBC MERKEZ OFİS EĞİTİM SALONU İSTANBUL - KİMYAGERLER DERNEĞİ İZMİR - KİMYAGERLER DERNEĞİ",
      süre: "8 saat",
      eğitmen: "İZMİR- 14.09.202409.00-18.00 İSTANBUL-15.09.202409.00-18.00 ANKARA-17.09.202409.00-18.00",
    },
  ];

  const filteredData = eğitimVerileri.filter((item) =>
    item.konu.toLowerCase().includes(searchTerm.toLowerCase())
  );



  const accordionData = [
    {
      title: 'MEVZUAT',
      content: `• Kozmetik Mevzuatı genel bilgi
                • Kozmetik Ürünlerde Güvenlilik Değerlendirmesine İlişkin Kılavuz
                • Kozmetik Ürün İddialarına İlişkin Kılavuz
                • Kozmetik Ürünler ile Sınır Teşkil Eden Ürünlere İlişkin Kılavuz
                • Kozmetik Mevzuatına uygun etiket ve ambalaj hazırlanması
                • Kozmetik ürünlerin uygulama bölgeleri ve şekilleri ile ilgili genel bilgi
                • Kozmetik ürünlerin bileşenleri ve formülasyonları
                • Geleneksel ve modern kozmetik taşıyıcı sistemler
                • Kozmetik ürünlerin fiziksel ve kimyasal stabilitesi
                • Kozmetik ürünlerin ambalajlanması
                • Nanomateryal içeren kozmetik ürünler hakkında genel bilgi`,
    },
    {
      title: 'MİKROBİYOLOJİ',
      content: `• Mikroorganizmalar hakkında genel bilgi
                • Kozmetiklerde yasaklı mikroorganizmalar
                • Mikrobiyolojik kontrol basamakları
                • Kozmetiklerde kullanılan koruyucular ve challenge testleri
                • Pre/Pro/Post/Para biyotikler ve kozmetik ürünlerde değerlendirmesi`,
    },
    {
      title: 'FARMOKOGNOZİ',
      content: `• Uçucu yağlar
                • Elde edilişleri
                • Aktif maddeleri
                • Kullanım amaçları
                • Uçucu yağların kozmetik ürünlerde güvenli kullanımı
                • Taşıyıcı yağlar
                • Bitkisel ekstreler`,
    },
    {
      title: 'ANALİTİK KİMYA',
      content: `• Sulu çözelti kimyası
                • Asitlik bazlık ve pH kavramları
                • Çözünürlük, dağılma ve partisyon katsayısı kavramlarına giriş
                • Derişim hesaplamaları
                • Volümetrik analiz hakkında genel bilgi
                • Spektroskopik ve kromatografik yöntemler`,
    },
    {
      title: 'FARMOSÖTİK TOKSİKOLOJİ',
      content: `• Kozmetik ürünlerin toksik etkileri
                • Lokal toksik etkiler
                • Sistemik toksik etkiler
                • Riskli gruplar
                • Kozmetovijilans`,
    },
    {
      title: 'UYGULAMALI EĞİTİM',
      content: `• Kozmetik Ürünler Yönetmeliği EK I/B kapsamında ürün güvenlilik değerlendirme raporu hazırlanması
                • Formülasyonda yer alan bileşenlerin fizikokimyasal özellikleri ve mevzuatsal değerlendirmesi
                • SED/MOS değerlerinin hesaplanması ve hedef gruplara yönelik yorumlanması`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="">
      {/* Arka Plan Resmi Üstünde Başlık */}
      <div
        id="featured-title"
        className="relative bg-cover bg-center min-h-96 flex items-center justify-center"
        style={{
          backgroundImage:`url(${banner})` ,
        }}
      >
        <div className="container mx-auto py-16 h-full flex items-center justify-center">
          <div className="inner-wrap text-center text-blue-950">
            <div className="title-group">
              <h1 className="main-title text-3xl font-bold">
                KOZMETİK ÜRÜN GÜVENLİLİK DEĞERLENDİRME EĞİTİMİ
              </h1>
            </div>
            <div id="breadcrumbs" className="mt-4">
              <div className="breadcrumbs-inner">
                <div className="breadcrumb-trail text-sm">
                  <a href="/" className="text-blue-950 hover:text-white transition">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                  <span>Kozmetik Ürün Güvenlilik Değerlendirme Eğitimi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className="container mx-auto px-4 py-8">
        <div className="text-left mb-8">
          <div className="text-gray-700 uppercase font-bold">
            KOZMETİK ÜRÜN GÜVENLİLİK DEĞERLENDİRME EĞİTİMİ / AMAÇ
          </div>
          <div className="p-4">
            <p className="mb-4">
              Kozmetik Ürün Güvenlilik Değerlendirmesi eğitimlerimiz, sektörün en prestijli üniversitelerinde görev yapan
              profesörlerin liderliğinde yürütülmektedir. Bu eğitim, katılımcılara hem teorik bilgi hem de pratik beceriler
              kazandırmanın yanı sıra kozmetik ürünlerin güvenliğini uluslararası standartlarda sağlamalarına yardımcı olur.
              Bu sayede eğitimlerimizde alanında uzman profesörler tarafından sunulan bu benzersiz fırsat, sizi sektörde bir
              adım öne çıkaracaktır.
            </p>
            <p className="mb-4">
              Kozmetik Ürün Güvenlilik Değerlendirmesi eğitimlerimiz aşağıdaki 7 başlık altında düzenlenmektedir:
            </p>
            <ul className="list-disc ml-5 mb-4">
              <li>MEVZUAT</li>
              <li>FARMASOTİK TEKNOLOJİ</li>
              <li>MİKROBİYOLOJİ</li>
              <li>FARMOKOGNOZİ</li>
              <li>ANALİTİK KİMYA</li>
              <li>FARMOSÖTİK TOKSİKOLOJİ</li>
              <li>UYGULAMALI EĞİTİM</li>
            </ul>
            <p className="mb-4">
              Eğitimlerimiz her biri konusunda uzman seçkin üniversitelerde öğretim üyesi Profesörler tarafından verilmektedir.
            </p>

            {/* Akordeon Bileşeni */}
            <div className="w-full max-w-4xl mx-auto">
              {accordionData.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-semibold text-lg">{item.title}</span>
                    <span className="text-gray-500">
                      {activeIndex === index ? '-' : '+'}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="pl-4 pb-4 text-gray-600">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="container mx-auto px-4 py-8">
      {/* Mevzuat Başlığı */}
      <h3 className="text-2xl font-semibold text-blue-950 mb-4">
        KOZMETİK ÜRÜN GÜVENLİLİK DEĞERLENDİRME İLE İLGİLİ MEVZUAT
      </h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        • Kozmetik Mevzuatı genel bilgi<br />
        • Kozmetik Ürünlerde Güvenlilik Değerlendirmesine İlişkin Kılavuz<br />
        • Kozmetik Ürün İddialarına İlişkin Kılavuz<br />
        • Kozmetik Ürünler ile Sınır Teşkil Eden Ürünlere İlişkin Kılavuz<br />
        • Kozmetik Mevzuatına uygun etiket ve ambalaj hazırlanması<br />
        • Kozmetik ürünlerin uygulama bölgeleri ve şekilleri ile ilgili genel bilgi<br />
        • Kozmetik ürünlerin bileşenleri ve formülasyonları<br />
        • Geleneksel ve modern kozmetik taşıyıcı sistemler<br />
        • Kozmetik ürünlerin fiziksel ve kimyasal stabilitesi<br />
        • Kozmetik ürün ambalajının fiziksel, kimyasal ve mikrobiyolojik stabilite ve ürün güvenliği üzerine etkisi<br />
        • Nanomateryal içeren kozmetik ürünler hakkında genel bilgi
      </p>

      {/* Mikrobiyoloji Başlığı */}
      <h3 className="text-2xl font-semibold text-blue-950 mb-4">MİKROBİYOLOJİ</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        • Mikroorganizmalar hakkında genel bilgi<br />
        • Kozmetiklerde yasaklı mikroorganizmalar<br />
        • Mikrobiyolojik kontrol basamakları<br />
        • Kozmetiklerde kullanılan koruyucular ve challenge testleri<br />
        • Pre/Pro/Post/Para biyotikler ve kozmetik ürünlerde değerlendirmesi
      </p>

      {/* Farmokognozi Başlığı */}
      <h3 className="text-2xl font-semibold text-blue-950 mb-4">FARMOKOGNOZİ</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        • Uçucu yağlar<br />
        • Elde edilişleri<br />
        • Aktif maddeleri<br />
        • Kullanım amaçları<br />
        • Uçucu yağların kozmetik ürünlerde güvenli kullanımı<br />
        • Taşıyıcı yağlar<br />
        • Bitkisel ekstreler
      </p>

      {/* Analitik Kimya Başlığı */}
      <h3 className="text-2xl font-semibold text-blue-950 mb-4">ANALİTİK KİMYA</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        • Sulu çözelti kimyası<br />
        • Asitlik bazlık ve pH kavramları<br />
        • Çözünürlük, dağılma ve partisyon katsayısı kavramlarına giriş<br />
        • Derişim hesaplamaları<br />
        • Volümetrik analiz hakkında genel bilgi<br />
        • Spektroskopik ve kromatografik yöntemler hakkında genel bilgi
      </p>

      {/* Farmosötik Toksikoloji Başlığı */}
      <h3 className="text-2xl font-semibold text-blue-950 mb-4">FARMOSÖTİK TOKSİKOLOJİ</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        • Kozmetik ürünlerin toksik etkileri<br />
        • Lokal toksik etkiler<br />
        • Sistemik toksik etkiler<br />
        • Riskli gruplar (3 yaş altı, pediatrik grup, gebelik, laktasyon)<br />
        • In vitro testler<br />
        • Safsızlıklar ve kalıntıların değerlendirilmesi<br />
        • Güvenlilik değerlendirmesinde kullanılan toksikolojik parametreler
      </p>

      {/* Uygulamalı Eğitim Başlığı */}
      <h3 className="text-2xl font-semibold text-blue-950 mb-4">UYGULAMALI EĞİTİM</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Örnek ürün üzerinden Kozmetik Ürünler Yönetmeliği EK I/B kapsamında ürün güvenlilik değerlendirme raporu hazırlanması:
        <ul className="list-disc ml-5 mt-2">
          <li>Formülasyonda yer alan bileşenlerin fizikokimyasal özellikleri ve mevzuatsal değerlendirmesi</li>
          <li>Formülasyonda yer alan bileşenlerin toksikolojik profillerinin değerlendirilmesi</li>
          <li>SED/MOS değerlerinin hesaplanması ve yorumlanması</li>
          <li>Mikrobiyolojik ve koruyucu etkinlik test raporlarının yorumlanması</li>
          <li>Fiziksel ve kimyasal stabilite test raporlarının değerlendirilmesi</li>
        </ul>
      </p>

    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EĞİTİM KONU BAŞLIKLARI</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EĞİTİM YERİ</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TARİH</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SÜRESİ</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EĞİTMEN</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {eğitimVerileri.map((eğitim, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-normal">{eğitim.konu}</td>
              <td className="px-6 py-4 whitespace-normal">{eğitim.yer}</td>
              <td className="px-6 py-4 whitespace-normal">{eğitim.tarih}</td>
              <td className="px-6 py-4 whitespace-normal">{eğitim.süre}</td>
              <td className="px-6 py-4 whitespace-normal">{eğitim.eğitmen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex flex-col gap-6 mt-10 pt-4 text-center">
      {/* Görselin Üstündeki Yazı */}
      <div className="row-span-1 flex justify-center items-center">
        <h1 className="text-3xl font-bold  px-4  rounded-lg">
          Kozmetik Ürün Güvenlilik Değerlendirmesi
        </h1>
      </div>

      {/* Görsel */}
      <div className=" w-screen">
  <img
    src={nbccosc}
    alt="Kozmetik Ürün Güvenlilik Değerlendirmesi"
    className="w-screen"
  />
</div>




      {/* Görselin Altındaki Yazı */}
      <div className="px-8 py-6 flex justify-center items-center">
        <div className=" p-2 max-w-md">
          <p className="text-lg text-gray-800">
            “Kozmetik Ürün Güvenlilik Değerlendirmesi” kapsamında düzenlediğimiz
            eğitim ve sınav programları, kozmetik sektöründeki profesyonellere
            uluslararası standartlarda bilgi ve beceri kazandırmayı amaçlar. Bu
            program ile ürünlerinizin güvenliğini sağlayarak hem yasal
            gereklilikleri yerine getirebilir hem de tüketici güvenini
            artırabilirsiniz. En yakın eğitimlerimiz için bizimle
            <a href="/contact" className="text-blue-500">
              {" "}
              iletişime{" "}
            </a>
            geçin.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-4xl mx-auto px-6 ">
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">
            Kozmetik Ürün Güvenlilik Değerlendiricileri Ne İş Yapar?
          </h3>
          <p className="mt-4 text-gray-700">
            <i className="font-bold">
              Kozmetik Ürün Güvenlilik Değerlendirmesi eğitimi
            </i>
            ne katılanlar, kozmetik sektöründe çeşitli kritik pozisyonlarda
            görev alabilirler. Bu eğitimden mezun olanlar, öncelikle kozmetik
            ürünlerin güvenlik değerlendirmesini yaparak, ürünlerin yasal
            gerekliliklere uygunluğunu denetlerler. Özellikle kimyagerler,
            biyologlar ve eczacılar, ürün formülasyonlarında kullanılan
            bileşenlerin insan sağlığı üzerindeki etkilerini analiz eder ve bu
            analizlerin sonuçlarına göre risk değerlendirmesi yaparlar.
            <br />
            <br />
            Eğitimi başarıyla tamamlayanlar, kozmetik firmalarının{" "}
            <i className="font-bold">Kalite güvence</i> ve{" "}
            <i className="font-bold">kontrol</i> departmanlarında
            çalışabilirler. Bu pozisyonlarda, ürünlerin üretim sürecinden
            tüketiciye ulaşana kadar olan tüm aşamalarda güvenlilik
            standartlarını sağlamaktan sorumludurlar. Ayrıca,{" "}
            <i className="font-bold">regülasyon uzmanı </i>olarak, ürünlerin
            ulusal ve uluslararası mevzuatlara uyumunu sağlamak amacıyla, ilgili
            tüm yasal düzenlemeleri takip eder ve uygulanmasını denetlerler.
            <br />
            <br />
            Bunun yanı sıra, AR-GE birimlerinde{" "}
            <i className="font-bold">ürün geliştirme uzmanı ı </i>olarak da
            görev alabilirler. Bu pozisyonda, yeni kozmetik ürünlerin
            geliştirilmesi sürecinde, güvenlilik ve etkinlik kriterlerine uygun
            formülasyonlar tasarlarlar. Eğitimle kazandıkları bilgi ve
            beceriler, bu uzmanların, ürünlerin tüketici güvenliği açısından en
            üst düzeyde olmasını sağlamalarına olanak tanır.
            <br />
            <br />
            Son olarak,{" "}
            <i className="font-bold">kozmetik güvenlilik danışmanı </i>olarak
            serbest çalışarak, çeşitli firmalara güvenlik değerlendirmesi ve
            yasal uyumluluk konularında profesyonel danışmanlık hizmeti
            sunabilirler. Bu pozisyon, özellikle bağımsız bir kariyer
            hedefleyenler için ideal bir seçenek sunar.
            <br />
            <br />
            Bu eğitim sayesinde, katılımcılar hem kozmetik sektöründe geniş bir
            kariyer yelpazesine sahip olur hem de kozmetik ürünlerin güvenlik ve
            kalite standartlarını en yüksek seviyede tutarak, tüketici sağlığını
            koruma sorumluluğunu üstlenirler.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-4xl mx-auto px-6 ">
          <h3 className="text-blue-500 text-2xl font-semibold mb-4">
            Kozmetik Ürün Güvenlilik Değerlendirmesi Eğitimine Kimler Katılmalı?
          </h3>
          <p>
            {" "}
            <i className="font-bold">
              Kozmetik Ürün Güvenlilik Değerlendirmesi Eğitimi
            </i>
            , kozmetik sektöründe çalışan veya bu alanda uzmanlaşmak isteyen
            profesyoneller için tasarlanmıştır. Eğitim, aşağıdaki gruplara
            yönelik olarak hazırlanmıştır:
          </p>
          <li>
            <i className="font-bold">Kimyagerler: </i>Kozmetik
            formülasyonlarında görev alan kimyagerler, bu eğitim sayesinde ürün
            güvenliğini sağlama süreçlerinde yetkinlik kazanır.
          </li>
          <li>
            <i className="font-bold">Biyologlar:</i> Kozmetik ürünlerin
            biyolojik etkilerini değerlendiren biyologlar, toksikoloji ve risk
            analizleri konusunda derinlemesine bilgi edinirler.
          </li>
          <li>
            <i className="font-bold">Eczacılar:</i> Kozmetik ürünlerin sağlık
            üzerindeki etkilerini değerlendiren eczacılar, güvenlilik
            değerlendirmesi süreçlerinde uzmanlaşabilirler.
          </li>
          <li>
            <i className="font-bold">Kalite Güvence ve Kontrol Uzmanları:</i>{" "}
            Kozmetik ürünlerin üretiminden son tüketiciye ulaşana kadar geçen
            süreçte kalite standartlarını sağlamakla görevli uzmanlar, bu
            eğitimle süreçlerin güvenlik ve yasal uygunluğunu değerlendirme
            konusunda donanım kazanırlar.
          </li>
          <li>
            <i className="font-bold"> Regülasyon Uzmanları:</i> Kozmetik
            ürünlerin yasal gerekliliklerini takip eden ve uygunluk süreçlerini
            yöneten profesyoneller için bu eğitim, ulusal ve uluslararası
            mevzuatların daha iyi anlaşılmasını sağlar.
          </li>
          <li>
            <i className="font-bold">Ürün Geliştirme Uzmanları:</i> Yeni
            kozmetik ürünlerin geliştirilmesinde görev alan uzmanlar, ürün
            güvenliği ve regülasyon uyumluluğu konusunda bilgi sahibi olurlar.
          </li>
          <li>
            <i className="font-bold">
              {" "}
              Araştırma ve Geliştirme (AR-GE) Uzmanları:{" "}
            </i>
            Kozmetik sektörü için yeni formüller ve ürünler geliştiren AR-GE
            uzmanları, bu eğitimle ürünlerin güvenlik profillerini değerlendirme
            yeteneğini geliştirir.
          </li>
          <p>
            {" "}
            Bu eğitim, kozmetik sektöründeki profesyonellerin kariyerlerinde
            ilerlemeleri ve ürün güvenliği konusunda derinlemesine bilgi sahibi
            olmaları için mükemmel bir fırsattır. Eğitim sonunda katılımcılar,
            kozmetik ürünlerin güvenlik değerlendirmesini uluslararası
            standartlara uygun olarak gerçekleştirebilecek bilgi ve beceriye
            sahip olurlar
          </p>
        </div>
      </div>

      <div className="flex justify-center text-start items-center min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <a
            href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5324&MevzuatTur=1&MevzuatTertip=5"
            className="text-blue-500 hover:underline"
          >
            5324 Sayılı Kozmetik Kanunu
          </a>{" "}
          <div>
            <a
              href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=40405&MevzuatTur=7&MevzuatTertip=5"
              className="text-blue-500 hover:underline"
            >
              08.05.2023 tarihli ve 32184 Mükerrer sayılı Resmi Gazetede
              yayımlanarak yürürlüğe giren Kozmetik Ürünler Yönetmeliği
            </a>
          </div>
          <div>
            <li>
              <a
                href="https://titck.gov.tr/storage/Archive/2024/contentFile/K%C3%9CD-KLVZ-13KOZMET%C4%B0K%20%C3%9CR%C3%9CNLER%C4%B0N%20%C4%B0STENMEYEN%20ETK%C4%B0LER%C4%B0N%C4%B0N%20C%C4%B0DD%C4%B0%20%C4%B0STENMEYEN%20ETK%C4%B0LER%C4%B0N%C4%B0N%20KURUMA%20B%C4%B0LD%C4%B0R%C4%B0M%C4%B0NE%20%C4%B0L%C4%B0%C5%9EK%C4%B0N%20KILAVUZ%20S%C3%9CR%C3%9CM%201.0%20(imzaland%C4%B1_8e26377e-58e9-42b9-8391-20e29c8b46f8.pdf"
                className="text-blue-500 hover:underline"
              >
                Kozmetik Ürünlerin İstenmeyen Etkilerinin/Ciddi İstenmeyen
                Etkilerinin Bildirimine İlişkin Kılavuz
              </a>
            </li>
            <li>
              <a
                href="https://titck.gov.tr/storage/Archive/2020/contentFile/asd_977f480b-4a07-4e0e-bb0e-14db1fcf47d6.pdf"
                className="text-blue-500 hover:underline"
              >
                Kozmetik Ürünlerde Güvenlilik Değerlendirmesine İlişkin Kılavuz
                Sürüm 3.0{" "}
              </a>
            </li>
            <li>
              <a
                href="https://titck.gov.tr/storage/Archive/2023/contentFile/KOZMET%C4%B0K%20%C3%9CR%C3%9CN%20SORUMLU%20K%C4%B0%C5%9E%C4%B0S%C4%B0%20VE%20N%C4%B0HA%C4%B0%20KULLANICILAR%20%C4%B0%C3%87%C4%B0N%20B%C4%B0LG%C4%B0LEND%C4%B0RME%20KILAVUZU_1f202cce-4cd4-4e3d-b22b-89ba986c453f.pdf"
                className="text-blue-500 hover:underline"
              >
                Kozmetik Ürün Sorumlu Kişisi ve Nihai Kullanıcılar İçin
                Bilgilendirme Kılavuzu{" "}
              </a>
            </li>
            <li>
              <a
                href="https://titck.gov.tr/storage/Archive/2024/contentFile/KOZMET%C4%B0K%20%C3%9CR%C3%9CN%20G%C3%9CVENL%C4%B0L%C4%B0K%20DE%C4%9EERLEND%C4%B0R%C4%B0C%C4%B0S%C4%B0NE,%20E%C4%9E%C4%B0T%C4%B0M%C4%B0NE%20VE%20BELGELEND%C4%B0R%C4%B0LMES%C4%B0NE%20%C4%B0L%C4%B0%C5%9EK%C4%B0N%20KILAVUZ%20(3)_edf87c44-9bd1-4d37-8f9d-efd99c48ce37.pdf"
                className="text-blue-500 hover:underline"
              >
                Kozmetik Ürün Güvenlilik Değerlendiricisine, Eğitimine ve
                Belgelendirilmesine İlişkin Kılavuz{" "}
              </a>
            </li>
            <li>
              <a
                href="https://titck.gov.tr/storage/Archive/2024/contentFile/KOZMET%C4%B0K%20%C3%9CR%C3%9CN%20B%C4%B0LG%C4%B0%20DOSYASINA%20VE%20SORUMLU%20TEKN%C4%B0K%20ELEMANA%20%C4%B0L%C4%B0%C5%9EK%C4%B0N%20KILAVUZ%20(2)_1b3e4b5d-ba0b-47f3-b6d3-a3077863039d.pdf"
                className="text-blue-500 hover:underline"
              >
                Kozmetik Ürün Bilgi Dosyasına Ve Sorumlu Teknik Elemana İlişkin
                Kılavuz{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.titck.gov.tr/PortalAdmin/Uploads/UnitPageAttachment/82d1ad9a82183.pdf"
                className="text-blue-500 hover:underline"
              >
                Nanomateryal İçeren Kozmetik Ürünlerin Güvenlilik
                Değerlendirmesine İlişkin Kılavuz
              </a>
            </li>
            <li>
              <a
                href="https://www.titck.gov.tr/PortalAdmin/Uploads/UnitPageAttachment/760be09e52964.pdf"
                className="text-blue-500 hover:underline"
              >
                Nanomateryal İçeren Kozmetik Ürünlerin Bildirimlerine İlişkin
                Kılavuz
              </a>
            </li>
            <li>
              <a
                href="https://titck.gov.tr/storage/Archive/2023/contentFile/KOZMET%C4%B0K%20%C3%9CR%C3%9CNLER%C4%B0N%20ANAL%C4%B0ZLER%C4%B0NE%20%C4%B0L%C4%B0%C5%9EK%C4%B0N%20KILAVUZ_fb19c7cd-bfa5-4a32-917c-d1aff51b0d6f.pdf"
                className="text-blue-500 hover:underline"
              >
                Kozmetik Ürünlerin Analizlerine İlişkin Kılavuz
              </a>
            </li>
            <li>
              <a
                href="https://titck.gov.tr/storage/Archive/2024/contentFile/KOZMET%C4%B0K%20%C3%9CR%C3%9CNLER%20%C4%B0%C3%87%C4%B0N%20%C3%9CR%C3%9CN%20TAK%C4%B0P%20S%C4%B0STEM%C4%B0%20KULLANIMINA%20VE%20BA%C5%9EVURULARA%20%C4%B0L%C4%B0%C5%9EK%C4%B0N%20KILAVUZ%2012.07.2024_686d20da-6a20-4901-b06c-3930a05b3984.pdf"
                className="text-blue-500 hover:underline"
              >
                Kozmetik Ürünler İçin Ürün Takip Sistemi Kullanımına ve
                Başvurulara İlişkin Kılavuz
              </a>
            </li>
            <li>
              <a
                href="https://titck.gov.tr/storage/Archive/2024/contentFile/Kozmetik%20%C3%9Cr%C3%BCnler%20%C4%B0le%20S%C4%B1n%C4%B1r%20Te%C5%9Fkil%20Eden%20%C3%9Cr%C3%BCnlere%20%C4%B0li%C5%9Fkin%20K%C4%B1lavuz_e612e873-973b-44e1-a677-5f0f64dafbe8.pdf"
                className="text-blue-500 hover:underline"
              >
                Kozmetik Ürünler ile Sınır Teşkil Eden Ürünlere İlişkin Kılavuz{" "}
              </a>
            </li>
            <li>
              <a
                href="https://titck.gov.tr/storage/Archive/2023/contentFile/Kozmetik%20%C3%9Cr%C3%BCnlerin%20%C4%B0ddialar%C4%B1na%20%C4%B0li%C5%9Fkin%20K%C4%B1lavuz%20S%C3%BCr%C3%BCm%206.0_29199513-681b-48f5-aced-e8acf5d36faf.docx"
                className="text-blue-500 hover:underline"
              >
                Kozmetik Ürünlerin İddialarına İlişkin Kılavuz Sürüm 6.0{" "}
              </a>
            </li>
            <a
              href="https://www.resmigazete.gov.tr/eskiler/2015/09/20150920-4.htm"
              className="text-blue-500 hover:underline"
            >
              <p>
                20/09/2015 tarihli ve 29481 sayılı Resmî Gazetede yayımlanan
                Kozmetik Ürün veya Hammaddelerinin Etkinlik ve Güvenlilik
                Çalışmaları ile Klinik Araştırmaları Hakkında Yönetmelik
              </p>{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-start min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <li>
            <a
              href="https://www.titck.gov.tr/PortalAdmin/Uploads/UnitPageAttachment/tdwmipRl.pdf"
              className="text-blue-500 hover:underline"
            >
              Gönüllüler Üzerinde Kozmetik Ürün veya Hammaddeleri İle Yapılacak
              Etkinlik Çalışmaları, Güvenlilik Çalışmaları ve/veya Klinik
              Araştırmalara İlişkin Eğitimler Hakkında Kılavuz
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/PortalAdmin/Uploads/UnitPageAttachment/Ey0lzb4M.pdf"
              className="text-blue-500 hover:underline"
            >
              Kozmetik Klinik Araştırmalar Etik Kurullarının Standart Çalışma
              Yöntemi Esasları Kılavuzu Sürüm 1.0
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/PortalAdmin/Uploads/UnitPageAttachment/YmkwyOZj.pdf"
              className="text-blue-500 hover:underline"
            >
              Gönüllüler Üzerinde Yapılacak Olan Kozmetik Ürün veya
              Hammaddelerinin Etkinlik Çalışmaları ve Güvenlilik Çalışmalarına
              İlişkin Kılavuz Sürüm 1.0
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/PortalAdmin/Uploads/UnitPageAttachment/QXt76ZwJ.pdf"
              className="text-blue-500 hover:underline"
            >
              Kozmetik Ürünlerin veya Hammaddelerinin İnsan Cilt Uyumluluğunun
              Değerlendirilmesi Hakkında Kılavuz
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/PortalAdmin/Uploads/UnitPageAttachment/1eaon9NL.pdf"
              className="text-blue-500 hover:underline"
            >
              Kozmetik Ürün veya Hammaddelerinin Etkinlik ve Güvenlilik
              Çalışmaları ile Klinik Araştırmalarında Başvuru Şekline İlişkin
              Kılavuz
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/PortalAdmin/Uploads/UnitPageAttachment/gCE6fIaD.pdf"
              className="text-blue-500 hover:underline"
            >
              Kozmetik Klinik Araştırmalar Etik Kuruluna Başvuru Şekline İlişkin
              Kılavuz
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/PortalAdmin/Uploads/UnitPageAttachment/fPoxLHOr.pdf"
              className="text-blue-500 hover:underline"
            >
              Kozmetik Ürün Veya Hammaddelerinin Etkinlik Ve Güvenlilik
              Çalışmaları İle Klinik Araştırmalarında Arşivleme İlkeleri
              Kılavuzu
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/PortalAdmin/Uploads/UnitPageAttachment/KflnCkFm.pdf"
              className="text-blue-500 hover:underline"
            >
              Kozmetik Ürün Veya Hammaddeleri Üzerinde Yapılan Etkinlik Ve
              Güvenlilik Çalışmaları İle Klinik Araştırmalarında Yapılacak Olan
              Sigorta Teminatına İlişkin Kılavuz
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/Dosyalar/Kozmetik/8BGOFormu%20%C3%B6rne%C4%9Fi.pdf"
              className="text-blue-500 hover:underline"
            >
              Gönüllüler Üzerinde Yapılacak Kozmetik Ürün veya Hammaddelerinin
              Etkinlik ve Güvenlilik Çalışmaları İle Klinik Araştırmaları için
              Asgari Bilgilendirilmiş Gönüllü Olur Formu Örneği
            </a>
          </li>
          <li>
            <a
              href="https://titck.gov.tr/storage/Archive/2023/contentFile/K%C3%9CD-FR-01-ETK%C4%B0NL%C4%B0K%20VE%20G%C3%9CVENL%C4%B0L%C4%B0K%20%C3%87ALI%C5%9EMALARI%20%C4%B0LE%20KL%C4%B0N%C4%B0K%20ARA%C5%9ETIRMALARI%20%C4%B0%C3%87%C4%B0N%20BA%C5%9EVURU%20FORMU%20(1)_4397e2fd-52fd-438e-bed3-a60046589805.docx"
              className="text-blue-500 hover:underline"
            >
              Gönüllüler Üzerinde Yapılacak Kozmetik Ürün veya Hammaddelerinin
              Etkinlik ve Güvenlilik Çalışmaları İle Klinik Araştırmaları için
              Başvuru Formu
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/Dosyalar/Kozmetik/10etik%20kurul%20%C3%BCye%20gizliki%20s%C3%B6zle%C5%9Fmesi.pdf"
              className="text-blue-500 hover:underline"
            >
              Kozmetik Klinik Araştırmalar Etik Kurul Üyeleri Gizlilik
              Sözleşmesi ve Taahhütname
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/Dosyalar/Kozmetik/11sekreterya%20gizlilik.pdf"
              className="text-blue-500 hover:underline"
            >
              Kozmetik Klinik Araştırmalar Etik Kurul Üyeleri Sekretaryası
              Gizlilik Sözleşmesi ve Taahhütname
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/Dosyalar/Kozmetik/11-Etik%20Kurul%20Olust%20Basv%20Ust%20Y-02%2002%202016.pdf"
              className="text-blue-500 hover:underline"
            >
              Etik Kurul Oluşturmak için Yapılacak Başvuru Şekline İlişkin Üst
              Yazı Örneği ve Ekleri
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/Dosyalar/Kozmetik/13ilk%20ba%C5%9Fvuru%C3%BCst%20yaz%C4%B1%20%20formu.pdf"
              className="text-blue-500 hover:underline"
            >
              Kozmetik Ürün veya Hammaddelerinin Etkinlik Çalışmaları,
              Güvenlilik Çalışmaları veya Klinik Araştırmaları İlk Başvuru Üst
              Yazı Örneği
            </a>
          </li>
          <li>
            <a
              href="https://titck.gov.tr/storage/Archive/2023/contentFile/K%C3%9CD-FR-02-%C3%96NEML%C4%B0%20DE%C4%9E%C4%B0%C5%9E%C4%B0KL%C4%B0K%20BA%C5%9EVURU%20FORMU%20(4)_28b7cc96-7d8a-40cb-9517-8d507544f341.doc"
              className="text-blue-500 hover:underline"
            >
              Gönüllüler Üzerinde Yapılacak Kozmetik Ürün veya Hammaddelerinin
              Etkinlik ve Güvenlilik Çalışmaları ile Klinik Araştırmalarında
              Önemli Değişiklik Yapılmasına İlişkin Başvuru Formu
            </a>
          </li>
          <li>
            <a
              href="https://titck.gov.tr/storage/Archive/2023/contentFile/K%C3%9CD-FR-03-ET%C4%B0K%20KURUL%20KARAR%20FORMU%20(1)_8a50d107-ec34-4e63-a424-2c5a58fd4d7e.doc"
              className="text-blue-500 hover:underline"
            >
              Kozmetik Klinik Araştırmalar Etik Kurulu Karar Formu
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/Dosyalar/Kozmetik/16ilk%20ba%C5%9Fvuru.pdf"
              className="text-blue-500 hover:underline"
            >
              Önemli Değişiklik Yapılmasına İlişkin Başvuru Üst Yazı Örneği
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/Dosyalar/Kozmetik/Kozmetik%20Klinik%20arastirma%20sonuc%20raporu.pdf"
              className="text-blue-500 hover:underline"
            >
              Kozmetik Klinik Araştırma Sonuç Raporu Formu
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/Dosyalar/Kozmetik/Etik%20kurul%20ba%C5%9Fvuru%20beyan%C4%B1.doc"
              className="text-blue-500 hover:underline"
            >
              Etik Kurul Başvuru Beyanı
            </a>
          </li>
          <li>
            <a
              href="https://www.titck.gov.tr/Dosyalar/Kozmetik/G%c3%b6n%c3%bcll%c3%bclerde%20Kozmetik%20%C3%87al%C4%B1%C5%9Fma%20ve%20Ara%C5%9Ft%C4%B1rmalar%20Kapsam%C4%B1nda%20Belge%20Sunulmas%C4%B1%20Gereken%20Etiketler.docx"
              className="text-blue-500 hover:underline"
            >
              Gönüllülerde Kozmetik Çalışma ve Araştırmalar Kapsamında Sunulması
              Gereken Etiketler
            </a>
          </li>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default KozmetikUrunGuvenlilik;