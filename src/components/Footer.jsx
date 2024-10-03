import React from 'react';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  const customStyle = {
    backgroundColor: '#030F27', // Arka plan rengi
    color: '#FFFFFF', // Metin rengi
    padding: '16px',
  };
  return (
    <footer  style={customStyle}  className=" text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo ve Sosyal Medya */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">NBC Sertifikasyon</h2>
          <p className="mb-4 text-slate-500">
          Belgelendirme yönetim sistemimizi sürekli geliştirerek, uyguladığımız politikamız ve prosedürlerimizle, tarafsızlık, yeterlilik, sorumluluk, açıklılık, bağımsızlık ve gizlilik ilkelerini benimseyerek, nitelikli personel ile ulusal ve uluslararası standartlara, ulusal yeterliliklere uygun bir şekilde yapılmaktadır.
          </p>
          <div className='flex space-x-3 pt-2'>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <XIcon />
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FacebookIcon />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <LinkedInIcon />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <InstagramIcon />
  </a>
</div>

        </div>

        {/* Hakkımızda */}
        <div className='text-slate-500'>
          <h3 className="text-white text-lg font-semibold mb-4">Hakkımızda</h3>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="/about-us">Kurumsal</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="/about-us">Kalite Politikamız</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="/about-us">Yönetim Sistemleri</a>
            </li>
          </ul>
        </div>

        {/* Hizmetlerimiz */}
        {/* <div className='text-slate-500'>
          <h3 className="text-white text-lg font-semibold mb-4">Hizmetlerimiz</h3>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#">Sertifikasyon</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Denetim Hizmetleri</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="/">Eğitimler</a>
            </li>
          </ul>
        </div> */}

        {/* İletişim */}
        <div className='text-slate-500'>
  <h3 className="text-white text-lg font-semibold mb-4">İletişim</h3>
  <p className="mb-2 border-b border-gray-700 hover:text-white">Adres: Ankara, Türkiye</p>
  <p className="mb-2 border-b border-gray-700 hover:text-white">Telefon: + 90 (312)255-5558</p>
  <p className="mb-2 border-b border-gray-700 hover:text-white">E-posta: info@nbccert.com.tr</p>
</div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-sm">
          © 2024 NBC Sertifikasyon. Tüm hakları saklıdır. | <a href="#" className="hover:text-white">Gizlilik Politikası</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
