import React from 'react';
import Button from './Button';

const ServiceCard = ({ title, description, price, featured, ctaText = "Agendá una sesión gratis para conocer más" }) => {
  const whatsappLink = "https://wa.me/message/VPS3R5LKA4QNJ1";
  
  return (
    <div className={`card ${featured ? 'ring-4 ring-accent-lime shadow-2xl' : ''} relative`}>
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-lime text-white px-4 py-1 rounded-full text-sm font-bold">
          ¡GRATIS!
        </div>
      )}
      
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      
      {price && (
        <p className="text-2xl font-bold text-secondary mb-4">
          {price === "GRATIS" ? (
            <span className="text-accent-lime">{price}</span>
          ) : (
            price
          )}
        </p>
      )}
      
      <Button 
        variant={featured ? "primary" : "secondary"}
        href={whatsappLink}
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default ServiceCard;
