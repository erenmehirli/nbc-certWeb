import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import cagrımerkezi from "../assets/images/cagrımerkezi.jpg";
const CagrıMerkz = () => {
  return (
    <div>
      {/* Fotoğraf */}
      <div className="relative">
        <img
          src={cagrımerkezi}
          alt="Turk Reach"
          className="w-full h-96 object-cover bg-cover rounded-lg shadow-lg"
        />
        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black bg-opacity-70 p-4 rounded-lg">
          <h1 className="text-2xl font-bold">
            Çağrı Merkezi Takım Lideri Sınav ve Belgelendirme
          </h1>
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
              <span>Çağrı Merkezi Takım Lideri Sınav ve Belgelendirme</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10 max-w-screen-md">
        <div className="text-center mt-10">
          <h3 className="text-md text-blue-600 font-bold mb-4">
            NBC Uygunluk Değerlendirme Eğitim Ltd. Şti.
          </h3>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed font-bold">
            Kuruluşumuz TS EN ISO 17024 standartına göre akredite edilmiş,
            Mesleki yeterlilik kurumu (MYK) tarafından da incelenmiştir.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Kuruluşumuz{" "}
            <a
              href="https://www.turkak.org.tr/duyurular/en-isoiec-170242012-standard-revizyonu-gecisi.html"
              className="text-blue-500"
            >
              TS EN ISO 17024
            </a>{" "}
            standartına göre akredite edilmiş, Mesleki yeterlilik kurumu (MYK)
            tarafından da incelenmiş ve{" "}
            <a
              href="https://portal.myk.gov.tr/index.php?dl=Yeterlilik%2F2632%2FSON_TASLAK_PDF_20191104_150942.pdf&fileName=15UY0203-4+Rev+01+%C3%87a%C4%9Fr%C4%B1+Merkezi+M%C3%BC%C5%9Fteri+Temsilcisi&option=com_yeterlilik"
              className="text-blue-500"
            >
              TS EN ISO 17024
            </a>{" "}
            <i className="font-bold">Çağrı merkezi müşteri temsilcisi</i>,
            <a
              href="https://portal.myk.gov.tr/index.php?dl=Yeterlilik%2F2633%2FSON_TASLAK_PDF_20191105_085718.pdf&fileName=15UY0204-5+Rev+01+%C3%87a%C4%9Fr%C4%B1+Merkezi+Tak%C4%B1m+Lideri&option=com_yeterlilik"
              className="text-blue-500"
            >
              TS EN ISO 17024
            </a>{" "}
            <i className="font-bold">Çağrı merkezi müşteri temsilcisi</i> ulusal
            yeterlilik yetki kapsamında sınav ve belgelendirme faaliyetlerini
            yürüten <i className="underline">personel belgelendirme</i>{" "}
            kuruluşudur.
          </p>
        </div>
        <div className="font-bold text-center mt-10">
          <a
            href="https://docs.google.com/document/d/1KM-sYwTfk1ey1BXeqXlWoiIUOIOi2sqr/edit?usp=sharing&ouid=101754999746367937909&rtpof=true&sd=true"
            target="_blank"
          >
            <PictureAsPdfIcon />
            ÇAĞRI MERKEZİ TAKIM LİDERİ
          </a>

          <p className="font-normal">Sınav Başvuru Formu</p>
        </div>
        <div className="text-center mt-10">
          <h3 className="text-xl text-blue-600 font-bold mb-4">
            15UY0203-5 ÇAĞRI MERKEZİ TAKIM LİDERİ ULUSAL YETERLİLİĞİ
          </h3>

          <p className="text-base text-gray-600 leading-relaxed">
            <i className="font-bold">
              15UY0203-5 ÇAĞRI MERKEZİ TAKIM LİDERİ ULUSAL YETERLİLİĞİ
            </i>{" "}
            Çağrı Merkezi Takım Liderlerinin sahip olması gereken bilgi, beceri
            ve yetkinlikleri tanımlamak, mesleki yeterliliklerini geçerli ve
            güvenilir bir belge ile kanıtlamalarına imkân sağlamak, eğitim
            sistemi ile sınav ve belgelendirme kuruluşlarına kaynak ve referans
            oluşturmak ve adaylara mesleğe ilişkin rehberlik sağlamak amacıyla{" "}
            <a
              href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiuvpadi62CAxXPRfEDHV8vAdsQFnoECA8QAQ&url=https%3A%2F%2Fportal.myk.gov.tr%2Findex.php%3Fdl%3DYeterlilik%252F2633%252FSON_TASLAK_PDF_20191105_085718.pdf%26fileName%3D15UY0204-5%2BRev%2B01%2B%25C3%2587a%25C4%259Fr%25C4%25B1%2BMerkezi%2BTak%25C4%25B1m%2BLideri%26option%3Dcom_yeterlilik&usg=AOvVaw0LUxnooq_wP7DVpXuhvmJC&opi=89978449"
              className="text-blue-500"
            >
              mesleki yeterlilik kurumu
            </a>{" "}
            tarafından hazırlanmıştır.
          </p>
          <p>
            <i className="font-bold text-base">mesleki yeterlilik kurumu</i>{" "}
            Mesleki Yeterlilik Belgesini elde etmek isteyen adaylar birimlerde
            tanımlanan teorik ve performansa dayalı sınavlara tabi tutulur.
            Adayların mesleki yeterlilik belgesini alabilmeleri için birimlerde
            tanımlanan sınavlardan başarılı olmaları gerekmektedir.
          </p>
          <p>
            Yeterlilik birimlerindeki teorik ve performansa dayalı sınavlar, her
            bir birim için ayrı ayrı yapılabileceği gibi birlikte de
            yapılabilir. Ancak her birimin değerlendirmesi bağımsız
            yapılmalıdır.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl text-blue-600 font-bold mb-4">
            15UY0203-5 ÇAĞRI MERKEZİ TAKIM LİDERİ ULUSAL YETERLİLİĞİ
          </h3>

          <p className="text-base text-gray-600 leading-relaxed">
            Sınavlar ve belgelendirme, NBC tarafından bağımsız bir inceleme
            sürecinden geçer.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CagrıMerkz;
