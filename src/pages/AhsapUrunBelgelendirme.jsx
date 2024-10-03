import React from "react";
import Image from "../assets/images/aa.png.png";
import Image1 from "../assets/images/Mavi çizgi.png";
import lvl from "../assets/images/lvlahşap.png";
import Yapısal from "../assets/images/yapısalkereste.png";
import Clt from "../assets/images/cltahşap.png";
import PSL from "../assets/images/pslahşap.png";
import Ntl from "../assets/images/ntlçiviliahşap.png";
import Lamine from "../assets/images/lamineahşap.png";
import Lsl from "../assets/images/lslahşap.png"
import Dtl from "../assets/images/Dtl.png"
import Plaka from "../assets/images/yapısalkontroplak.png"
import Obs from "../assets/images/obs.png"
import Uygunluk from "../assets/images/NbcUygunlukDeğerlendirme.png"
import Belgelendirme from "../assets/images/CeBelgelendirme.png"
import Tablo from "../assets/images/tablo.png"
import Tahta from "../assets/images/Tahta.png"
import Tablo2 from "../assets/images/Tablo2.jpg"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import banner from '../assets/images/ahsapbnner.jpg'
const AhsapUrunBelgelendirme = () => {
  const handleDocumentsClick = () => {
    window.open("https://nbccert.com.tr/path-to-your-document.pdf", "_blank");
  };

  return (
    <div>
      {/* Fotoğraf */}
      <div className="relative">
        <img
          src={banner}
          alt="Ahşap Ürün"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black bg-opacity-70 p-4 rounded-lg">
          <h1 className="text-4xl font-bold">Ahşap Ürün Belgelendirme</h1>
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
              <span>Ahşap Ürün Belgelendirme</span>
            </div>
          </div>
        </div>
      </div>

      {/* İçerik Bölümü */}
      <div className="container mx-auto py-16">
        <div className="text-black">
          <h1 className="text-3xl">
            <strong>
              YAPISAL AHŞAP ÜRÜN{" "}
              <img
                src={Image}
                alt="Yapısal Ahşap Ürün"
                className="inline-block w-9 h-10"
              />{" "}
              BELGELENDİRMESİ
            </strong>
          </h1>
          <br />
          <p>
            <strong className="text-3xl">YAPISAL AHŞAP</strong>
          </p>
          <img src={Image1} alt="Mavi Çizgi" className="my-4" />
          <p>
            Ahşap yapıların taşıyıcı sistemlerini{" "}
            <strong>(taşıyıcı yapı elemanlarını)</strong> oluşturmak için
            kullanılan ahşap esaslı yapı malzemeleri{" "}
            <strong>(Yapısal Ahşap)</strong> üç ana başlıkta ele alınabilir:
          </p>
          <p>
            <strong>1- Yapısal Kereste (Yapı Kerestesi):</strong> Bu malzeme
            herhangi bir ekleme ve birleştirme işlemine tabi tutulmamış masif,
            genellikle prizma şeklinde biçilmiş, üretilmiş ve yapısal
            özellikleri belirlenmiş ahşap malzemelerdir.
          </p>
          <p>
            <strong>2- İşlenmiş Yapısal Ahşap Malzemeler:</strong> Uluslararası
            terminolojide <strong>“İşlenmiş Yapısal Ahşap”</strong> ürünler diye
            tercüme edebileceğimiz ürünler ki, bunlar kerestelerin veya sair
            ahşap parçaların ileri işleme tabi tutularak, tutkal ve/veya çivi,
            kavela, vida gibi mekanik yardımcı malzemelerle eklenerek veya
            eklenmeden, yönlendirilerek veya yönlendirmeden birleştirilerek,
            yapısal özellik kazandırılan ürünlerdir.
          </p>
          <p>
            <strong>3- Yapısal Ahşap Levhalar:</strong> Bunlarda ileri işleme
            tabi tutulmuş genellikle çapraz yönlendirilmiş soyma kaplama veya
            yongaların tutkal ve presle sıkıştırılarak birleştirilmesi yolu ile
            üretilen, standart olarak boyutlandırılmış ahşap esaslı levhalardır.
          </p>

          {/* Documents Button */}
          <div className="text-center flex flex-col my-8">
            <button
              onClick={handleDocumentsClick}
              className="bg-blue-600 w-1/4 self-center hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
            >
              Dökümanlar
            </button>

            {/* Grid layout for the content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
              {/* Column 1 */}
              <div>
                <div className="text-center">
                  <p>
                    <strong className="text-3xl">Yapısal Kereste:</strong>
                    <br />
                    TS EN 14081-1 standardına göre değerlendirilerek kurutulmuş
                    ve yapısal sınıfı belirlenmiş keresteler.
                  </p>
                  <img
                    src={Yapısal}
                    alt="Yapısal Kereste"
                    className="w-auto h-auto mb-4 rounded-lg mx-auto"
                  />
                </div>
                <div className="text-center">
                  <p>
                    <strong className="text-3xl">
                      CLT Çapraz Lamine Ahşap:
                    </strong>
                    <br />
                    TS EN 16351 standardına göre yapısal kerestelerin yan yana
                    ve üst üste çapraz katlar halinde laminasyonu ile üretilmiş,
                    yapısal sınıfı belirlenmiş lamine duvar ve döşeme
                    malzemeleri.
                  </p>
                  <img
                    src={Clt}
                    alt="CLT Ahşap"
                    className="w-auto h-auto mb-4 rounded-lg mx-auto"
                  />
                </div>
                <br />
                <div className="text-center">
                  <p>
                    <strong className="text-3xl">
                      PSL Paralel Lamine Ahşap:
                    </strong>
                    <br />
                    Uzun ince dar şeritler haline getirilen endüstriyel odun
                    parçalarının birbirine paralel şekilde uygun tutkal ile
                    sıkıştırılıp preslenerek elde edilen, kolon ve kiriş olarak
                    kullanılan yapısal malzemeler.
                  </p>
                  <img
                    src={PSL}
                    alt="Yapısal Kereste"
                    className="w-auto h-auto mb-4 rounded-lg mx-auto"
                  />
                </div>
                <br />
                <div className="text-center">
                  <p>
                    <strong className="text-3xl">
                      NLT Çivili Lamine Ahşap:
                    </strong>
                    <br />
                    Yapısal Kerestelerin belirli aralıklarla birbirine
                    çivilenerek oluşturulan yapısal döşeme veya duvar blokları.
                  </p>
                  <img
                    src={Ntl}
                    alt="Yapısal Kereste"
                    className="w-auto h-auto mb-4 rounded-lg mx-auto"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <div className="text-center">
                  <p>
                    <strong className="text-2xl">Lamine Ahşap (Glulam):</strong>
                    <br />
                    TS EN 14080 standardına göre yapısal kerestelerin üst üste
                    tutkallı laminasyonu ile üretilmiş, yapısal sınıfı
                    belirlenmiş lamine Kolon ve Kiriş malzemeleri.
                  </p>
                  <img
                    src={Lamine}
                    alt="Lamine Ahşap"
                    className="w-auto h-auto mb-4 rounded-lg mx-auto"
                  />
                </div>
                <div className="text-center">
                  <p>
                    <strong className="text-2xl">
                      LVL Papel Lamine Ahşap :
                    </strong>
                    <br />
                    TS EN 14374 standardına göre Tomruklardan soyma yöntemi ile
                    elde edilen yaklaşık 3mm kalınlığında ahşap papellerin
                    katlar halinde laminasyonu ile üretilmiş, yapısal sınıfı
                    belirlenmiş lamine yapısal malzemeler.
                  </p>
                  <img
                    src={lvl}
                    alt="Lamine Ahşap"
                    className="w-auto h-auto mb-4 rounded-lg mx-auto"
                  />
                </div>
                <div className="text-center">
                  <p>
                    <strong className="text-2xl">
                      LSL Yonga Lamine Ahşap:
                    </strong>
                    <br />
                    Uzun ince geniş yongalar haline getirilen endüstriyel odun
                    parçalarının birbirine paralel şekilde uygun tutkallar ile
                    preslenerek elde edilen levhaların istenen ölçülerde
                    kesilerek oluşturulduğu yapısal ahşap malzemeler.
                  </p>
                  <img
                    src={Lsl}
                    alt="Lamine Ahşap"
                    className="w-auto h-auto mb-4 rounded-lg mx-auto"
                  />
                </div>
                <div className="text-center">
                  <p>
                    <strong className="text-2xl">
                      DLT Dübelli Lamine Ahşap:
                    </strong>
                    <br />
                    DLT Dübelli Lamine Ahşap Yapısal Kerestelerin belirli
                    aralıklarla birbirine ahşap dübellerle
                    bağlanması(birleştirilmesi) yöntemi ile oluşturulan yapısal
                    döşeme veya duvar blokları.
                  </p>
                  <img
                    src={Dtl}
                    alt="Lamine Ahşap"
                    className="w-auto h-auto mb-4 rounded-lg mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="text-center">
              <p>
                <strong className="text-3xl">YAPISAL AHŞAP</strong>
              </p>
              <img src={Image1} alt="Mavi Çizgi" className="my-4 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
              <div className="text-center">
                <p>
                  <strong className="text-2xl">Yapısal Kontraplak:</strong>
                  <br />
                  <br />
                  TS EN 12369-2 standardına göre Tomruklardan soyma yöntemi ile
                  elde edilen yaklaşık 0,7-2mm kalınlığında ahşap papellerin
                  katlar halinde çapraz laminasyonu ile üretilmiş, yapısal
                  sınıfı belirlenmiş yapısal levhalar.
                </p>
                <br />
                <img
                  src={Plaka}
                  alt="Lamine Ahşap"
                  className="w-auto h-auto mb-4 rounded-lg mx-auto"
                />
              </div>
              <div className="text-center">
                <p>
                  <strong className="text-2xl">Yapısal OSB:</strong>
                  <br />
                  <br />
                  TS EN 12369-1 Standardına göre ince geniş yongalar haline
                  getirilen endüstriyel odun parçalarının yönlendirilerek uygun
                  tutkallar ile preslenerek elde edilen yapısal levhalar.
                </p>
                <br />
                <img
                  src={Obs}
                  alt="Lamine Ahşap"
                  className="w-auto h-auto mb-4 rounded-lg mx-auto"
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            <img src={Uygunluk} alt="" className="w-3/4 self-center" />
            <br />
            <br />
            <img
              src={Belgelendirme}
              alt=""
              className="w-full h-auto object-cover"
            />
            <div>
              <br />
              <br />
              <br />
              <br />
              <h1 className="text-3xl">
                <strong>
                  Avrupa Standartlarına Göre Yapısal Kereste Sınıflandırması ve
                  CE İşareti{" "}
                </strong>
              </h1>
              <div className="text-left">
                <br />
                Mart 2011’de, Avrupa Parlamentosu tarafından kabul edilen
                305/2011 sayılı AB Tüzüğü (CPR, Yapı Ürünleri Tüzüğü),
                89/106/EEC sayılı Yapı Ürünleri Direktifi’ni (CPD) yürürlükten
                kaldırmıştır. Bu tüzük, yapı ürünlerinin Avrupa Birliği
                içerisinde pazara sunulması ve piyasada bulunabilir hale
                getirilmesi koşullarını belirlerken, yapı ürünlerinin temel
                özellikleri ile ilgili performanslarının nasıl ifade edileceğine
                ve bu ürünler üzerinde CE işaretinin kullanımına ilişkin
                harmonize kurallar getirmiştir. Yapısal kereste gibi yapı
                ürünleri de CPR’ın hükümlerine tabidir ve 1 Ocak 2012 tarihinden
                itibaren CE işareti taşıyan ürünler olarak piyasaya
                sunulabilmektedir.
                <br />
                <br />
                CE işaretlemesi, 305/2011 sayılı Tüzük (CPR) uyarınca yapısal
                kereste için zorunlu hale gelmiştir. Bu tüzük, Avrupa Birliği
                içerisindeki yapı ürünlerinin pazarlanması koşullarını belirler.
                Özellikle, CE işaretlemesi, 765/2008 sayılı Tüzük tarafından
                belirlenen genel ilkelere uygun olarak düzenlenmiştir. CE
                işareti, ürünlerin Avrupa Birliği içindeki serbest dolaşımını
                sağlarken, aynı zamanda bu ürünlerin belirli standartlara uygun
                olduğunu garanti eder.
                <br />
                <br />
                305/2011 sayılı AB Tüzüğü, yapı ürünlerinin pazara sunulması
                için harmonize kurallar getirmektedir. CPR Yönetmeliği’ne göre,
                CE işareti mevcut olduğunda harmonize standartlara uygunluğu
                garanti eder. Bu standartların güncel listesi, Avrupa Birliği
                Resmi Gazetesi C 246, Cilt 54, 24 Ağustos 2011 tarihinde
                yayımlanmıştır. Bu kurallar, CE işaretinin gerekliliklerini
                belirler ve yapı malzemelerinin performansını garanti altına
                alır. CE işaretlemesi, ürünlerin Avrupa standartlarına
                uygunluğunu belgeleyen bir kalite işaretidir ve bu süreç,
                yetkilendirilmiş bir kuruluşun yıllık denetimlerini içerir. Bu
                denetimler, üreticinin çeşitli gereksinimlere uygunluğunu
                doğrulamak amacıyla yapılır. CE işaretleme sisteminin uygulanma
                maliyeti, şirketin büyüklüğüne ve üretim hacmine bağlıdır.
                <br />
                <br />
                Avrupa’da, kereste sınıflandırma prosedürlerini ve mekanik
                özelliklerin belirlenmesini düzenleyen bir dizi standart vardır.
                Tüm ulusal derecelendirme standartları bu Avrupa yönergelerini
                karşılamalıdır. Bu amaçla, EN 14081-1, ulusal görsel mukavemet
                sınıfları standartları için asgari gereklilikleri belirler. EN
                408, mekanik özellikleri belirlemek için test yöntemlerini
                tanımlar; EN 338, ortak dayanım sınıfı sistemini belirler; ve EN
                1912, türlerin ve görsel sınıfların ulusal standartlardan
                dayanım sınıflarına atanmasını içerir.
                <br />
                <br />
                Yapısal kerestenin CE işaretlemesi, EN 14081-1 standardına göre
                gerçekleştirilir. Bu standart, dikdörtgen kesitli kerestenin
                görsel ve makine ile dayanım sınıflandırması için genel
                gereklilikleri belirler. Görsel dayanım sınıflandırması,
                kerestenin görünür özelliklerine (budak, eğim, vb.) dayanarak
                sınıflandırılmasını sağlar. Ancak, Avrupa’daki görsel
                sınıflandırma ulusal standartları, yapı kerestesinin türüne,
                coğrafi kökenine, boyutsal gereksinimlere, kullanım alanlarına,
                malzeme kalitesine, tarihsel etkilere ve geleneklere bağlı
                olarak farklılık gösterebilir. Bu nedenle, Avrupa Birliği’ne üye
                tüm ülkeler için uygun tek bir standart belirlemek mümkün
                değildir. EN 14081-1, bu durum karşısında ulusal standartların
                gereksinimlerini belirlerken uyulması gereken bazı temel
                ilkeleri sunar ve EN 1912 standardı, çeşitli ulusal
                standartların EN 14081-1 gerekliliklerine uygun olup olmadığını
                değerlendirir. EN 1912, kerestenin türü, coğrafi kökeni ve
                ulusal sınıflandırma standartları gibi faktörlere dayanarak,
                hangi ulusal standardın uygulanacağına karar verir.
                <br />
                <br />
                Örneğin, Fransa’dan elde edilen karaçam kerestesi, Fransız
                standardı NF B 52-001 ile sınıflandırılırken, Almanya’dan gelen
                kayın kerestesi DIN 4074-1 standardına göre sınıflandırılır.
                <br />
                <br />
                Ulusal standartlarca görsel olarak tasnif edilen ahşapların
                sınıfları belirlendikten sonra, EN 1912 standardı, ulusal sınıf
                ile EN 338 standardında yer alan harmonize dayanım sınıfı
                arasındaki ilişkiyi bulmayı sağlar.
                <br />
                <br />
                EN 338 standardı, hem yumuşak hem de sert ağaç yapısal
                keresteleri için dayanım sınıflarını belirler. EN 338, her bir
                dayanım sınıfı için karakteristik direnç, rijitlik ve yoğunluk
                değerlerini raporlar. Bu değerler, bir kereste popülasyonunun
                belirli bir dayanım sınıfına atanabilmesi için gerekli olan
                minimum özellikleri içerir. Ayrıca, EN 338, kereste
                popülasyonunun bir dayanım sınıfına atanabilmesi için eğilme
                dayanımı ve yoğunluk gibi özelliklerin belirlenmesi gerektiğini
                belirtir.
                <br />
                <br />
                Örneğin, Polonya’da yapısal kerestenin görsel olarak dayanım
                sınıflandırması genellikle ulusal PN-82/D-94021 standardına göre
                yapılır. Ancak bu standardın Avrupa standartlarıyla uyumlu hale
                getirilmesi süreci 2013 yılında tamamlanmıştır. Polonya’daki
                birçok yapısal kereste üreticisi, CE işaretleme sürecini
                tamamlamış ve ürünlerini Avrupa pazarında serbestçe satabilme
                yetkisine sahiptir. Bununla birlikte, makine ile dayanım
                sınıflandırması Polonya’da henüz yaygınlaşmamış olsa da, bu
                alanda kullanılan teknolojiler giderek gelişmektedir.
                <br />
                <br />
                Türkiye’de iğne yapraklı ağaç türlerinin yapısal sınıflandırması
                için TS 1265 (2012) standardı kullanılmaktadır. Bu standart, Çam
                ( Pinus ), Göknar ( Abies ), Ladin ( Picea ) Sedir ( Cedrus )
                türlerinden elde edilen ve emniyet gerilmeleri TS 647’de
                verilmiş olan iğne yapraklı yapı kerestelerinin tarifini,
                sınıflandırma ve özelliklerini, muayene ve deneylerini, piyasaya
                arz şekli ile denetleme esaslarını kapsar.
                <br />
                <br />
                <img src={Tablo} alt="" className="mx-auto w-3/4 h-auto" />
                <img src={Tahta} alt="" className="mx-auto w-3/4 h-auto" />
                <br />
                <br />
                Asli iğne yapraklı ağaç türlerimizden elde edilen yapı
                kerestelerinin ulusal standardımız TS 1265’e göre görsel kalite
                sınıfları belirlenmiş, belirlenen bu görsel sınıfların ahşap
                yapıların tasarımına esas teşkil eden direnç sınıflarına
                dönüştürülmüş ve farklı ağaç türleri için bu şekilde belirlenen
                görsel kalite sınıfları ve direnç sınıfı karşılıklarının ülkemiz
                adıyla bütün Avrupa’da geçerli olan TS EN 1912 standardında yer
                almasının sağlanmış, sonuç olarak, ulusal standardımız TS 1265’e
                göre yerli yapı kerestelerinde yapılan bir görsel kalite
                sınıflandırmasının TS EN 338’de yer alan ve ahşap yapıların
                tasarımına esas teşkil eden mukavemet sınıfı karşılığı
                belirlenmiştir.
                <br />
                <br />
                Böylece yerli iğne yapraklı ağaç türlerimizden elde edilen yerli
                iğne yapraklı yapı kerestelerinin TS EN 1995-1-1 (Eurocode 5):
                Ahşap Yapıların Projelendirilmesi Bölüm 1-1: Genel kurallar ve
                Bina Kuralları standardına göre ahşap yapılarda taşıyıcı eleman
                olarak kullanılabilmesi için gerekli teknik altyapı
                sağlanmıştır.
                <br />
                <br />
                <strong>
                  Bu çalışmalar sonucunda Asli Yerli İbreli Ağaçların Avrupa
                  Standart Komitesi (CEN) onaylı mukavemet referans değerleri şu
                  şekildedir:{" "}
                </strong>
                <br />
                <br />
                <img src={Tablo2} alt="" className="mx-auto w-1/2 h-auto" />
                <a
                  href="https://drive.google.com/drive/folders/16M0yfXSrgjFl34xKKT8T1o27J3r0Xdtj?usp=sharing"
                  className="text-blue-500 flex justify-center items-center "
                >
                  Resmi Doküman için Tıklayınız.
                </a>
                <br />
                <br />
                Sınıflandırma sürecini hızlandırmak ve etkinliğini artırmak
                amacıyla, bazı ülkelerde yaygın olarak kullanılan bir makine
                sınıflandırması uygulanmaktadır. Makineli sınıflandırmada, her
                numune tahribatsız yöntemler kullanılarak mekanik olarak
                değerlendirilir. “Gösterge özellikleri” (IP), kerestenin bir
                veya daha fazla fiziksel-mekanik özelliğinin tahribatsız bir
                cihazla ölçülmesiyle belirlenir. Makine derecelendirmesi ile
                elde edilen IP, görsel derecelendirmeyle elde edilenlere kıyasla
                ahşap kalitesi hakkında daha doğru sonuçlar verir. Makine ile
                sınıflandırma işleminin çok daha hızlı olması, olası insan
                hatalarının en aza indirilmesi ve daha yüksek bir mukavemet
                sınıfı elde etme potansiyeli makine ile sınıflandırmayı ön plana
                çıkarmaktadır. Makine sınıflandırılması, genel gereklilikleri
                belirleyen EN 14081 Bölüm 1’e ve sırasıyla ilk tip testi,
                fabrika üretim kontrolü ve makine kontrollü sistemler için
                derecelendirme ayarları için ek gereklilikleri ortaya koyan
                Bölüm 2, 3 ve 4’e göre yapılmalıdır.
                <br />
                <br />
                Ayrıca, makineli mukavemet derecelendirmesi görsel mukavemet
                derecelendirmesi ile karşılaştırıldığında, makineli mukavemet
                derecelendirmesinin verimliliğinin çok daha yüksek olduğu
                görülmektedir. Bu nedenle, makineli mukavemet
                derecelendirmesinin görsel mukavemet derecelendirmesine göre
                daha avantajlı olduğu düşünülmektedir. Avrupa’da birçok firma bu
                konuda çalışmakta ve yeni makineler geliştirmektedir. Türkiye’de
                de bu amaçla kullanılabilecek cihazların üretilmesi için
                çalışmalar devam etmektedir.
                <br />
                <br />
                Sonuç olarak, yapısal kereste üretiminde CE işaretlemesi, yapı
                malzemelerinin performansını garanti altına alarak hem iç hem de
                dış pazarlarda rekabet gücünü artırmakta, aynı zamanda inşaat
                malzemelerinin güvenliği ve kalitesini sağlamaktadır. EN
                14081-1, EN 1912 ve EN 338 gibi standartlar, yapı sektöründe
                kaliteyi yükseltirken, çevreye duyarlı ve sürdürülebilir yapı
                uygulamalarını teşvik eder. Bu standartlar, Avrupa’daki yapı
                ürünleri için ortak bir kalite dili oluşturur ve ulusal
                farklılıkların giderilmesine yardımcı olur. Türkiye de bu sürece
                uyum sağlamak amacıyla yerli yapı keresteleri için ulusal
                standartlar geliştirmiş ve bu standartlar, Avrupa Birliği’nin
                harmonize kurallarına entegre edilmiştir. Gelecekte, makine ile
                dayanım sınıflandırması gibi daha gelişmiş yöntemlerin
                yaygınlaşmasıyla birlikte, yapı sektöründe kalite ve güvenlik
                standartlarının daha da yükselmesi beklenmektedir. Türkiye’nin
                bu alandaki teknolojik gelişmeleri takip etmesi ve gerekli
                altyapıyı oluşturması, yapı malzemeleri sektöründe uzun vadeli
                başarı ve sürdürülebilirliği sağlayacaktır.
                <br />
                <br />
                <strong>Yararlanılan Kaynaklar: </strong>
                <br />
                <br />
                <li>
                  Negro, F., Cremonini, C., & Zanuttini, R. (2013). CE marking
                  of structural timber: the European standardization framework
                  and its effects on Italian manufacturers. Drvna industrija,
                  64(1), 55-62.
                </li>
                <br />
                <li>
                  Sikora, K. S., & Krzosek, S. Ł. A. W. O. M. I. R. (2014).
                  Timber grading within the European Union-Irish and Polish
                  example. Annals of Warsaw University of Life Sciences-SGGW.
                  Forestry and Wood Technology, 86.
                </li>
                <br />
                <li>
                  Almazán, F. A., Prieto, E. H., Martitegui, F. A., & Richter,
                  C. (2008). Comparison of the Spanish visual strength grading
                  standard for structural sawn timber (UNE 56544) with the
                  German one (DIN 4074) for Scots pine (Pinus sylvestris L.)
                  from Germany. Holz Roh Werkst, 66(4), 253-258.
                </li>
                <br />
                <li>
                  Kurul, F., & As, N. (2024). Visual and Machine Strength
                  Gradings of Scots and Red Pine Structural Timber Pieces from
                  Türkiye. BioResources, 19(3).
                </li>
                <br />
                <li>
                  Tarım ve Orman Bakanlığı Orman Genel Müdürlüğü (2023, 23
                  Ekim). Yerli iğne yapraklı ağaç türlerimizden karaçam, göknar,
                  sarıçam, kızılçam, sedir ve ladin ağaç türlerimize
                  uluslararası standart alınması.
                  https://www.ogm.gov.tr/marmaraarastirma/haberler/yerli-igne-yaprakli-agac-turlerimizden-karacam-goknar-saricam-kizilcam-sedir-ve-ladin-agac-turlerimize-uluslararasi-standart-alinmasi-38
                </li>
                <br />
                <br />
                <strong className="text-blue-500 text-2xl">
                  Avrupa Standartlarına Göre Yapısal Kereste Sınıflandırması ve
                  CE İşareti{" "}
                </strong>
                <br />
                <br />
                <a href="http://www.nbccert.com/wp-content/dokumanlar/ahsap/Avrupa%20Standartlarına%20Göre%20Yapısal%20Kereste%20Sınıflandırması%20ve%20CE%20İşareti_02.09.2024_FG.pdf">
                  <PictureAsPdfIcon className="text-red-500"style={{ fontSize: "2rem" }}  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AhsapUrunBelgelendirme;