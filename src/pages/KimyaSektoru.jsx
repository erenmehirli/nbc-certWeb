
import React from "react";
import seraImage from "../assets/images/Yetkilerimiz2.png"; // Görsel yolu

import banner from '../assets/images/kimys-banner.jpeg'

// Sera Gazı ve Emisyon Hedefleri Bölümleri
const SeraGazi = () => {
  return (
    <div className="">
      {/* Arka Plan Resmi Üstünde Başlık */}
      <div
        id="featured-title"
        className="relative bg-cover bg-center min-h-96 flex items-center justify-center"
        style={{
          backgroundImage:
           `url(${banner})`,
        }}
      >
        <div className="container mx-auto py-16 h-full flex items-center justify-center">
          <div className="inner-wrap text-center text-blue-950">
            {/* Başlık */}
            <div className="title-group">
              <h1 className="main-title text-3xl font-bold">
                Kimyasalların Kaydı, Değerlendirilmesi, İzni ve Kısıtlanması
              </h1>
            </div>

            {/* Breadcrumbs */}
            <div id="breadcrumbs" className="mt-4">
              <div className="breadcrumbs-inner">
                <div className="breadcrumb-trail text-sm">
                  <a
                    href="/"
                    className="text-blue-950 hover:text-white transition"
                  >
                    Home
                  </a>
                  <span className="mx-2">/</span>
                  <span>Kimya Sektörü</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sayfa İçeriği */}
      <div className="container mx-auto px-4 py-8">
        {/* Başlıklar */}
        <div
          className="flex flex-col justify-center items-center text-center leading-relaxed space-y-4 mb-12"
          style={{ color: "#22d3ee" }}
        >
          <h1 className="text- font-">
            <strong>NBC Uygunluk Değerlendirme Eğitim Ltd. Şti.,</strong>
          </h1>
          <h2 className="text-3xl">
            <strong className="text-black">
              {" "}
              T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından
              onaylanmış KDU eğitimini veren kurumlar arasındadır.
            </strong>
          </h2>
          <h3 className="text-1xl">
            <strong className="text-black">
              Aynı zamanda TÜRKAK tarafından akredite edilmiş belgelendirme
              kuruluşudur.
            </strong>
          </h3>
        </div>

        {/* Metin Bölümü */}
        <div className="text-lg leading-relaxed space-y-4 mb-12 text-gray-700">
          <p>
            Çevre ve Şehircilik Bakanlığı tarafından{" "}
            <strong>27 Haziran 2017</strong> tarihinde Resmi Gazete Sayı : 30105{" "}
            <strong>
              Kimyasalların Kaydı Değerlendirilmesi İzni ve Kısıtlanması{" "}
            </strong>{" "}
            (KKDİK) yönetmeliği yayınlanmıştır . <br />
            <strong>KKDİK Yönetmeliği</strong> , insan sağlığı ve çevreyi
            kimyasalların olumsuz etkilerinden en üst düzeyde korumayı{" "}
            <em>
              <strong>amaçlamaktadır. </strong>
            </em>{" "}
          </p>
          <p>
            <strong>KKDİK Yönetmeliği;</strong>{" "}
            <u>
              Maddelerin imalatını, piyasaya arzını veya maddenin kendi halinde,
              karışım içinde veya eşya içinde kullanımını ve karışımların
              piyasaya arzını kapsar.{" "}
            </u>
          </p>
          <p>
            <strong>KKDİK Yönetmeliği</strong> EK-18 içeriğine göre ,
            <strong>
              T.C Çevre, Şehircilik ve İklim Değişikliği Bakanlığı
            </strong>{" "}
            tarafından onaylanmış eğitim kuruluşlarından en az 64 saat{" "}
            <strong>Kimyasal Değerlendirme Uzmanı (KDU)</strong> eğitimi
            alınmalı,eğitim sonunda{" "}
            <strong>
              {" "}
              <u>TÜRKAK</u>{" "}
            </strong>{" "}
            tarafından akredite edilmiş belgelendirme kuruluşu tarafından açılan{" "}
            sınava katılmaları gerekir. Sınavdan 70 ve üzeri puan alanlar{" "}
            <strong> Kimyasal Yeterlilik Belgesine</strong> sahip olurlar.{" "}
            <strong>Kimyasal Değerlendirme Uzmanı</strong> olurlar.
            <br />
            <br /> Belge Süresi <strong>5</strong> yıldır.
            <br />
            <br />
            <strong>Kimyasal Değerlendirme Uzmanı</strong> sertifikası almaya
            hak kazananlar, tekrardan{" "}
            <strong>Güvenlik Bilgi Formu Hazırlayıcısı</strong> Eğitimi diğer
            ifadeyle <strong>(GBF)</strong> ya da <strong>(M)SDS</strong>
            Eğitimi almalarına ve <strong>GBF</strong> sınavına katılmalarına
            gerek yoktur. Eğitimler, T.C Çevre, Şehircilik ve İklim Değişikliği
            Bakanlığı tarafından onaylanmış eğitim kuruluşlarınca
            düzenlenmektedir. Belgelendirme ise, <strong>TÜRKAK</strong>
            tarafından <strong>akredite edilmiş kuruluşlar</strong> tarafından
            yapılmaktadır.
            <br />
            <br />
            <br />
            <h2 className="text-3xl">
              <strong className="text-black">
                {" "}
                Kimyasal Değerlendirme Uzmanı Ne İş Yapar?
              </strong>
            </h2>
            <br />
            <br />
            <li>
              <strong>KKDİK</strong> kapsamında, 10 ton ve üzerinde imal veya
              ithal edilen maddeler için{" "}
              <strong>
                Kimyasal Güvenlik Raporu ve Kimyasal Güvenlik Değerlendirmesini
              </strong>{" "}
              yapar.
            </li>
            <li>
              <strong>Entegre Çevre Bilgi Sistemi</strong>içerisinde yer alan{" "}
              <strong>Kimyasal Kayıt Sistemine</strong> Ön-Kayıtları ve
              Kayıtları gerçekleştirir.
            </li>
            <li>
              <strong>Ortak kayıtlarda</strong> oluşacak olan konsorsiyumlarda
              temsilcilik yapar.
            </li>
            <li>
              Yurt dışından{" "}
              <strong>
                Türkiye İthal edilen Kimyasalların KKS sistemine kaydının
              </strong>{" "}
              gerçekleştirilmesi için
              <u>
                {" "}
                <strong>TEK TEMSİLCİLİK</strong>
              </u>{" "}
              yapar.
            </li>
            <li>
              <strong>Kimyasal üreticilerin KKS</strong> kayıtlarının
              gerçekleştirilmesi Üçüncü Taraf ismi ile görev alır.
            </li>
            <li>
              <strong>GÜVENLİK BİLGİ FORMU </strong> (M)SDS) HAZIRLAR.
            </li>
            <li>
              <strong>Maddelerin Kayıt dosyalarını </strong>hazırlar.
            </li>
            <br />
            <strong>
              <u>31/12/2023</u> tarihine kadar Güvenlik Bilgi Formları Zararlı
              Maddelerin ve Karışımların Güvenlik Bilgi Formları Hakkında
              Yönetmeliğe
            </strong>{" "}
            göre hazırlanır.
            <br />
            <br />
            Kimyasal değerlendirme uzmanı,{" "}
            <strong>
              Zararlı Maddelerin ve Karışımların Güvenlik Bilgi Formları
              Hakkında Yönetmeliğe
            </strong>{" "}
            göre de <strong>Güvenlik Bilgi Formu</strong> hazırlayabilir.
          </p>
          <br />
          <br />
          <h2 className="text-3xl">
            <strong className="text-black">
              {" "}
              Kimyasal Değerlendirme Uzmanı Sınavına Kimler Katılmalı?
            </strong>
          </h2>
          <p>
            <strong>Kimyasal Değerlendirme Uzmanı (KDU)</strong>Sınavına
            katılabilmek için aşağıdaki kriterlerin karşılanması gerekmektedir:
            <br />
            <br />
            <li>
              <strong>Kimya, Biyoloji veya Çevre Bilimleri*</strong>
              ile ilgili{" "}
              <strong>
                Fen/Fen Edebiyat Fakülteleri’nin veya Mühendislik
                Fakülteleri’nin lisans
              </strong>{" "}
              bölümlerinden mezun olmak.
            </li>
            <li>
              <strong>Kimya Bilimi ile ilgili yüksek lisans, doktora</strong>{" "}
              yapmak
            </li>
            <li>
              Üniversitenin diğer lisans bölümlerinden mezun olup{" "}
              <strong>
                kimyasallara ilişkin üretim, laboratuvar, kalite kontrol veya
                kimyasalların yönetimi alanında en az 5 yıl çalışmış olmak.{" "}
              </strong>
            </li>
            <br />
            * Kimya, Biyoloji, Çevre Bilimleri ile ilgili Fen/Fen Edebiyat
            Fakülteleri’nin veya Kimya, Biyoloji, Çevre Bilimleri ile ilgili
            Mühendislik Fakülteleri’nin lisans bölümlerine örnek olarak;
            Biyokimya, Biyoteknoloji, Kimya, Biyoloji, Moleküler Biyoloji ve
            Genetik Mühendisliği, Biyomedikal Mühendisliği, Çevre Mühendisliği,
            Kimya mühendisliği gibi bölümler sayılabilir.
            <br />
            <br />
            Lisans programlarında ağırlıklı olarak{" "}
            <strong>Kimya, Biyoloji ve Çevre Bilimleri</strong> konularına yer
            verdiği gösterilen diğer bölümler de bu kapsama girer. Bu kapsamda
            olmayan{" "}
            <strong>
              lisans bölümlerinden (ör: Makine Mühendisliği, İşletme Bölümü vb.)
              mezun olanların KDU sınavına katılabilmeleri için kimyasallara
              ilişkin üretim, laboratuvar, kalite kontrol veya kimyasalların
              yönetimi alanında en az 5 yıl çalışmış
            </strong>{" "}
            olma şartını karşılamaları gerekmektedir.
          </p>
          <br />
          <br />
          <h2 className="text-3xl">
            <strong className="text-black"> Eğitim İçeriği</strong>
          </h2>
          <p>
            <li>
              <strong>Kimyasalların</strong> yönetimi
              <br />
            </li>
            <li>
              <strong>Mevzuat:</strong>
              <br />– Maddelerin ve Karışımların Sınıflandırılması Etiketlenmesi
              ve Ambalajlanması Hakkında Yönetmelik <br />
              – Tehlikeli Malların Taşınması, Depolanması
              <br />– İş Sağlığı ve Güvenliği <br />– Kimyasalların Kaydı,
              Değerlendirilmesi, İzni ve Kısıtlanması
            </li>
            <li>
              <strong>Madde ve karışımların:</strong> <br />– Fizikokimyasal
              özelliklere göre sınıflandırılması
              <br />
              – Toksikolojik özelliklere göre sınıflandırılması
              <br />– Ekotoksikolojik özelliklere göre sınıflandırılması
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
              <strong>Kimyasal Güvenlik Raporu </strong> (KGR)
            </li>
            <li>
              <strong>Güvenlik bilgi formu</strong> hazırlanması için
              gereklilikler
            </li>
          </p>
          <h2 className="text-3xl">
            <strong className="text-black">
              {" "}
              Eğitim/Sınav Ücretine Dâhil Olan Hizmetler:
            </strong>
          </h2>
          <p>
            <li>
              <strong>KDU Eğitim dokümanı</strong>
            </li>
            <li>
              <strong>Eğitim sonunda eğitime katılım sertifikası</strong>
            </li>
            <li>
              <strong>
                Sınavda başarılı olunması halinde TÜRKAK onaylı Kimyasal
                Değerlendirme Uzmanı Sertifikası,
              </strong>
            </li>
            <u>İstenilen evraklar;</u> başvuru formu, belge kullanım sözleşmesi,
            diploma (ya da mezuniyet belgesi) ve nüfus cüzdanı fotokopisi,
            eğitim ve sınav ücretinin yatırıldığına dair dekont
            <strong>Ek Not:</strong> Üniversitenin diğer lisans bölümlerinden
            mezun olup kimyasallara ilişkin{" "}
            <strong>
              üretim, laboratuvar, kalite kontrol veya kimyasalların yönetimi
            </strong>{" "}
            alanında <strong>en az 5 yıl çalışmış</strong> olanların ek olarak
            çalışılan şirketten alınacak ıslak imzalı çalışma belgesi
            getirmeleri gerekmektedir.
          </p>
          <h2 className="text-3xl">
            <strong className="text-black"> Güvenlik Bilgi Formu (GBF)</strong>
          </h2>
          <p>
            <strong>
              ‘Zararlı Maddeler ve Karışımlara İlişkin Güvenlik Bilgi Formları
              Hakkında Yönetmelik’
            </strong>{" "}
            13/12/2014 tarihli ve 29204 sayılı Resmî Gazete ‘de yayımlanmıştır.
            <br />
            Piyasaya arz edilen <strong>
              zararlı madde ve karışımların
            </strong>{" "}
            insan sağlığı ve çevre üzerine olumsuz etkilerinden korunmak için{" "}
            <strong>Güvenlik Bilgi Formu</strong> hazırlanması ve dağıtımına
            ilişkin teknik usul ve esasları düzenlemektir.
            <strong>23.06.2017</strong> tarih ve <strong>30105</strong> sayılı{" "}
            <strong>
              Kimyasalların Kaydı, Değerlendirilmesi, İzni ve Kısıtlanması
            </strong>
            Hakkında Yönetmeliğin 64’üncü Maddesinde; 13/12/2014 tarihli ve
            29204 sayılı Resmî Gazete ‘de yayımlanan{" "}
            <strong>
              Zararlı Maddeler ve Karışımlara İlişkin Güvenlik Bilgi Formları
              Hakkında Yönetmeliğin
            </strong>{" "}
            yürürlükten kaldırıldığı, ancak 2’inci Geçici Maddesinde de{" "}
            <strong>
              “31/12/2023 tarihine kadar güvenlik bilgi formları Zararlı
              Maddelerin ve Karışımların Güvenlik Bilgi Formları Hakkında
              Yönetmeliğe göre hazırlanır”
            </strong>{" "}
            hükmü yer almakta olup , ayrıca; 27 inci maddesinde de;
            <strong>
              “Bir maddenin ya da karışımın tedarikçisi, kimyasal değerlendirme
              uzmanı tarafından hazırlanmış bir güvenlik bilgi formunu temin
              eder”
            </strong>{" "}
            hükmü yer almaktadır.
            <br />
            Bu nedenle, <strong>Belgelendirme Kuruluşları</strong> olarak vermiş
            olduğunuz{" "}
            <strong>“Güvenlik Bilgi Formu Hazırlayıcısı Sertifikaları”</strong>{" "}
            <u>
              31/12/2023 tarihine kadar geçerli olup, 31.12.2023 tarihinden
              itibaren
            </u>{" "}
            sadece <strong>Kimyasal Değerlendirme Uzmanı</strong> Sertifikasına
            sahip kişiler tarafından <strong>Güvenlik Bilgi Formları</strong>{" "}
            hazırlanabilecektir.
            <br />
            <br />
            Kuruluşumuz tarafından 2021 yılında ve daha sonraki yıllarda
            alınacak{" "}
            <strong>
              Güvenlik Bilgi Formu Hazırlayıcısı sertifikalarının geçerlilik
              süresi 31.12.2023
            </strong>{" "}
            tarihinde sona erecektir.
          </p>
          
         

        </div>
      </div>
    </div>
  );
};

export default SeraGazi;
