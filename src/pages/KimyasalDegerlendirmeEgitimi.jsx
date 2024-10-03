import React from 'react';
import trainingImage from '../assets/images/Yetkilerimiz.png'; // Kendi görsel yolunuzu belirtin
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; // İcon importu
import { FaFilePdf } from 'react-icons/fa';
import pdf from "../pdf/kimyasaldegerlendirmeuzmani2024.pdf";
import pdf1 from "../pdf/kduegitimbasvuru.pdf";
import pdf2 from "../pdf/belgekullanimsozlesmesi2024.pdf";
import banner from '../assets/images/kimys-banner.jpeg';






// Eğitim verileri örneği
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

const ListItem = ({ text }) => (
  <li className="text-gray-700">{text}</li>
);

const KimyasalDegerlendirmeEgitim = () => {
  return (
    <div className="">
      {/* Arka Plan Resmi Üstünde Başlık */}
      <div
        id="featured-title"
        className="relative bg-cover bg-center min-h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container mx-auto py-16 h-full flex items-center justify-center">
          <div className="inner-wrap text-center text-blue-950">
            <div className="title-group">
              <h1 className="main-title text-5xl font-bold">Kimyasal Değerlendirme Uzmanı Eğitimi</h1>
            </div>
            <div id="breadcrumbs" className="mt-4">
              <div className="breadcrumbs-inner">
                <div className="breadcrumb-trail text-sm">
                  <a href="/" className="text-blue-950 hover:text-white transition">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                  <span>Kimyasal Değerlendirme Uzmanı Eğitimi</span>
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
          NBC Uygunluk Değerlendirme Eğitim Ltd. Şti.,
        </div>
        <h2 className="text-2xl font-bold mt-4">
          T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından onaylanmış KDU eğitimini veren kurumlar arasındadır.
        </h2>
        <div className="text-gray-700 mt-4">
          Aynı zamanda TÜRKAK tarafından akredite edilmiş belgelendirme kuruluşudur.
        </div>
      </div>

      {/* Takvim Button */}
      <div className="text-center mb-8">
        <a href="#takvim" className="bg-transparent border border-blue-500 text-blue-500 px-6 py-2 rounded hover:bg-blue-500 hover:text-white transition">
          Takvim
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {/* PDF Bağlantıları */}
        <div className="flex flex-col items-center bg-white shadow-md rounded p-4">
          <a href={pdf1} className="text-blue-500 mb-2" target="_blank" rel="noopener noreferrer">
            <FaFilePdf className="text-3xl" />
          </a>
          <p className="text-center">Kimyasal Değerlendirme Uzmanı Eğitim Başvuru Formu</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded p-4">
          <a href={pdf} className="text-blue-500 mb-2" target="_blank" rel="noopener noreferrer">
            <FaFilePdf className="text-3xl" />
          </a>
          <p className="text-center">Kimyasal Değerlendirme Uzmanı Sınav Başvuru Formu</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded p-4">
          <a href={pdf2} className="text-blue-500 mb-2" target="_blank" rel="noopener noreferrer">
            <FaFilePdf className="text-3xl" />
          </a>
          <p className="text-center">Belge Kullanım Sözleşmesi</p>
        </div>
      </div>

      {/* Eğitim Tablosu */}
      <table className="w-full table-auto bg-white shadow-md">
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

     
    <div className="mt-8 text-gray-700 max-w-7xl  pl-20">
          <p>
            Çevre ve Şehircilik Bakanlığı tarafından <strong>27 Haziran 2017</strong> tarihinde Resmi Gazete Sayı: 30105 <a href="https://www.resmigazete.gov.tr/eskiler/2017/06/20170623M1-18.htm" className="text-blue-500 underline"><strong>Kimyasalların Kaydı Değerlendirilmesi İzni ve Kısıtlanması</strong> (KKDİK)</a> yönetmeliği yayınlanmıştır.
          </p>
          <p>
            <a href="https://www.resmigazete.gov.tr/eskiler/2017/06/20170623M1-18.htm" className="text-blue-500 underline"><strong>KKDİK Yönetmeliği</strong>,</a> insan sağlığı ve çevreyi kimyasalların olumsuz etkilerinden en üst düzeyde korumayı <strong>amaçlamaktadır.</strong>
          </p>
          <p>
            <strong>KİMYASALLARIN KAYDI, DEĞERLENDİRİLMESİ, İZNİ VE KISITLANMASI HAKKINDA YÖNETMELİK</strong> <span className="underline">maddelerin imalatını, piyasaya arzını veya maddenin kendi halinde, karışım içinde veya eşya içinde kullanımını ve karışımların piyasaya arzını kapsar.</span>
          </p>
          <p>
            <strong>KKDİK Yönetmeliği</strong> EK-18 içeriğine göre, <strong>T.C Çevre, Şehircilik ve İklim Değişikliği Bakanlığı</strong> tarafından onaylanmış eğitim kuruluşlarından en az 64 saat <strong>Kimyasal Değerlendirme Uzmanı (KDU)</strong> eğitimi alınmalı, eğitim sonunda <span className="underline"><strong>TÜRKAK</strong></span> tarafından akredite edilmiş belgelendirme kuruluşu tarafından açılan sınava katılmaları gerekir. Sınavdan 70 ve üzeri puan alanlar <strong>Kimyasal Yeterlilik Belgesine</strong> sahip olurlar. <strong>Kimyasal Değerlendirme Uzmanı <span className="underline italic">(KDU)</span></strong> olurlar.
          </p>
          <p>
            Belge süresi <strong>5</strong> yıldır.
          </p>
          <p>
            <strong>Kimyasal Değerlendirme Uzmanı</strong> sertifikası almaya hak kazananlar, tekrardan <strong>Güvenlik Bilgi Formu Hazırlayıcısı</strong> Eğitimi diğer ifadle <strong>(GBF)</strong> ya da <strong>(M)SDS</strong> Eğitimi almalarına ve <strong>GBF</strong> sınavına katılmalarına gerek yoktur. Eğitimler, T.C Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından onaylanmış eğitim kuruluşlarınca düzenlenmektedir. Belgelendirme ise, <strong>TÜRKAK</strong> tarafından<strong> akredite edilmiş kuruluşlar</strong> tarafından yapılmaktadır.
          </p>
          <br />
          <br />
          <div className="p-4 bg-white">
            <h1 className='font-bold text-2xl'>Kimyasal Değerlendirme Uzmanı Ne İş Yapar ?</h1>
            <br />
            
      <ul className="list-disc list-inside text-gray-800">
        <li>
          <strong>KKDİK</strong> kapsamında, 10 ton ve üzerinde imal veya ithal edilen maddeler için{' '}
          <strong>Kimyasal Güvenlik Raporu ve Kimyasal Güvenlik Değerlendirmesini</strong> yapar.
        </li>
        <li>
          <strong>Entegre Çevre Bilgi Sistemi</strong> içerisinde yer alan{' '}
          <strong>Kimyasal Kayıt Sistemine</strong> Ön-Kayıtları ve Kayıtları gerçekleştirir.
        </li>
        <li>
          <strong>Ortak kayıtlarda</strong> oluşacak olan konsorsiyumlarda temsilcilik yapar.
        </li>
        <li>
          Yurt dışından <strong>Türkiye’ye ithal edilen kimyasalların KKS sistemine kaydının</strong>{' '}
          gerçekleştirilmesi için{' '}
          <strong>
            <span className="underline">TEK TEMSİLCİLİK</span>
          </strong>{' '}
          yapar.
        </li>
        <li>
          <strong>Kimyasal üreticilerin KKS</strong> kayıtlarının gerçekleştirilmesi Üçüncü Taraf ismi
          ile görev alır.
        </li>
        <li>
          <strong>GÜVENLİK BİLGİ FORMU</strong> (M)SDS) hazırlar.
        </li>
        <li>
          <strong>Maddelerin Kayıt dosyalarını</strong> hazırlar.
        </li>
      </ul>
      <p className="text-gray-800 mt-4">
        <strong>
          <span className="underline">
            <em>31/12/2023</em>
          </span>
        </strong>{' '}
        tarihine kadar Güvenlik Bilgi Formları Zararlı Maddelerin ve Karışımların Güvenlik Bilgi
        Formları Hakkında Yönetmeliğe göre hazırlanır.
      </p>
      <p className="text-gray-800">
        Kimyasal değerlendirme uzmanı,{' '}
        <strong>Zararlı Maddelerin ve Karışımların Güvenlik Bilgi Formları Hakkında</strong>{' '}
        <strong>Yönetmeliğe</strong> göre de <strong>Güvenlik Bilgi Formu</strong> hazırlayabilir.
      </p>
    </div>

    <br />
    <br />

    <div className="p-4 bg-white text-gray-800">
    <h1 className='font-bold text-2xl'>Kimyasal Değerlendirme Uzmanı Sınavına Kimler Katılmalı ?</h1>
    <br />
    <p>
        <strong>Kimyasal Değerlendirme Uzmanı (KDU)</strong> Sınavına katılabilmek için aşağıdaki
        kriterlerin karşılanması gerekmektedir:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>Kimya, Biyoloji veya Çevre Bilimleri*</strong> ile ilgili{' '}
          <strong>Fen/Fen Edebiyat Fakülteleri’nin veya Mühendislik Fakülteleri’nin lisans</strong>{' '}
          bölümlerinden mezun olmak veya
        </li>
        <li>
          <strong>Kimya Bilimi ile ilgili yüksek lisans, doktora</strong> yapmak veya
        </li>
        <li>
          Üniversitenin diğer lisans bölümlerinden mezun olup{' '}
          <strong>kimyasallara ilişkin üretim, laboratuvar, kalite kontrol veya kimyasalların yönetimi alanında en az 5 yıl çalışmış olmak.</strong>
        </li>
      </ul>
      <p className="mt-4">
        * <em>
          Kimya, Biyoloji, Çevre Bilimleri ile ilgili Fen/Fen Edebiyat Fakülteleri’nin veya Kimya, Biyoloji, Çevre Bilimleri ile ilgili Mühendislik Fakülteleri’nin lisans bölümlerine örnek olarak; Biyokimya, Biyoteknoloji, Kimya, Biyoloji, Moleküler Biyoloji ve Genetik Mühendisliği, Biyomedikal Mühendisliği, Çevre Mühendisliği, Kimya mühendisliği
        </em>
        <span className="block mt-2">
          <strong>Kimyasal Güvenlik Değerlendirmesi</strong>nde aşağıdaki değerlendirmeler <strong>KDU</strong> tarafından yapılacaktır:
        </span>
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>FİZİKOKİMYASAL ZARARLILIK</li>
        <li>İNSAN SAĞLIĞINA ZARARLILIK DEĞERLENDİRMESİ</li>
        <li>ÇEVRESEL ZARARLILIK DEĞERLENDİRMESİ</li>
        <li>KALICI, BİYOBİRİKİMLİ, TOKSİK (KBT) veya ÇOK KALICI, ÇOK BİYOBİRİKİMLİ (ÇKÇB) ÖZELLİĞİNİN DEĞERLENDİRMESİ</li>
        <li>MARUZ KALMANIN DEĞERLENDİRMESİ</li>
        <li>RİSK KARAKTERİZASYONU</li>
      </ul>
    </div>
    <br />
    <br />
    <div className="p-4">
      <h1 className='font-bold text-2xl'>Eğitim İçeriği:</h1>
      <br />
      <div className="flex flex-row items-start">
        <div className="flex-1">
          <ul className="list-disc ml-5">
            <li>
              <strong>Kimyasalların</strong> yönetimi
            </li>
            <li>
              <strong>Mevzuat:</strong>
              <br />
              <em>Maddelerin ve Karışımların Sınıflandırılması Etiketlenmesi ve Ambalajlanması Hakkında Yönetmelik</em>
              <br />
              <em>– Tehlikeli Malların Taşınması, Depolanması</em>
              <br />
              <em>– İş Sağlığı ve Güvenliği</em>
              <br />
              <em>– Kimyasalların Kaydı, Değerlendirilmesi, İzni ve Kısıtlanması</em>
            </li>
            <li>
              Madde ve karışımların:
              <br />
              <em>– Fizikokimyasal özelliklere göre sınıflandırılması</em>
              <br />
              <em>- Toksikolojik özelliklere göre sınıflandırılması</em>
              <br />
              <em>- Ekotoksikolojik özelliklere göre sınıflandırılması</em>
            </li>
            <li>
              <strong>Kimyasallar</strong> – İnsan sağlığı risk değerlendirmesi
            </li>
            <li>
              <strong>Kimyasallar</strong> – Çevresel risk değerlendirmesi
            </li>
            <li>
              <strong>Maruz kalma senaryoları</strong>
            </li>
            <li>
              <strong>Kimyasal Güvenlik Değerlendirmesi</strong> (KGD)
            </li>
            <li>
              <strong>Kimyasal Güvenlik Raporu</strong> (KGR)
            </li>
            <li>
              <strong>Güvenlik bilgi formu</strong> hazırlanması için gereklilikler
            </li>
          </ul>
        </div>
        <div className="ml-4">
          <img
            fetchpriority="high"
            decoding="async"
            className="w-56 h-auto"
            src="https://nbccert.com.tr/wp-content/uploads/2023/10/hakkimizda_seragazi-236x300.jpg"
            alt=""
            width="350"
            height="400"
          />
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className="p-4">
      <h1 className='font-bold text-2xl'>Eğitim/Sınav Ücretine Dâhil Olan Hizmetler:
      </h1>
      <br />
      <div className="flex flex-col">
        <ul className="list-disc ml-5">
          <li>
            <strong>Kimyasal Değerlendirme Uzmanı, KDU Eğitim dokümanı</strong>
          </li>
          <li>
            <strong>Eğitim sonunda eğitime katılım sertifikası</strong>
          </li>
          <li>
            <strong>
              Sınavda başarılı olunması halinde TÜRKAK onaylı Kimyasal Değerlendirme Uzmanı (KDU) Sertifikası,
            </strong>
          </li>
        </ul>
        <p className="mt-4">
          <span className="underline italic">İstenilen evraklar;</span> başvuru formu, belge kullanım sözleşmesi,
          diploma (ya da mezuniyet belgesi) ve nüfus cüzdanı fotokopisi, eğitim ve sınav ücretinin yatırıldığına dair
          dekont
        </p>
        <p className="mt-4">
          <strong>Ek Not:</strong> Üniversitenin diğer lisans bölümlerinden mezun olup kimyasallara ilişkin{' '}
          <strong>üretim, laboratuvar, kalite kontrol veya kimyasalların yönetimi</strong> alanında{' '}
          <strong>en az 5 yıl çalışmış</strong> olanların ek olarak çalışılan şirketten alınacak ıslak imzalı
          çalışma belgesi getirmeleri gerekmektedir.
        </p>
      </div>
    </div>
        </div>
        </div>
  </div>
  );
};

export default KimyasalDegerlendirmeEgitim;