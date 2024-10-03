import React from 'react';
import serahero from '../assets/images/seragazıiş.jpg'; // Kendi görsel yolunuzu belirtin
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import pdf1 from "../pdf/F147_SERA_GAZI_DOGRULAYICI_Sinav_Basvuru_Formu.pdf";
import pdf2 from "../pdf/F148_SERA_GAZI_DOGRULAYICI_ Egitim_Basvuru_Formu_GHG_VERIFICATION_CERTIFIC_PROGRAM_TRAINING_APPLICATION_FORM_Rev00_15.12.2021.pdf";
import pdf3 from "../pdf/F149_SERA_GAZI_BAS_DOGRULAYICI_Sinav_Basvuru_Formu.pdf";
import pdf4 from "../pdf/F150_SERA_GAZI_BAS_DOGRULAYICI_Egitim_Basvuru_Formu.pdf";
import banner from '../assets/images/seragazıbanner.jpeg';


const SeraGaziEgitim = () => {
  const egitimVerileri = [
    {
      ad: "KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMi",
      yer: "İSTANBUL",
      tarih: "07-15 EKİM 2024",
      sinavTarihi: "17 EKİM 2024",
      kurum: "İSTANBUL TEKNİK ÜNİVERSİTESİ"
    },
    {
      ad: "SERA GAZI DOĞRULAYICI VE BAŞ DOĞRULAYICI EĞİTİMİ",
      yer: "ONLINE",
      tarih: "21-25 EKİM 2024",
      sinavTarihi: "26 EKİM 2024",
      kurum: "İSTANBUL TEKNİK ÜNİVERSİTESİ"
    },
    {
      ad: "KOZMETİK ÜRÜN GÜVENLİK DEĞERLENDİRİCİSİ EĞİTİMİ VE SINAVI",
      yer: "ONLINE/ANKARA-İZMİR-İSTANBUL",
      tarih: "10-17 EYLÜL 2024",
      sinavTarihi: "15-17-18 EYLÜL 2024",
      kurum: "NBC UYGUNLUK DEĞERLENDİRME EĞİTİM LTD ŞTİ"
    },
    {
      ad: "KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMİ",
      yer: "DENİZLİ",
      tarih: "16-25 EYLÜL 2024",
      sinavTarihi: "3 EKİM 2024",
      kurum: "KİMYA MÜHENDİSLERİ ODASI-DENİZLİ"
    },
    {
      ad: "KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMİ",
      yer: "BURSA",
      tarih: "15-16-17-18-21-22-23-24 EKİM 2024",
      sinavTarihi: "25 EKİM 2024",
      kurum: "MAVİ YEŞİL DANIŞMANLIK"
    },
    {
      ad: "KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMİ",
      yer: "BURSA",
      tarih: "10-11-12-13-16-17-18-19 ARALIK 2024",
      sinavTarihi: "20 ARALIK 2024",
      kurum: "MAVİ YEŞİL DANIŞMANLIK"
    },
    {
      ad: "KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMİ",
      yer: "ANKARA",
      tarih: "25-26-27-30 EYLÜL-1-2-3-4 EKİM",
      sinavTarihi: "5 EKİM 2024",
      kurum: "NBC UYGUNLUK DEĞERLENDİRME EĞİTİM LTD ŞTİ"
    },
    {
      ad: "KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMİ",
      yer: "İSTANBUL",
      tarih: "2-11 ARALIK 2024",
      sinavTarihi: "12 ARALIK 2024",
      kurum: "İSTANBUL TEKNİK ÜNİVERSİTESİ"
    },
    {
      ad: "KİMYASAL DEĞERLENDİRME UZMANI EĞİTİMİ",
      yer: "ADANA",
      tarih: "-",
      sinavTarihi: "11 EKİM 2024",
      kurum: "KİMYA MÜHENDİSLERİ ODASI- ADANA"
    },
    {
      ad: "SERA GAZI DOĞRULAYICI VE BAŞ DOĞRULAYICI EĞİTİMİ",
      yer: "ONLINE",
      tarih: "7-11 EKİM 2024",
      sinavTarihi: "12 EKİM 2024",
      kurum: "BUREAU VERITAS"
    },
    {
      ad: "KOZMETİK ÜRÜN GÜVENLİK DEĞERLENDİRİCİSİ EĞİTİMİ VE SINAVI",
      yer: "ONLINE/ANKARA-İZMİR-İSTANBUL",
      tarih: "15-16-17-18/19-21-22 EKİM 2024",
      sinavTarihi: "20-22-23 EKİM 2024",
      kurum: "NBC UYGUNLUK DEĞERLENDİRME EĞİTİM LTD ŞTİ"
    },
    {
      ad: "KİMYASAL KAYIT SİSTEMİ EĞİTİMİ",
      yer: "ONLINE",
      tarih: "30-31 EKİM 2024",
      sinavTarihi: "-",
      kurum: "NBC UYGUNLUK DEĞERLENDİRME EĞİTİM LTD ŞTİ"
    },
    {
      ad: "AHŞAP YAPI TASARIM EĞİTİMİ",
      yer: "ONLINE",
      tarih: "16-17 OCAK 2025",
      sinavTarihi: "18 Ocak 2025",
      kurum: "NBC UYGUNLUK DEĞERLENDİRME EĞİTİM LTD ŞTİ"
    },
    {
      ad: "SERA GAZI DOĞRULAYICI VE BAŞ DOĞRULAYICI EĞİTİMİ",
      yer: "ONLINE",
      tarih: "14-18 EKİM 2024",
      sinavTarihi: "19 EKİM 2024",
      kurum: "KİMYA SANAYİCİLERİ DERNEĞİ- MAVİ YEŞİL DANIŞMANLIK"
    },
  ];

  return (
    <><div className="">

      {/* Arka Plan Resmi Üstünde Başlık */}
      <div
        id="featured-title"
        className="relative bg-cover bg-center min-h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner})` ,
        }}
      >
        <div className="container mx-auto py-16 h-full flex items-center justify-center">
          <div className="inner-wrap text-center text-blue-950">
            {/* Başlık */}
            <div className="title-group">
              <h1 className="main-title text-3xl font-bold">Sera Gazı Doğrulayıcı Eğitimi</h1>
            </div>

            {/* Breadcrumbs */}
            <div id="breadcrumbs" className="mt-4">
              <div className="breadcrumbs-inner">
                <div className="breadcrumb-trail text-sm">
                  <a href="/" className="text-blue-950 hover:text-white transition">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                  <span>Sera Gazı Doğrulayıcı Eğitimi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className="p-8 bg-gray-100">
        <div className="flex flex-col items-center">

          {/* CarbonEmit Button */}
          <div className="mb-6 flex items-center flex-col">
            <a
              href="https://app.carbonemit.com/auth/sign-up?ref=NBCUDE"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
              CarbonEmit
            </a>
            <p className="mt-4 text-lg font-bold">
              <strong>
                CarbonEmit{" "}
                <span className="text-gray-700 text-base">
                  ile karbon emisyonlarınızı kolayca hesaplayın.
                </span>
              </strong>
            </p>
          </div>

          {/* Sertifika Programının Amacı */}
          <div className="text-left w-full mb-8">
            <div className="text-gray-700 uppercase font-bold">Sertifika Programının Amacı</div>
            <h2 className="text-2xl font-bold mt-4">
              Sera gazları hava, su hesaplamalarını doğrulayacaklar için ISO 14064-1, -2, -3 Verifier sertifikası
            </h2>
          </div>

          {/* Takvim Button */}
          <div className="text-center mb-8">
            <a
              href="#takvim"
              className="text-blue-500 border border-blue-500 px-6 py-2 rounded hover:bg-blue-500 hover:text-white transition"
            >
              Takvim
            </a>
          </div>

          {/* Sertifika Programının Kapsamı ve Gerekçeleri */}
          <div className="text-left w-full mb-8">
            <h2 className="text-2xl font-bold">SERTİFİKA PROGRAMININ KAPSAMI VE GEREKÇELERİ</h2>
            <div className="divider my-2"></div>
            <div className="sub-heading">Bu program</div>
          </div>

          {/* Listeler */}
          <div className="w-full mb-8 font-bold text-xl">
            {[
              "ISO 14064-1 Sera gazları - Bölüm 1: Sera gazının ölçülmesi ve raporlanması için organizasyon düzeyinde rehberlik içeren spesifikasyon",
              "ISO 14064-2 Sera gazları - Bölüm 2: Sera gazı emisyon azaltımlarının veya uzaklaştırma iyileştirmelerinin ölçülmesi, izlenmesi ve raporlanması için proje düzeyinde rehberlik içeren şartname",
              "ISO 14064-3 Sera gazları - Bölüm 3: Sera gazı beyanlarının doğrulanması ve geçerli kılınması için rehberlik içeren şartname",
            ].map((text, index) => (
              <ListItem key={index} text={text} />
            ))}
            <p>Standartlara göre hazırlanan hesaplamaları doğrulayacak kişilerin belgelerini kapsar.</p>
          </div>

          {/* Download Links */}
          <div className="w-full mb-8 flex gap-8">
  <a href={pdf1} target="_blank" rel="noopener noreferrer">
    <PictureAsPdfIcon className="text-3xl" /> {/* İcon boyutunu büyütmek için className ekleyin */}
  </a>
  <a href={pdf2} target="_blank" rel="noopener noreferrer">
    <PictureAsPdfIcon className="text-3xl" />
  </a>
  <a href={pdf3} target="_blank" rel="noopener noreferrer">
    <PictureAsPdfIcon className="text-3xl" />
  </a>
  <a href={pdf4} target="_blank" rel="noopener noreferrer">
    <PictureAsPdfIcon className="text-3xl" />
  </a>
</div>


          {/* Eğitim Tablosu */}
          <div className="ea-advanced-data-table-wrap-inner">
            <table className="ea-advanced-data-table ea-advanced-data-table-ninja ea-advanced-data-table-paginated">
              <thead className="bg-blue-950 text-white">
                <tr>
                  <th style={{ width: '218px' }}>Eğitimin Adı</th>
                  <th>Eğitim Yeri</th>
                  <th>Eğitim Tarihi</th>
                  <th>Sınav Tarihi</th>
                  <th>Kurum</th>
                </tr>
              </thead>
              <tbody>
                {egitimVerileri.map((egitim, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-blue-100" : "bg-white"}>
                    <td>{egitim.ad}</td>
                    <td>{egitim.yer}</td>
                    <td>{egitim.tarih}</td>
                    <td>{egitim.sinavTarihi}</td>
                    <td>{egitim.kurum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white p-8">
        <div className="container mx-auto">
          {/* Başlık ve Alt Başlık */}
          <div className="text-left mb-8">
            <div className="text-blue-950 font-bold">BELGE ALMAYA HAK KAZANANLAR</div>
            <h2 className="text-2xl font-bold mt-4">
              1- GHG izleyicileri (sera gazı hesaplaması yapan kuruluşlarda),
              <p>
                2- GHG doğrulayıcıları (GHG doğrulama kuruluşlarında çalışır. Doğrulama ekiplerinde raporlar oluşturur veya doğrular),
                olarak çalışabilir.
              </p>
            </h2>
            <div className="mt-4 text-gray-700">
              Sera gazı doğrulayıcısı yukarıda belirtilen işleri yapabilmesi için aşağıdaki İŞ TANIMI konularını bilmesi ile olur.
            </div>
          </div>

          {/* İş Tanımı Listesi */}
          <div className="space-y-4 mb-8">
            {[
              "SERA GAZI PROGRAMI BİLGİSİ",
              "TEKNİK BİLGİ",
              "KALİTE SİSTEMİ",
              "HUKUKİ BİLGİ",
              "YETKİNLİKLER VE YETKİ",
              "DEĞERLENDİRME KILAVUZU",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 text-blue-950 font-bold">{index + 1}.</div>
                <div className="text-gray-700">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div><div className="bg-gray-100 p-8">
        <div className="container mx-auto">
          {/* Ek Açıklama */}
          <div className="mb-8 flex">
            {/* Resim */}
            <div className="w-1/3 pr-4">
              <img
                src={serahero} // Resim URL'sini buraya ekleyin
                alt="Açıklayıcı Resim"
                className="shadow-md  rounded-lg" />
            </div>

            {/* Başlık ve Metin */}
            <div className="w-2/3">
              <h2 className="text-2xl font-bold text-center">İş ve İş Tanımları</h2>
              <br />
              <div className="text-right max-w-2xl mx-auto">
                <p>
                  Sera gazı raporlamasında tutarlılığı sağlamak ve diğer iletişimlerde uluslararası piyasa kamu güvenliğini sağlamak için doğrulama ekiplerinin ve doğrulama ekiplerinin yetkinlik gerekliliklerini tanımlamaya, ölçmeye ve belgelemeye ihtiyaç vardır.
                  <br />
                  Bu program, doğrulama kuruluşlarında ve geçerli kılma kuruluşlarında çeşitli doğrulama veya geçerli kılma faaliyetlerinde yer alan personelin yetkinliğini belirlenen ekipte belirlemek, göstermek ve yönetmek için oluşturulmuştur.
                </p>
                <br />
                <br />
                <p>
                  Doğrulama veya geçerli kılma kuruluşunun rolü, doğrulama veya geçerli kılma sürecini etkin bir şekilde tamamlamak için ekiplere gerekli yetkinliği sağlamaktır.
                  <br />
                  Doğrulayıcı sertifikasyon programı, doğrulama ekipleri ve geçerli kılma ekiplerinin yeterliliğini ölçmek için ilkeleri içerir. Bu desteklenen ilkeler, doğrulama veya doğrulama ekiplerinin rolüne dayalı genel gereksinimlerdir.
                </p>
                <br />
                <br />
                <p>
                  Doğrulama ekipleri ve geçerli kılma ekipleri, doğrulayıcı sertifikasyon programına, sera gazı (GHG) program yöneticilerine, düzenleyicilere, doğrulayıcılara ve doğrulama kuruluşlarına fayda sağlamak için uzmanlığa ihtiyaç duyar. Doğrulayıcı sertifikasyon programı, yeterlilik gerekliliklerini inceleme yoluyla ölçer ve sertifika gerekliliklerini tanımlar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
  
  
  };
  
  const ListItem = ({ text }) => (
    <div className="flex items-center mb-2">
      <div className="mr-2">
        <i className="fas fa-check-circle"></i>
      </div>
      <div className="content-wrap">{text}</div>
    </div>
  );
  
  const DownloadLink = ({ href, text }) => (
    <div className="flex items-center mb-4">
      <div className="mr-2">
        <a href={href} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-file-pdf"></i>
        </a>
      </div>
      <div className="content-wrap">
        <p className="elementor-icon-box-description">{text}</p>
      </div>
    </div>
  );
  
  
  export default SeraGaziEgitim;