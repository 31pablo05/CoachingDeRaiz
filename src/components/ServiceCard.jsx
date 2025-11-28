import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const ServiceCard = ({ title, description, price, featured, ctaText = "Agendá una sesión gratis para conocer más", icon, image }) => {
  const whatsappLink = "https://wa.me/message/VPS3R5LKA4QNJ1";
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [isMobileZoomed, setIsMobileZoomed] = useState(false);
  
  return (
    <>
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

      {/* Image Section (if image exists) */}
      {image && (
        <div className="relative aspect-square rounded-t-2xl bg-white overflow-hidden">
          <div 
            className={`w-full h-full transition-transform duration-300 origin-center ${
              isMobileZoomed ? 'scale-[2.5] md:scale-100' : 'scale-100'
            }`}
            onClick={() => {
              if (window.innerWidth < 768) {
                // Mobile: toggle zoom
                setIsMobileZoomed(!isMobileZoomed);
              } else {
                // Desktop: open modal
                setIsImageExpanded(true);
              }
            }}
          >
            <img 
              src={image}
              alt={`${title} - Servicio de coaching ontológico empresarial de Lucía Vallejo`}
              title={title}
              width="600"
              height="600"
              loading="lazy"
              className="w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity duration-300"
            />
          </div>
          {/* Mobile zoom hint */}
          {!isMobileZoomed && (
            <div className="md:hidden absolute bottom-2 right-2 bg-[#5a7458]/90 text-white text-xs px-3 py-1 rounded-full">
              Toca para ampliar
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className={`p-4 ${image ? 'pt-4' : 'pt-10'}`}>
        {/* Icon for cards without image */}
        {!image && icon && (
          <div className="text-center mb-4">
            <div className="inline-block bg-gradient-to-br from-[#5a7458]/10 to-[#7a9477]/10 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
              {icon}
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-bold text-[#5a7458] mb-2 text-center group-hover:text-[#7a9477] transition-colors duration-300">
          {title}
        </h3>

        {/* Decorative line */}
        <div className="w-12 h-1 bg-gradient-to-r from-[#5a7458] to-[#7a9477] mx-auto mb-3 rounded-full transform group-hover:w-20 transition-all duration-500"></div>

        {/* Description - only if exists */}
        {description && (
          <p className="text-gray-700 mb-4 leading-relaxed text-center text-sm">
            {description}
          </p>
        )}
        
        {/* Price */}
        {price && (
          <div className="text-center mb-4">
            <div className={`inline-block px-4 py-2 rounded-xl ${
              price === "GRATIS" 
                ? 'bg-gradient-to-r from-[#7a9477] to-[#5a7458] text-white shadow-lg' 
                : 'bg-gradient-to-r from-[#5a7458]/10 to-[#7a9477]/10 text-[#5a7458]'
            }`}>
              <p className="text-2xl font-bold">
                {price}
              </p>
              {price !== "GRATIS" && (
                <p className="text-xs opacity-80 mt-1">por sesión</p>
              )}
            </div>
          </div>
        )}
        
        {/* CTA Button */}
        <Button 
          variant={featured ? "primary" : "secondary"}
          href={whatsappLink}
          className="w-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm py-2"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/>
            </svg>
            {ctaText}
          </span>
        </Button>
      </div>

      {/* Decorative corner element */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#7a9477]/10 to-transparent rounded-tl-full transform translate-x-12 translate-y-12 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500"></div>
    </div>

    {/* Image Modal Portal - Desktop only, rendered outside card in document body */}
    {isImageExpanded && createPortal(
      <div 
        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-0 animate-fade-in"
        onClick={() => setIsImageExpanded(false)}
      >
        {/* Container with relative positioning for the close button */}
        <div className="relative inline-block max-w-[95vw] max-h-[95vh]">
          {/* Expanded Image */}
          <img 
            src={image}
            alt={`${title} - Vista ampliada del servicio de coaching`}
            title={title}
            width="1200"
            height="1200"
            loading="lazy"
            className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Close button - positioned at actual top-right corner of image */}
          <button
            onClick={() => setIsImageExpanded(false)}
            className="absolute top-2 right-2 bg-[#5a7458] hover:bg-[#7a9477] text-white rounded-full p-3 shadow-2xl transition-all duration-300 hover:scale-110 z-10"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>,
      document.body
    )}
    </>
  );
};

export default ServiceCard;
