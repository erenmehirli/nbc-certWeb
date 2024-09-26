import React from "react";

// Google Maps Embed URL
const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95592561531854!3d-37.81720997975121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577bda1573c42e2!2sFlinders+St+Station!5e0!3m2!1sen!2sau!4v1532584854870";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Başlık */}
      <br />
      <br />
      <br />
      <h1 className="text-4xl font-bold text-center mb-8">İletişim</h1>

      {/* İletişim Bilgileri */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">İletişim Bilgilerimiz</h2>
          <p>
            <strong>Adres:</strong> 123 Sokak, İstanbul, Türkiye
          </p>
          <p>
            <strong>Telefon:</strong> +90 123 456 7890
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@example.com" className="text-blue-500">
              info@example.com
            </a>
          </p>
          <p>
            <strong>Çalışma Saatleri:</strong> Pazartesi - Cuma, 9:00 - 18:00
          </p>
        </div>

        {/* İletişim Formu */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Bize Ulaşın</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Adınız
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Adınızı girin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                E-posta
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="E-posta adresinizi girin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Mesajınız
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Mesajınızı yazın"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>

      {/* Harita */}
      <div className="w-full h-64">
        <iframe
          title="Location Map"
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Contact;
