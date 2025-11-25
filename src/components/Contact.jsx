import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const message = `Hola! Me contacto desde el sitio web.%0A%0ANombre: ${formData.name}%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone}%0AMensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/message/VPS3R5LKA4QNJ1?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: '📱',
      title: 'WhatsApp',
      content: 'Charlemos por WhatsApp',
      link: 'https://wa.me/message/VPS3R5LKA4QNJ1',
      linkText: 'Enviar mensaje',
    },
    {
      icon: '📧',
      title: 'Email',
      content: 'coachingderaiz@ejemplo.com',
      link: 'mailto:coachingderaiz@ejemplo.com',
      linkText: 'Enviar email',
    },
    {
      icon: '📍',
      title: 'Ubicación',
      content: 'CABA y zona norte',
      subtitle: 'Buenos Aires, Argentina',
    },
    {
      icon: '📸',
      title: 'Instagram',
      content: '@coachingderaiz',
      link: 'https://instagram.com/coachingderaiz',
      linkText: 'Seguir',
    },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-neutral-beige via-neutral-cream to-neutral-yellow"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent-lime mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            ¿Tenés alguna consulta? ¿Querés agendar una sesión? Escribime y conversemos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in-section">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Dejame tu mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors resize-none"
                    placeholder="Contame en qué puedo ayudarte..."
                  ></textarea>
                </div>

                <Button 
                  variant="primary" 
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje por WhatsApp'}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  Al enviar, se abrirá WhatsApp con tu mensaje prellenado
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="fade-in-section space-y-6">
            <div className="bg-gradient-to-br from-primary to-primary-deeper rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Otras formas de contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-4xl">{info.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                      <p className="text-white/90 mb-1">{info.content}</p>
                      {info.subtitle && (
                        <p className="text-white/70 text-sm">{info.subtitle}</p>
                      )}
                      {info.link && (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-accent-lime hover:text-white font-semibold transition-colors"
                        >
                          {info.linkText} →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-accent-lime">
              <div className="text-center">
                <div className="text-5xl mb-4">🎁</div>
                <h4 className="text-2xl font-bold text-primary mb-3">
                  Sesión gratuita de 15 minutos
                </h4>
                <p className="text-gray-700 mb-6">
                  ¿Querés saber si el coaching es para vos? Agendá una charla sin compromiso.
                </p>
                <Button 
                  variant="primary" 
                  href="https://wa.me/message/VPS3R5LKA4QNJ1"
                  className="w-full"
                >
                  Agendar ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
