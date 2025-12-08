import React from 'react';
import Button from './Button';

const ServiceCard = ({ 
  title, 
  description, 
  price, 
  featured, 
  ctaText = "Agendá una sesión gratis para conocer más", 
  icon, 
  image,
  results,
  methodology,
  approach
}) => {
  const calendlyLink = "https://calendly.com/yaninaluciavallejo/sesion-gratuita-para-conocernos";
  
  return (
    <div className={`group relative h-full bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border ${
      featured 
        ? 'border-[#7a9477] ring-4 ring-[#7a9477]/30' 
        : 'border-[#5a7458]/10 hover:border-[#7a9477]'
    }`}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-[#7a9477] to-[#5a7458] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 animate-pulse-slow">
            <span className="text-lg">{icon}</span>
            ¡SESIÓN GRATIS!
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className={`p-3 md:p-4 pt-4`}>
        {/* Image Thumbnail - show for service cards */}
        {image && !price && (
          <div className="text-center mb-3">
            <div className="relative inline-block w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300 border-2 border-[#5a7458]/20">
              <img 
                src={image}
                alt={`${title} - Servicio de coaching`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Icon - show for cards without image or with price (session cards) */}
        {(!image || price) && icon && (
          <div className="text-center mb-2">
            <div className="inline-block bg-gradient-to-br from-[#5a7458]/10 to-[#7a9477]/10 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-2xl md:text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
              {icon}
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-[#5a7458] mb-1.5 text-center group-hover:text-[#7a9477] transition-colors duration-300">
          {title}
        </h3>

        {/* Decorative line */}
        <div className="w-10 h-0.5 bg-gradient-to-r from-[#5a7458] to-[#7a9477] mx-auto mb-2.5 rounded-full transform group-hover:w-16 transition-all duration-500"></div>

        {/* Description */}
        {description && (
          <p className="text-gray-700 mb-2.5 leading-snug text-center text-xs md:text-sm">
            {description}
          </p>
        )}

        {/* Results Section */}
        {results && results.length > 0 && (
          <div className="mb-2.5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-base md:text-lg">📊</span>
              <h4 className="font-bold text-[#5a7458] text-sm md:text-base">Resultados Esperados</h4>
            </div>
            <ul className="space-y-1 ml-1">
              {results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#7a9477] mt-0.5 text-xs">•</span>
                  <span className="text-gray-700 leading-tight text-xs md:text-sm">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Approach Section (for Transformación Organizacional) */}
        {approach && approach.length > 0 && (
          <div className="mb-2.5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-base md:text-lg">🎯</span>
              <h4 className="font-bold text-[#5a7458] text-sm md:text-base">Enfoque</h4>
            </div>
            <ul className="space-y-1 ml-1">
              {approach.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#7a9477] mt-0.5 text-xs">•</span>
                  <span className="text-gray-700 leading-tight text-xs md:text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Methodology Section */}
        {methodology && (
          <div className="mb-2.5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-base md:text-lg">🔧</span>
              <h4 className="font-bold text-[#5a7458] text-sm md:text-base">Metodología</h4>
            </div>
            <div className="bg-gradient-to-r from-[#5a7458]/5 to-[#7a9477]/5 rounded-lg p-2 md:p-2.5 border-l-3 border-[#7a9477]">
              <p className="text-gray-700 leading-tight text-xs md:text-sm">{methodology}</p>
            </div>
          </div>
        )}
        
        {/* Price - only for session cards */}
        {price && (
          <div className="text-center mb-2.5">
            <div className={`inline-block px-4 py-1.5 rounded-lg ${
              price === "GRATIS" 
                ? 'bg-gradient-to-r from-[#7a9477] to-[#5a7458] text-white shadow-lg' 
                : 'bg-gradient-to-r from-[#5a7458]/10 to-[#7a9477]/10 text-[#5a7458]'
            }`}>
              <p className="text-xl md:text-2xl font-bold">
                {price}
              </p>
              {price !== "GRATIS" && (
                <p className="text-[10px] opacity-80">por sesión</p>
              )}
            </div>
          </div>
        )}
        
        {/* CTA Button */}
        <Button 
          variant={featured ? "primary" : "secondary"}
          href={calendlyLink}
          className="w-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xs md:text-sm py-2"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
            </svg>
            {ctaText}
          </span>
        </Button>
      </div>

      {/* Decorative corner element */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#7a9477]/10 to-transparent rounded-tl-full transform translate-x-12 translate-y-12 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500"></div>
    </div>
  );
};

export default ServiceCard;
