import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo ve Sosyal Medya */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">NBC Sertifikasyon</h2>
          <p className="mb-4">
            Yetkin, güvenilir ve tarafsız sertifikasyon hizmetleri sunan lider kurumlardan biriyiz.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i> 
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Hakkımızda */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Hakkımızda</h3>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#">Kurumsal</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Kalite Politikamız</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Yönetim Sistemleri</a>
            </li>
          </ul>
        </div>

        {/* Hizmetlerimiz */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Hizmetlerimiz</h3>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#">Sertifikasyon</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Denetim Hizmetleri</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Eğitimler</a>
            </li>
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">İletişim</h3>
          <p className="mb-2">Adres: NBC Sertifikasyon, İstanbul, Türkiye</p>
          <p className="mb-2">Telefon: +90 123 456 78 90</p>
          <p className="mb-2">E-posta: info@nbccert.com</p>
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
