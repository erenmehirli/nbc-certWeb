import React, { useState } from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Arama terimini tutmak için state

  const sections = [
    {
      title: "Prosedürler",
      files: [
        { 
          name: "Şikayet ve İtiraz Prosedürü",
          link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/P08sikayetitiraz.pdf" 
        },
      ],
    },
    {
      title: "Talimatlar",
      files: [
        { name: "Logo Kullanım Talimatı" ,
          link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/t05_logokullanimi.pdf" 
        },
        { name: "Belgelendirme Hizmetleri Ücretlendirme Talimatı",
          link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/T08_belgeucretlendirme.pdf" 
        },
        { name: "Belgelendirme Hizmetleri Ücretlendirme Talimatı" ,
          link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/T08_belgeucretlendirme.pdf" 
        },
        { name: "Sera Gazı Hizmetleri Ücretlendirme Talimatı",
          link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/T12seragazihizmetleriucretlendirmetalimati.pdf" 
         },
      ],
    },
    {
      title: "Formlar",
      description: "Çağrı Merkezi" ,
      files: [
        { name: "Başvuru Formu - Çağrı Merkezi Müşteri Temsilcisi", 
  link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/F70basvuruformucagrimerkezi.pdf"
         },
        { name: "Başvuru Formu - Çağrı Merkezi Takım Lideri",
  link: ""
         },
      ],
    },
    {

      description: "Sera Gazı" ,
       files: [
        { name: "Sera Gazı Baş Doğrulayıcı Eğitim Başvuru Formu", 
          link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/f150seragazibasvuru.pdf"
         },
        { name: "Sera Gazı Doğrulayıcı Sınav Başvuru Formu" ,
     link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/f149serabasvuru.pdf"
        },
        { name: "Sera Gazı Doğrulayıcı Eğitim Başvuru Formu" ,
     link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/F148_serabasvuru.pdf"
        },
      ],
    },
    {
     
      description: "Kimyasal Değerlendirme Uzmanı" ,
      files: [
        { name: "Kimyasal Değerlendirme Uzmanı Eğitim Başvuru Formu",
 link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/f05_kdubasvuru.pdf"
         },
        { name: "Kimyasal Değerlendirme Uzmanı Sınav Başvuru Formu",
 link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/kdu_basvuruformu.pdf"
         },
        { name: "Belge Kullanım Sözleşmesi" ,
 link: "https://nbccert.com.tr/wp-content/dokumanlar/belgekullanimsozlesmesi2024.pdf"
        },
      ],
    },
    {

      description: "Ahşap Ürün Belgelendirme" ,
      files: [
        { name: "Yapı Malzemeleri Yönetmeliği" ,
           link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/yapi_malzemeleri_yonetmeligi.pdf"
        },
        { name: "PEFC CoC Ürün Belgelendirme Programı",
link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/CP-PFC-002-PEFC-CoC-urun-Belgelendirme-Programi-Rev.00_06.01.2023.pdf"
         },
        { name: "Yapısal Ahşap Ürünleri Başvuru Formu" ,
 link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/F-PC-02a-Yapisal-Ahsap-urunleri-Basvuru-Formu-Rev.00_06.01.2023.pdf"
        },
        { name: "Yapısal Ahşap Ürünleri Belgelendirme Sözleşmesi" ,
          link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/F-PC-01a-Yapisal-Ahsap-urunleri-Belgelendirme-Sozlesmesi-Rev.00_06.01.2023.pdf"
       },
       { name: "FSC CoC Belgelendirme Sözleşmesi" ,
        link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/F-PC-01c-FSC-CoC-Belgelendirme-Sozlesmesi-Rev.00_06.01.2023.pdf"
     },
     { name: "Yapısal Ahşap Ürünleri Başvuru Formu" ,
      link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/F-PC-02a-Yapisal-Ahsap-urunleri-Basvuru-Formu-Rev.00_06.01.2023.pdf"
   },
   { name: "PEFC CoC Başvuru Formu" ,
    link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/F-PC-02b-PEFC-CoC-Basvuru-Formu-Rev.00_06.01.2023.pdf"
 },
 { name: "FSC CoC Başvuru Formu" ,
  link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/F-PC-02c-FSC-CoC-Basvuru-Formu-Rev.00_06.01.2023.pdf"
},
{ name: "Öneri Şikayet ve İtiraz Formu" ,
  link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/F10a-oneri-sikayet-ve-itiraz-Formu-Rev.00_06.01.2023.pdf"
},
{ name: "Gizlilik Politikası" ,
  link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/F12e-Gizlilik-Politikas%C4%B1-Rev.00_06.01.2023.pdf"
},
{ name: "Fiyat Listesi" ,
  link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/L-PC-002-Fiyat-Listesi-Rev.00_06.01.2023.pdf"
},
{ name: "Uygunluk Değerlendirme Prosedürü" ,
  link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/P-PC-01-Uygunluk-Degerlendirme-Proseduru-Rev.00_06.01.2023.pdf"
},
{ name: "İtiraz Şikayet ve Anlaşmazlıklar Prosedürü" ,
  link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/P10-itiraz-sikayet-ve-Anlasmazliklar-Proseduru-Rev.00_06.01.2023.pdf"
},
{ name: "Yapı Malzemeleri Yönetmeliği - Ürün Belgelendirme Programı" ,
  link: ""
},
{ name: "Üst Yönetim Gizlilik, Tarafsızlık ve Bağımsızlık Taahhüdü" ,
  link: "https://nbccert.com.tr/wp-content/dokumanlar/ahsap/ustyonetimgizlilik_tarafsizlik_ve_bagimsizlik_taahhutnamesi.pdf"
},
      ],
    },
    {
 
      description: "Diğer" ,
      files: [
        { name: "Kalite Politikamız",
          link: "https://nbccert.com.tr/wp-content/dokumanlar/F8akalitepoitikasi.pdf"
         },
        { name: "Taahhütname",
          link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/f65taahhutname.pdf"
         },
         { name: "Personel Belgelendirme Süreç Akış Şeması",
          link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/f07personelbelgelendirme.pdf"
         },
        { name: "Yönetim Taahhüdü",
          link: "https://nbccert.com.tr/wp-content/dokumanlar/F40_Yonetim_Taahhudu_MANAGEMENTS_COMMITMENT_rev01_13.04.2022.pdf"
         },
         { name: "Belge Kullanım Sözleşmesi",
          link: "https://nbccert.com.tr/wp-content/dokumanlar/belge_kullanim_sozlesmesi_24.pdf"
         },
        { name: "Öneri Şikayet Ve İtiraz Formu",
          link: "https://nbccert.com.tr/wp-content/dokumanlar/2024/f16onerisikayet.pdf"
         },
         { name: "Kalite Politikası",
          link: "https://nbccert.com.tr/wp-content/dokumanlar/f08kalitepolitikasi.pdf"
         },
      ],
    },
    {
    
      description: "Belgelendirme Programı" ,
      files: [
        { name: "GREENHOUSE GASES VERIFIER CERTIFICATION PROGRAM" ,
          link: "https://nbccert.com.tr/wp-content/dokumanlar/belgelendirmeprogrami/GREENHOUSEGASESVERIFIERCERTIFICATIONPROGRAMrev0512.06.2024ing.pdf"
         },
        { name: "SERA GAZI DOĞRULAYICI SERTİFİKA PROGRAMI" ,
          link: "https://nbccert.com.tr/wp-content/dokumanlar/belgelendirmeprogrami/SERAGAZIDOGRULAYICISERTIFIKAPROGRAMIrev0512.06.2024tr.pdf"
        },
        { name: "GREENHOUSE GASES LEADING VERIFICATION CERTIFICATE PROGRAM" ,
          link: "https://nbccert.com.tr/wp-content/dokumanlar/belgelendirmeprogrami/GREENHOUSEGASESLEADINGVERIFICATIONCERTIFICATEPROGRAMrev0512.06.2022ing.pdf"
         },
        { name: "SERA GAZLARI LİDER DOĞRULAYICI SERTİFİKA PROGRAMI" ,
          link: "https://nbccert.com.tr/wp-content/dokumanlar/belgelendirmeprogrami/SERAGAZLARILDERDOGRULAYICISERTIFIKAPROGRAMIrev0512.06.04.2024tr.pdf"
        },
      ],
    },
  ];



  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Arama terimini güncelle
  };

  // Kelimeyi vurgulamak için fonksiyon
  const highlightMatch = (text, term) => {
    if (!term) return text; // Eğer arama terimi yoksa, normal text döndür
    const regex = new RegExp(`(${term})`, 'gi'); // Arama terimiyle eşleşen kısmı bulmak için regex
    const parts = text.split(regex); // Metni bölelim

    return (
      <>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <span key={index} className="text-orange-400">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 mt-8">Belgeler</h1>

      {/* Arama Inputu */}
      <div className="flex w-full mx-7 lg:max-w-[500px] rounded-full border-gray-400 border-opacity-65 border bg-gray-100 px-2">
        <input
          type="text"
          className="flex w-full bg-transparent px-3 text-gray-700 rtl:text-right outline-0"
          placeholder="Belge ara"
          value={searchTerm}
          onChange={handleSearchChange} // Arama değişikliği kontrolü
        />
        <div className="border-gray-400 border-opacity-70 my-1 border-l"></div>
        <button type="submit" className="relative rounded-full bg-transparent px-2 py-3">
          <svg className="fill-none size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#999"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Dosya Listesi */}
      {sections.map((section, index) => (
        <div key={index} className="w-full mb-8">
          <h2 className="text-2xl text-black font-semibold mb-4 text-center lg:text-left">{section.title}</h2>

          <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-black text-lg font-semibold mb-4">{section.description}</p>

            <ul className="space-y-2">
              {section.files.map((file, fileIndex) => (
                <li key={fileIndex} className="flex items-center text-red-700 gap-4">
                  <PictureAsPdfIcon />
                  <a
                    href={file.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Eşleşen kelimelerin rengini mavi yap */}
                    {highlightMatch(file.name, searchTerm)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Documents;
