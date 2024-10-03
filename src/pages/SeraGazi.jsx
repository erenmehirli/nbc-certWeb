import React from "react";
import seraImage from "../assets/images/Yetkilerimiz2.png"; // Görsel yolu
import banner from '../assets/images/seragazıbanner.jpeg'
// Emisyon Hedefleri Bölümü
const EmisyonHedefleri = () => {
  return (
    <section className="w-full bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="w-full">
          {/* Spacer */}
          <div className="h-10"></div>

          {/* Başlık Bölümü */}
          <div className="text-center">
            <div className="text-lg text-gray-600 mb-4">
              2030 yılı itibarıyla emisyonlarımızı 2023 yılına kıyasla dörtte
              bir oranında azaltacağız.
            </div>
            <h2 className="text-3xl font-bold text-blue-900">
              2050 yılı itibarıyla, Paris İklim Anlaşması uyarınca, net sıfır
              emisyonu hedefliyoruz.
            </h2>
          </div>

          {/* Spacer */}
          <div className="h-10"></div>
        </div>
      </div>
    </section>
  );
};

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
              <h1 className="main-title text-5xl font-bold">Sera Gazı</h1>
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
                  <span>Sera Gazı</span>
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
          <h1 className="text-4xl font-bold">
            <strong>Sera Gazı Doğrulayıcısı</strong>
          </h1>
          <h2 className="text-4xl font-bold">
            <strong>Sera Gazı Baş Doğrulayıcısı</strong>
          </h2>
          <h3 className="text-3xl font-bold">
            Personel Belgelendirme Akreditasyonu
          </h3>
        </div>

        {/* Metin Bölümü */}
        <div className="text-lg leading-relaxed space-y-4 mb-12 text-gray-700">
          <p>
            Kuruluşumuz{" "}
            <strong>
              <a
                href="https://intweb.tse.org.tr/Standard/Standard/Standard.aspx?081118051115108051104119110104055047105102120088111043113104073083084082085104098111116108088069"
                className="text-blue-500 hover:underline"
              >
                ISO 14064 -1
              </a>
              , -2, -3
            </strong>{" "}
            standartının denetimini yapan kişilerin –{" "}
            <strong>doğrulayıcı ve baş doğrulayıcı</strong> – belgelendirmesi
            konusunda, Amerika’da yerleşik <strong>IAS Akreditasyon</strong>{" "}
            kurumu tarafından{" "}
            <a
              href="https://intweb.tse.org.tr/Standard/Standard/Standard.aspx?081118051115108051104119110104055047105102120088111043113104073083084082085104098111116108088069"
              className="text-blue-500 hover:underline"
            >
              <strong>ISO 17024 standardına</strong>
            </a>{" "}
            göre <strong>“Sera gazı doğrulayıcısı”</strong> ve{" "}
            <strong>“Sera gazı baş doğrulayıcısı”</strong> belgelendirme
            programına uygun olarak{" "}
            <em>
              <strong>personel belgelendirme akreditasyonuna</strong>
            </em>{" "}
            sahiptir.
          </p>
          <p>
            Sera gazı emisyonlarının azaltılması, iklim değişikliğini
            hafifletmek için büyük önem taşımaktadır. Çeşitli sektörlerde sera
            gazı emisyonları izlenmekte, raporlanmakta ve kontrol altına
            alınmaya çalışılmaktadır.
          </p>
        </div>

        {/* Yeni Eklenen Metin */}
        <div className="text-lg leading-relaxed space-y-4 mb-12 text-gray-700">
          <p>
            <strong className="text-gray-600">Sera gazı</strong> raporlamasında
            tutarlılığı sağlamak ve diğer iletişimlerde uluslararası piyasa kamu
            güvenliğini sağlamak için{" "}
            <strong className="text-gray-600">
              doğrulama ekiplerinin ve geçerli kılma ekiplerinin yetkinlik
              gerekliliklerini
            </strong>{" "}
            tanımlamaya, ölçmeye ve belgelemeye ihtiyaç vardır. Bu program,
            doğrulama kuruluşlarında ve doğrulama kuruluşlarında çeşitli
            doğrulama veya doğrulama faaliyetlerinde yer alan personelin
            yetkinliğini belirlenen ekipte belirlemek, göstermek ve yönetmek
            için oluşturulmuştur.
          </p>
        </div>

        {/* Emisyon Hedefleri Bölümü */}
        <EmisyonHedefleri />
      </div>
    </div>
  );
};

export default SeraGazi;