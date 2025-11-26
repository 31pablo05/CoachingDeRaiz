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
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5491136677321&text=${message}`;
    
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
      content: '+54 9 11 3667-7321',
      link: 'https://api.whatsapp.com/send?phone=5491136677321',
      linkText: 'Enviar mensaje',
    },
    {
      icon: '📧',
      title: 'Email',
      content: 'luciavallejo@coachingderaiz.com',
      link: 'mailto:luciavallejo@coachingderaiz.com',
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
      link: 'https://www.instagram.com/coachingderaiz/',
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
        <div className="text-center mb-8 sm:mb-10 md:mb-12 fade-in-section">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Contacto
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-secondary to-accent-lime mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            ¿Tenés alguna consulta? ¿Querés agendar una sesión? Escribime y conversemos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="fade-in-section">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                Dejame tu mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors text-sm sm:text-base"
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
                  className="w-full text-sm sm:text-base"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje por WhatsApp'}
                </Button>

                <p className="text-xs sm:text-sm text-gray-600 text-center">
                  Al enviar, se abrirá WhatsApp con tu mensaje prellenado
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="fade-in-section space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-primary to-primary-deeper rounded-2xl shadow-xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Otras formas de contacto
              </h3>
              <div className="space-y-4 sm:space-y-6">
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
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-accent-lime">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎁</div>
                <h4 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                  Sesión gratuita de 15 minutos
                </h4>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                  ¿Querés saber si el coaching es para vos? Agendá una charla sin compromiso.
                </p>
                <Button 
                  variant="primary" 
                  href="https://api.whatsapp.com/send?phone=5491136677321&text=Hola! Me gustaría agendar una sesión gratuita de 15 minutos"
                  className="w-full group text-sm sm:text-base"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Agendar ahora
                  </span>
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
