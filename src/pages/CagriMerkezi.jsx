import { div } from 'framer-motion/client';
import React from 'react'
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const CagriMerkezi = () => {
  return (
    <div className="text-lg leading-relaxed space-y-4 mb-12">
      <div
        id="featured-title"
        className="relative bg-cover bg-center min-h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://nbccert.com.tr/wp-content/uploads/2023/11/seragazi_baslik2.jpg")',
        }}
      >
        <div className="container mx-auto py-16 h-full flex items-center justify-center">
          <div className="inner-wrap text-center text-blue-950">
            {/* Başlık */}
            <div className="title-group">
              <h1 className="main-title text-3xl font-bold">
                Çağrı Merkezi Müşteri Temsilcisi Sınav ve Belgelendirme
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
                  <span>
                    Çağrı Merkezi Müşteri Temsilcisi Sınav ve Belgelendirme
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="text-blue-500 text-2xl text-center">
        NBC Uygunluk Değerlendirme Eğitim Ltd. Şti.,
      </div>
      <div className="text-center">
        <br />
        <strong className="text-2xl">
          Kuruluşumuz TS EN ISO 17024 standartına göre akredite edilmiş, Mesleki{" "}
          <br />
          yeterlilik kurumu (MYK) tarafından da incelenmiştir.
        </strong>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <p className="text-sm text-gray-700 leading-relaxed">
          Kuruluşumuz{" "}
          <a
            href="https://www.turkak.org.tr/duyurular/en-isoiec-170242012-standard-revizyonu-gecisi.html"
            className="text-blue-600 hover:underline font-medium"
          >
            TS EN ISO 17024{" "}
          </a>
          Mesleki Yeterlilik Kurumu (MYK) tarafından da incelenmiş ve{" "}
          <a
            className="text-blue-500 hover:underline font-medium "
            href="https://portal.myk.gov.tr/index.php?dl=Yeterlilik%2F2632%2FSON_TASLAK_PDF_20191104_150942.pdf&amp;fileName=15UY0203-4+Rev+01+%C3%87a%C4%9Fr%C4%B1+Merkezi+M%C3%BC%C5%9Fteri+Temsilcisi&amp;option=com_yeterlilik"
          >
            15UY0203-4 rev01{" "}
          </a>
          Çağrı Merkezi Müşteri Temsilcisi ,
          <a
            className="text-blue-500 hover:underline font-medium "
            href="https://portal.myk.gov.tr/index.php?dl=Yeterlilik%2F2633%2FSON_TASLAK_PDF_20191105_085718.pdf&amp;fileName=15UY0204-5+Rev+01+%C3%87a%C4%9Fr%C4%B1+Merkezi+Tak%C4%B1m+Lideri&amp;option=com_yeterlilik"
          >
            {" "}
            15UY0204-5 rev01{" "}
          </a>
          Çağrı Merkezi Takım Lideri ulusal yeterlilik yetki kapsamında sınav ve
          belgelendirme faaliyetlerini yürüten personel belgelendirme
          kuruluşudur.
        </p>
      </div>
      <br />
      <br />

      <div className="flex justify-center items-center ">
        <a href="/wp-content/dokumanlar/F70_Basvuru_Formu_Cagri_Merkezi_Musteri_Temsilcisi_rev01_13.04.2022.docx">
          <PictureAsPdfIcon
            className="text-red-500"
            style={{ fontSize: "5rem" }} // İkonu büyütmek için fontSize artırıldı
          />
        </a>
      </div>
      <div className="text-center">
        <p className="text-lg text-gray-800">
          ÇAĞRI MERKEZİ MÜŞTERİ TEMSİLCİSİ
        </p>
        <p className="text-base font-bold">Sınav Başvuru Formu</p>
      </div>
      <br />
      <br />
      <div className="text-center">
        <strong className="text-blue-500 text-3xl">
          {" "}
          15UY0203-4 ÇAĞRI MERKEZİ MÜŞTERİ TEMSİLCİSİ ULUSAL YETERLİLİĞİ
        </strong>
        <br />
        <br />
        <strong>
          15UY0203-4 ÇAĞRI MERKEZİ MÜŞTERİ TEMSİLCİSİ ULUSAL YETERLİLİĞİ
        </strong>
        Çağrı Merkezi Müşteri Temsilcilerinin sahip olması gereken <br /> bilgi,
        beceri ve yetkinlikleri tanımlamak, mesleki yeterliliklerini geçerli ve
        güvenilir bir belge ile kanıtlamalarına imkân sağlamak, eğitim <br />
        sistemi ile sınav ve belgelendirme kuruluşlarına kaynak ve referans
        oluşturmak ve adaylara mesleğe ilişkin rehberlik sağlamak amacıyla{" "}
        <br />
        <a
          className="text-blue-500 "
          href="https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=&amp;cad=rja&amp;uact=8&amp;ved=2ahUKEwjPjd38g62CAxUBQvEDHf0ZAdgQFnoECA8QAQ&amp;url=https%3A%2F%2Fportal.myk.gov.tr%2Findex.php%3Fdl%3DYeterlilik%252F2632%252FSON_TASLAK_PDF_20191104_150942.pdf%26fileName%3D15UY0203-4%2BRev%2B01%2B%25C3%2587a%25C4%259Fr%25C4%25B1%2BMerkezi%2BM%25C3%25BC%25C5%259Fteri%2BTemsilcisi%26option%3Dcom_yeterlilik&amp;usg=AOvVaw2Gcz9WLmklUvNqtcg2swBN&amp;opi=89978449"
        >
          mesleki yeterlilik kurumu{" "}
        </a>
        tarafından hazırlanmıştır.
        <br />
        <br />
        <strong>Çağrı Merkezi Müşteri Temsilcisi (Seviye 4)</strong>
        Mesleki Yeterlilik Belgesini elde etmek isteyen adaylar birimlerde
        tanımlanan teorik ve performansa <br /> dayalı sınavlara tabi tutulur.
        Adayların mesleki yeterlilik belgesini alabilmeleri için birimlerde
        tanımlanan sınavlardan başarılı olmaları gerekmektedir. <br />{" "}
        Yeterlilik birimlerindeki teorik ve performansa dayalı sınavlar, her bir
        birim için ayrı ayrı yapılabileceği gibi birlikte de yapılabilir. <br />{" "}
        Ancak her birimin değerlendirmesi bağımsız yapılmalıdır.
      </div>
      <div>
        <br />
        <br />
        <p className="text-blue-500 text-center ">
          15UY0203-4 ÇAĞRI MERKEZİ MÜŞTERİ TEMSİLCİSİ ULUSAL YETERLİLİĞİ
        </p>
        <p className="text-3xl text-center ">
          Sınavlar ve belgelendirme, NBC tarafından bağımsız bir inceleme
          sürecinden geçer.
        </p>
      </div>
    </div>
  );
}

export default CagriMerkezi