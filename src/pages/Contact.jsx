import React from "react";
import akredte from "../assets/images/akredite,.jpg";
import contact from "../assets/images/aboutnbc.png";

const ContactPage = () => {
  const customStyle = {
    backgroundColor: "#030F27", // Arka plan rengi
    color: "#FFFFFF", // Metin rengi
    padding: "16px",
  };

  return (
    <section>
      <div className="relative w-full h-96">
        <img
          className="absolute h-full w-full object-cover object-center"
          src={akredte}
          alt="nature image"
        />
        <div className="absolute inset-0 h-full w-full bg-black/50"></div>
        <div className="relative pt-28 text-center">
          <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">
            Konularında akredite ve onaylı kuruluş olarak sizlere
          </h2>
          <p className="block antialiased font-sans text-3xl font-normal leading-relaxed text-white mb-9 opacity-70">
            en iyi hizmeti vermeyi amaçlıyoruz.
          </p>
        </div>
      </div>
      <div className="-mt-16 mb-8 px-8">
        <div className="container mx-auto">
          <div className="py-12 flex gap-8 justify-center rounded-xl border border-white bg-gray-50 shadow-xl shadow-black/5 saturate-200">
          <div className="my-8 grid gap-8 px-4 justify-items-start">
  <div className="flex items-center gap-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      ></path>
    </svg>
    <p className="block antialiased font-sans text-sm leading-relaxed text-left text-inherit">
      Kardelen Mah. 2051 Cad. Renklievler Sitesi No.1/62 15045 Ada 06370
      <br />
      Batıkent /Yenimahalle/Ankara
    </p>
  </div>
  <div className="flex items-center gap-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      ></path>
    </svg>
    <p className="block antialiased font-sans text-sm leading-relaxed text-left text-inherit">
      +90 (312) 255-5558 <br />
      +90 (552) 807 - 1171 <br />
      +90 (552) 707 - 1171
    </p>
  </div>
  <div className="flex items-center gap-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
    </svg>
    <p className="block antialiased font-sans text-sm leading-relaxed text-left text-inherit">
      <a href="mailto:info@nbccert.com.tr" className="hover:text-blue-500">
        info@nbccert.com.tr
      </a>
      <br />
      <a href="mailto:aylin@nbccert.com.tr" className="hover:text-blue-500">
        aylin@nbccert.com.tr
      </a>
      <br />
      <a href="mailto:meltem@nbccert.com.tr" className="hover:text-blue-500">
        meltem@nbccert.com.tr
      </a>
    </p>
  </div>
</div>

            <div className="py-5">
            <form action="#">
  <div className="mb-4">
    <div className="relative shadow-lg w-full h-11 min-w-[300px]">
      <input
        type="text"
        name="Name"
        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border border-blue-gray-200 rounded-md text-sm px-3 py-3"
        placeholder=" "
      />
      <label className="absolute left-0 top-2 text-blue-gray-400 text-sm transition-all duration-300 transform pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-blue-gray-400 peer-focus:-top-2 peer-focus:text-gray-900">
        Adınız
      </label>
    </div>
  </div>
  <div className="mb-4">
    <div className="relative shadow-lg w-full h-11 min-w-[300px]">
      <input
        type="email"
        name="Email"
        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border border-blue-gray-200 rounded-md text-sm px-3 py-3"
        placeholder=" "
      />
      <label className="absolute left-0 top-2 text-blue-gray-400 text-sm transition-all duration-300 transform pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-blue-gray-400 peer-focus:-top-2 peer-focus:text-gray-900">
        E-posta
      </label>
    </div>
  </div>
  <div className="mb-4 mt-6">
    <textarea
      rows="5"
      name="Message"
      className="shadow-lg peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border border-blue-gray-200 rounded-md text-sm px-3 py-3 min-w-[300px]"
      placeholder=" "
    ></textarea>
  </div>
  <button
    style={customStyle}
    type="submit"
    className="text-center w-full text-white focus:outline-none focus:ring-2 focus:ring-opacity-50 font-medium rounded-lg text-sm px-5 py-3"
  >
    Gönder
  </button>
</form>

            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-96 overflow-hidden">
        <img src={contact} alt="" />
      </div>

      <div className="w-full h-96 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.618189620236!2d32.7029023!3d39.9722884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d337f1a1a3dae9%3A0xb6e8df1f022415df!2zTkJDIFVZR1V1TlVLSERFIEdJTk5FUkxFTkTEsFJNRSBFxJ7EsFTEsE0gTFRELsWeVMSw!5e0!3m2!1str!2str!4v1727512652434!5m2!1str!2str"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
