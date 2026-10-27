import React, { useState } from 'react';
import { CONTACT, WHATSAPP_DISPLAY, WHATSAPP_PHONE, WHATSAPP_URL } from '../lib/site';

const steps = [
  {
    label: 'Primer paso',
    text: 'Una conversación para entender el contexto, el desafío y lo que la organización necesita lograr.',
  },
  {
    label: 'Después',
    text: 'Te envío una propuesta con el formato sugerido, los objetivos, la duración y la inversión.',
  },
  {
    label: 'Modalidad',
    text: 'Presencial en CABA, GBA e interior del país, o virtual.',
  },
  {
    label: 'Con quiénes',
    text: 'Equipos directivos, mandos medios, equipos de operaciones y áreas en proceso de cambio.',
  },
];

const contactDetails = [
  {
    label: 'WhatsApp',
    value: WHATSAPP_DISPLAY,
    href: WHATSAPP_URL,
  },
  {
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    label: 'Instagram',
    value: CONTACT.instagramHandle,
    href: CONTACT.instagramUrl,
  },
  {
    label: 'Ubicación',
    value: `${CONTACT.location} · ${CONTACT.locationDetail}`,
  },
];

const fieldClass = 'w-full rounded-xl border border-crema-dark bg-papel px-4 py-3 text-base text-tinta placeholder:text-tinta-soft/70';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = [
      'Hola! Me contacto desde el sitio web.',
      '',
      `Nombre: ${formData.name}`,
      `Email: ${formData.email}`,
      `Teléfono: ${formData.phone}`,
      `Mensaje: ${formData.message}`,
    ].join('\n');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <>
      <section
        id="contacto"
        aria-labelledby="contacto-titulo"
        className="section-padding bg-bosque-darker text-crema"
      >
        <div className="container-custom grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Cómo empezamos</p>
            <h2 id="contacto-titulo" className="mt-4 font-heading text-crema">De la primera charla al diseño</h2>
            <ul className="mt-10 divide-y divide-crema/15">
              {steps.map((step) => (
                <li key={step.label} className="grid gap-2 py-5 sm:grid-cols-[10.5rem_1fr] sm:items-baseline sm:gap-6">
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-terracota">{step.label}</p>
                  <p className="leading-relaxed text-crema">{step.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-[28px] bg-crema p-6 text-tinta shadow-soft sm:p-8">
              <h3 className="font-heading text-2xl font-medium text-tinta md:text-3xl">Contanos qué está pasando en tu equipo</h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-tinta">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-tinta">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-tinta">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-tinta">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`${fieldClass} resize-none`}
                    placeholder="Contame en qué puedo ayudarte..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje por WhatsApp'}
                </button>
                <p className="text-center text-sm text-tinta-soft">
                  Al enviar, se abrirá WhatsApp con tu mensaje prellenado
                </p>
              </form>
            </div>

            <ul className="mt-8 divide-y divide-crema/15">
              {contactDetails.map((item) => (
                <li key={item.label} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:items-baseline sm:gap-4">
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-terracota">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="break-all text-crema underline-offset-4 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-crema">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="cierre-titulo" className="section-padding bg-gradient-radial from-naranja via-terracota to-terracota-dark text-center text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/90">
              Coaching de equipos · Workshops · Intervenciones a medida
            </p>
            <h2 id="cierre-titulo" className="mt-4 font-heading text-white">¿Qué necesita mover tu organización?</h2>
            <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
              Empecemos por una conversación para entender el desafío.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-crema mt-8"
            >
              Contanos tu desafío
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
