import React, { useState } from "react";
import CountUp from "react-countup"; // Sayı animasyonu için
import bg from "../assets/images/bg.png";
import environmentImage from "../assets/images/hakkimizda_kimya.jpg";
import chemistryImage from "../assets/images/seragazi_370x210.jpg";
import energyImage from "../assets/images/turkreach.jpg";
import constructionImage from "../assets/images/isyonetimi.jpg";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import woodsvg from "../assets/images/wood-svg.svg";
const AboutUs = () => {
  const customStyle = {
    backgroundColor: "#030F27", // Arka plan rengi
    color: "#FFFFFF", // Metin rengi
    padding: "16px",
  };

  const customStyle2 = {
    backgroundColor: "#01AEEF", // Arka plan rengi
    color: "#FFFFFF", // Metin rengi
    padding: "16px",
  };
  const [hovered, setHovered] = useState(false);
  const sectors = [
    {
      title: "Kimya Sektörü",
      description:
        "Kimyasalların Kaydı Değerlendirmesi İzni ve Kısıtlanması (KKDİK), Kimyasal Değerlendirme Uzmanı (KDU).",
      image: environmentImage,
    },
    {
      title: "Sera Gazı",
      description:
        "Sera Gazı Emisyonları, Sera Gazı Emisyonları İzleme Ve Raporlama İlkeleri, Sera Gazı.",
      image: chemistryImage,
    },
    {
      title: "TÜRK REACH ",
      description:
        "Registration, Evaluation, Authorisation and Restriction of Chemicals, Kimyasalların Kaydı, Değerlendirilmesi, İzni ve Kısıtlanması ",
      image: energyImage,
    },
    {
      title: "İŞ VE YÖNETİM ",
      description:
        "Çağrı merkezi çalışanları, anketörler, meslek ve KOBİ danışmanları, kariyer ve yetenek yönetim uzmanları",
      image: constructionImage,
    },
  ];

  return (
    <section className="py-6 mt-6 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <h2 className="text-4xl font-bold text-center mb-8 mt-6 text-gray-800">
          Hakkımızda
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between relative">
          {/* Sol Taraf (Metin) */}
          <div className="lg:w-2/3 mb-8 lg:mb-0 px-14">
            <h3 className="text-xl mb-4 text-blue-400 font-thin">
              Şirketimiz 2019 yılında Ankara merkezli uygunluk değerlendirme
              kuruluşu olarak kurulmuştur.
            </h3>
            <p className="text-gray-600 mb-4 font-bold">
              IAS'dan Sera Gazı Doğrulayıcısı ve Baş Doğrulayıcısı eğitim ve
              sınav yapma konusunda da Türkiye'de ilk akredite kuruluştur.
            </p>
            <p className="text-gray-600 mb-4">
              Ayrıca{" "}
              <a className="text-blue-400" href="">
                {" "}
                Kimyasalların Kaydı, Değerlendirilmesi, İzni ve Kısıtlanması
                hakkında yönetmelik (KKDİK){" "}
              </a>{" "}
              kapsamında{" "}
              <a className="text-blue-400" href="">
                T.C. Çevre Şehircilik ve İklim Değişikliği Bakanlığı{" "}
              </a>
              tarafından Kimyasal Değerlendirme Uzmanı (KDU) ve Güvenlik Bilgi
              Formu (GBF) hazırlayıcısı eğitim Kuruluşu olarak atanmıştır.
            </p>
          </div>

          {/* Sağ Taraf (Resimler) */}
          <div className="lg:w-1/2 relative flex justify-center">
            <img
              src="https://nbccert.com.tr/wp-content/uploads/2023/11/sergazi1.jpg"
              alt="Sera Gazı Doğrulayıcısı"
              className={`w-2/4 h-2/4 rounded-lg shadow-lg transition-transform duration-300 ${
                hovered ? "-translate-x-4" : "translate-x-0"
              }`}
              style={{ zIndex: 1, marginRight: "-60px", marginTop: "20px" }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
            <img
              src="https://nbccert.com.tr/wp-content/uploads/2023/10/hakkimizda_kimya.jpg"
              alt="Hakkımızda Kimya"
              className={`w-3/5 h-auto rounded-lg shadow-lg transition-transform duration-300 ${
                hovered ? "translate-x-6" : "translate-x-0"
              }`}
              style={{ zIndex: 0, marginLeft: "-50px" }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </div>
        </div>

        {/* Hizmet Verdiğimiz Sektörler Bölümü */}
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 mt-12">
          Hizmet Verdiğimiz Sektörler
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            >
              <img
                src={sector.image}
                alt={sector.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {sector.title}
              </h3>
              <p className="text-gray-600 mt-2">{sector.description}</p>
            </div>
          ))}
        </div>
        {/* Yeni Ekleme: Sayılar Bölümü */}
        <section className="py-12  mt-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Başarılarımız
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div style={customStyle} className=" p-6 rounded-lg shadow-lg">
              <i className="fas fa-certificate text-5xl text-blue-400 mb-4"></i>
              <h3 className="text-3xl font-bold">
                <CountUp start={0} end={800} duration={2} /> +
              </h3>
              <p className="text-gray-600">Belgelendirme </p>{" "}
              <ContactEmergencyIcon />
            </div>
            <div style={customStyle} className=" p-6 rounded-lg shadow-lg">
              <i className="fas fa-graduation-cap text-5xl text-blue-400 mb-4"></i>
              <h3 className="text-3xl font-bold">
                <CountUp start={0} end={150} duration={2} /> +
              </h3>
              <p className="text-gray-600">Eğitim </p> <MenuBookIcon />
            </div>
            <div style={customStyle} className=" p-6 rounded-lg shadow-lg">
              <i className="fas fa-handshake text-5xl text-blue-400 mb-4"></i>
              <h3 className="text-3xl font-bold">
                <CountUp start={0} end={12} duration={2} /> +
              </h3>
              <p className="text-gray-600">Çözüm Ortaklığı </p>
              <StarBorderIcon />
            </div>
          </div>
        </section>
      </div>

      <img src={bg} alt="" />

      <div className="grid grid-rows-1 md:grid-cols-2 items-center text-center px-10 mx-auto w-2/3 justify-center gap-4">
        {/* Sol Sütun */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg max-w-sm">
            <h3 className="font-bold text-3xl text-blue-400  ">
              İtiraz ve şikâyetlerin değerlendirilmesine yönelik politikamız;
            </h3>
            <p className="font-thin text-lg ">
              Ulusal yeterliliklerin ölçme ve değerlendirme kararlarını bir
              adayın sorgulayabilmesinin veya bu kararlara itiraz edebilmesinin
              sağlanması, Belgelendirme kuruluşunun sunduğu hizmetlere ilişkin
              şikâyetlerin dikkate alınmasının sağlanması, tüm adayların
              itiraz/şikâyet politikası ve prosedürüne ilişkin olarak
              bilgilendirilmesi, öncelikli olarak itirazda bulunan aday ve
              ilgili değerlendiricinin uzlaşmaya varmalarının sağlanması,
              aşamalı bir temyiz prosedürünün işletilmesi, açıklık ve adilliğin
              sağlanması için her itiraz/şikâyetin standardize edilmesi ve kayıt
              altına alınması, kurum tarafından istendiğinde araştırılabilmesi
              için her itiraz/şikâyet kaydının saklanması hususlarını
              içermelidir.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg max-w-sm">
            <h3 className="font-bold text-3xl text-blue-400">
              Personel Eğitimi ve Geliştirme Politikamız;
            </h3>
            <p className="font-thin text-lg">
              Tüm personelin, tam potansiyellerini ortaya çıkaracak şekilde,
              görev tanımları ile tutarlı olarak, yüksek standartta çalışmasını
              sağlayacak bilgi, beceri ve uzmanlık sahibi olmasının sağlanması,
              tüm personelin eğitim ve gelişim ihtiyaçlarının bu politika
              doğrultusunda değerlendirilmesinin ve karşılanmasının sağlanması,
              tüm yeni personelin, ekibe katıldığında uygun uyum eğitimini
              almasının sağlanması, bu uyum eğitiminin uygun eğitim ve gelişim
              ihtiyaçlarının tanımlanmasını da içermesi, istihdam edilen tüm
              personele işe başlamalarından önce uygun iş sağlığı ve güvenliği
              eğitimi verilmesi ve bu eğitimin acil durum prosedürlerini de
              kapsaması, tüm personele eğitim ve gelişim fırsatlarının
              sağlanmasında eşit olarak yaklaşılması ve tüm personel ihtiyaçları
              doğrultusunda eğitim ve gelişim fırsatlarına eşitlik içerisinde
              erişim sağlanması hususlarını içermelidir.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg max-w-sm">
            <h3 className="font-bold text-3xl text-blue-400">
              Belgelerin kötüye kullanımını engellemeye yönelik politikamız;
            </h3>
            <p className="font-thin text-lg">
              Belgelerin personel veya adaylar tarafından kötüye kullanma
              riskini tanımlayarak en aza indirgenmesi, öne sürülen her kötüye
              kullanma iddiasına hızlı ve tarafsız olarak yanıt verilmesi,
              Açıklık ve adillik sağlamak için her kötüye kullanma
              soruşturmasının standardize edilmesi ve kayıt altına alınması,
              kötüye kullanma durumunun (veya teşebbüslerinin) kanıtlandığı
              olaylarda mevzuata ve sözleşmelere uygun yaptırımlarda bulunulması
              hususlarını içermelidir.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg max-w-sm">
            <h3 className="font-bold text-3xl text-blue-400">
              Uygun olmayan faaliyetlere yönelik politikamız;
            </h3>
            <p className="font-thin text-lg">
              Dokümante edilmiş prosedürlere, politikalara ve hedeflere uygun
              olmayan faaliyetlerin tespiti için denetim ve kontrol
              faaliyetlerinin gerçekleştirilmesi, Uygun olmadığı tespit edilen
              faaliyetlerin giderilmesi ve tekrarlanmaması için düzeltici ve
              önleyici faaliyetler gerçekleştirilmesinin sağlanması hususlarını
              içermelidir.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg max-w-sm">
            <h3 className="font-bold text-3xl text-blue-400">
              Tarafsızlığın sağlanması ve her türlü çıkar çatışmasının
              önlenmesine yönelik politikamız;
            </h3>
            <p className="font-thin text-lg">
              Hissedarlar, yöneticiler, çalışanlar, dışarıdan hizmet sağlayanlar
              ve hizmet sunulanlar arasında gerçekleşme ihtimali bulunan olası
              her türlü çıkar veya ilgi çatışmasına yönelik tedbirlerin alınması
              ve prosedürlerin bu doğrultuda işletilmesi, öngörülemeyen çıkar
              çatışması durumlarının ortaya çıkması halinde tarafsızlığı güvence
              altına alacak şekilde harekete geçilmesi ve ilgili durumların
              şeffaf bir şekilde kayıt altına alınması, çalışanlara aşırı iş
              yüklenmesi nedeni ile asli vazifelerine, yapacakları inceleme ve
              değerlendirmelere yeteri kadar zaman ayıramamalarından kaynaklanan
              zaman çatışması durumunun en aza indirgenmesi, sınav
              görevlilerinin kan bağı ya da yakın ilişkisi olan kişilerin
              sınavlarını yapmaları halinde oluşabilecek kan bağı ya da yakınlık
              çelişkisi durumunun ortadan kaldırılması, çalışanların disiplin ve
              tutum davranışlarından kaynaklı olarak ölçme değerlendirme
              faaliyetleri ile belgelendirme kararlarının etkilenmemesine
              yönelik tedbir alınması, finansal çıkarların, gelir ve kar
              beklentilerinin hiçbir belgelendirme kararını etkilememesi
              hususlarını içermelidir.
            </p>
          </div>
        </div>

        {/* Sağ Sütun */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg max-w-sm">
            <h3 className="font-bold text-3xl text-blue-400">
              Fırsat eşitliği politikamız;
            </h3>
            <p className="font-thin text-lg">
              Ayrımcılığın önlenmesine ilişkin gerekli tedbirlerin alınması,
              herkes için ölçme ve değerlendirilme imkânına erişim sağlanması,
              özel gereksinimleri bulunan adayların ihtiyaçlarının dikkate
              alınması, Ulusal yeterliliklerin ölçme ve değerlendirmesinin
              geçerli ve güvenilir olmasının ve herhangi bir kişinin veya grubun
              diğerlerinden daha avantajlı veya dezavantajlı hale
              getirilmemesinin sağlanması hususlarını içermelidir..
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg max-w-sm">
            <h3 className="font-bold text-3xl text-blue-400">
              Ölçme ve değerlendirmeye yönelik politikamız;
            </h3>
            <p className="font-thin text-lg">
              Ulusal yeterliliklerin ölçme ve değerlendirme prosedürlerinin
              açık, adil ve önyargıdan uzak olmasının sağlanması, Ulusal
              yeterliliklerin ölçme ve değerlendirme kayıtlarının doğru ve
              ayrıntılı şekilde kayıt altına alınmasının sağlanması,
              değerlendirme kararlarının tarafsız, geçerli ve güvenilir
              olmasının sağlanması, görevin kötüye kullanılması veya yanlış
              uygulamaların olması ihtimalini en aza indirecek ölçme ve
              değerlendirme prosedürlerinin geliştirilmesi, değerlendirme
              kararlarının doğru ve ayrıntılı şekilde kayıt altına alınmasının
              sağlanması, ölçme ve değerlendirmenin mevzuata göre doğru ve uygun
              şekilde yapılmasını sağlamak için gereken tüm kaynakların temin
              edilmesi hususlarını içermelidir.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg max-w-sm">
            <h3 className="font-bold text-3xl text-blue-400">
              Kalite güvencesinin sağlanmasına yönelik politikamız;
            </h3>
            <p className="font-thin text-lg">
              Akreditasyon ve yetkilendirme kuralları çerçevesinde yüksek
              kalitede, etkin ve sürdürülebilir hizmet sunulmasının sağlanması,
              Yetki kapsamındaki ulusal yeterliliklerin ve yeterlilik
              birimlerinin ölçme ve değerlendirmesindeki kalite standardının
              sürdürülmesi için kurumsal düzeyde kontrollerin sağlanması
              hususlarını içermelidir.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg max-w-sm">
            <h3 className="font-bold text-2xl text-blue-400">
              İç doğrulama politikamız;
            </h3>
            <p className="font-thin text-lg">
              Değerlendiriciler arasında tutarlılığı sağlamak ve sadece hak eden
              bireylerin belgelere ulaşabilmesini teminat altına almak için iç
              doğrulama faaliyetlerinin yürütülmesi, iç doğrulamanın geçerli ve
              güvenilir olmasını ve tüm değerlendiriciler ile tüm ulusal
              yeterlilik faaliyetlerini kapsamasının sağlanması, iç doğrulama
              prosedürünün açık, adil ve önyargıdan uzak olmasının sağlanması,
              iç doğrulama kararlarının doğru ve ayrıntılı şekilde kayıt altına
              alınmasının sağlanması hususlarını içermelidir.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg max-w-sm">
            <h3 className="font-bold text-3xl text-blue-400">
              İş sağlığı ve güvenliği ve risk yönetimi politikamız;
            </h3>
            <p className="font-thin text-lg ">
              Tüm faaliyetlerde iş sağlığı ve güvenliği hususlarına yeterince
              dikkat edilmesinin sağlanması, personelin, adayların,
              ziyaretçilerin, denetçilerin, tüklenicilerin ve diğer personelin
              hem kendilerine hem de birbirlerine karşı iş sağlığı ve güvenliği
              açısından yasal yükümlülükleri bulunduğunun belirtilmesi, iş
              sağlığı ve güvenliği kontrol önlemleri ve acil durum
              prosedürlerinin yürürlükte ve etkili olmasının, gerektiği şekilde
              kullanılmasının, izlenmesinin ve sürdürülmesinin sağlanması
              amacıyla yıllık denetimler gerçekleştirilmesi, potansiyel
              tehlikelerin tanımlanması ve en aza indirgenmesi amacıyla yıllık
              iş sağlığı ve güvenliği risk değerlendirmelerinde bulunulması, tüm
              kişilerin ilgili risklerden haberdar olmalarını ve gereken
              eylemleri yerine getirmelerini veya bunların yerine getirilmesine
              nezaret etmelerinin sağlanması amacıyla bilgi, talimat, eğitim
              sağlanması ve gözetimde bulunulması, işyerinde sağlık ve güvenliği
              sağlamaya yönelik mevzuat ve Kurum’un ilaveten talep ettiği tüm
              hususlara uyacak şekilde yeterli ve uygun bina, ekipman ve tesis
              sağlanması, iş sağlığı ve güvenliğini etkileyen hususlara ilişkin
              olarak personele ve adaylara danışılması, güvenli çalışma
              sistemlerin uygulanması ve risk teşkil eden durumların kontrol
              altında tutulması, iş sağlığı ve güvenliğine ilişkin iyi
              uygulamaların güncel olarak uygulanması ve tüm ilgili mevzuat ve
              yol gösterici nitelikteki idari yönlendirmelere uyulmasının
              sağlanması hususlarını içermelidir.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
