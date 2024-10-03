import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Yönlendirme için
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Separator from "./Separator"; // Ayırıcı
import woodSvg from "../assets/images/wood-svg.svg";
import engineerSvg from "../assets/images/engineer.svg";

const Nbcard = ({ title, description, icon, path }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [iconHovered, setIconHovered] = useState(false);
  const navigate = useNavigate(); // Navigasyon hook'u

  const handleClick = () => {
    navigate(path); // Belirlenen rotaya git
  };

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out aspect-square w-full h-full flex flex-col justify-center items-center ${
        isHovered ? "animate-balloon" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center flex-grow">
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full">
            {icon == "WoodSvg" ? (
              <img className="h-1/2" src={woodSvg} />
            ) : icon == "EngineerSvg" ? (
              <img className="h-1/2" src={engineerSvg} />
            ) : (
              <FontAwesomeIcon icon={icon} className="text-white text-2xl" />
            )}
          </div>
        </div>
        <h3 className="text-xl font-semibold py-6">{title}</h3>
        <Separator />
        <p className="mt-8 text-sm text-center">{description}</p>{" "}
        {/* Dinamik açıklama */}
      </div>
      <button
        className="mt-6 px-10 py-2  text-black rounded transition-colors flex items-center justify-center"
        onClick={handleClick} // Butona tıklanınca yönlendir
      >
        <span
          onMouseEnter={() => setIconHovered(true)}
          onMouseLeave={() => setIconHovered(false)}
          className="flex items-center"
        >
          Bilgi
          {iconHovered ? (
            <ArrowRightAltIcon className="text-blue-600 ml-2" /> // Mavi renk
          ) : (
            <ChevronRightIcon className="text-blue-600 ml-2" /> // Mavi renk
          )}
        </span>
      </button>
    </div>
  );
};

export default Nbcard;
