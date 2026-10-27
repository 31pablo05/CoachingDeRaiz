import React from 'react';
import { WHATSAPP_PHONE } from '../lib/site';

const stats = [
  { value: '+10 años', label: 'Liderando proyectos en industria y energía' },
  { value: '4 formatos', label: 'De una experiencia puntual a una intervención completa' },
  { value: 'De planta a dirección', label: 'Equipos operativos, mandos medios y equipos directivos' },
  { value: 'A medida', label: 'Cada proceso se diseña sobre el desafío real' },
];

const cards = [
  {
    question: '¿Qué significa liderar hoy?',
    topics: ['Delegación', 'Decisiones', 'Conversaciones', 'Estilos de liderazgo'],
  },
  {
    question: '¿Qué conversación estamos evitando?',
    topics: ['Conversaciones difíciles', 'Feedback', 'Conflictos', 'Confianza'],
  },
  {
    question: '¿Cómo estamos coordinando?',
    topics: ['Pedidos', 'Compromisos', 'Roles', 'Acuerdos', 'Responsabilidades'],
  },
  {
    question: '¿Dónde estamos poniendo nuestra energía?',
    topics: ['Prioridades', 'Foco', 'Urgencias', 'Límites', 'Efectividad'],
  },
  {
    question: '¿Qué equipo queremos construir?',
    topics: ['Identidad', 'Propósito', 'Vínculos', 'Acuerdos culturales'],
  },
];

const closingCard = {
  title: 'No siempre hace falta un taller. Primero hace falta entender qué está pasando.',
  text: 'Por eso todo empieza con una conversación para escuchar el contexto, antes de proponer cualquier formato.',
};

const coachingIndividual = {
  title: 'Coaching individual',
  text: 'Un espacio para detenerte, mirar hacia adentro y explorar lo que hoy te está haciendo ruido o querés transformar.',
  message: 'Hola Lucía, quiero consultar por coaching individual.',
};

const coachingIndividualUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(coachingIndividual.message)}`;

const ServiciosContenido = () => (
  <div>
    <ul className="grid grid-cols-2 bg-crema lg:grid-cols-4">
      {stats.map((item) => (
        <li
          key={item.value}
          className="border-crema-dark px-5 py-10 text-center max-lg:border-b max-lg:odd:border-r max-lg:[&:nth-child(n+3)]:border-b-0 lg:border-r lg:px-8 lg:last:border-r-0"
        >
          <p className="font-heading text-3xl font-semibold leading-tight text-bosque-darker md:text-4xl">
            {item.value}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-tinta-soft">{item.label}</p>
        </li>
      ))}
    </ul>

    <div className="section-padding bg-papel">
      <div className="container-custom">
        <header className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">El punto de partida</p>
          <h2 className="mt-4 font-heading">¿Qué está necesitando hoy tu equipo?</h2>
          <p className="mt-5 text-base leading-relaxed text-tinta-soft md:text-lg">
            A veces una organización sabe que algo tiene que cambiar, pero no sabe exactamente qué hacer. El equipo funciona, pero hay temas que se repiten y nadie termina de nombrar.
          </p>
          <p className="mt-4 text-base font-medium leading-relaxed text-tinta">
            Coaching ejecutivo, coaching de equipos y transformación organizacional, diseñados a medida.
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {cards.map((card) => (
            <li key={card.question} className="rounded-card border border-crema-dark bg-white p-6 shadow-soft md:p-7">
              <span className="mb-5 block h-1 w-10 rounded-full bg-terracota" aria-hidden="true" />
              <h3 className="font-heading text-2xl font-medium leading-snug text-tinta">{card.question}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {card.topics.map((topic) => (
                  <li key={topic} className="chip">
                    {topic}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="flex flex-col justify-center rounded-card bg-bosque-darker p-6 text-crema md:p-8">
            <h3 className="font-heading text-2xl font-medium leading-snug">{closingCard.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-crema/75">{closingCard.text}</p>
          </li>
        </ul>

        <article className="mt-12 flex flex-col gap-6 rounded-card bg-crema p-6 md:mt-16 md:flex-row md:items-center md:justify-between md:gap-10 md:p-10">
          <div className="max-w-2xl">
            <h3 className="font-heading text-3xl font-semibold text-tinta">{coachingIndividual.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-tinta-soft">{coachingIndividual.text}</p>
          </div>
          <a
            href={coachingIndividualUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center rounded-full border-2 border-bosque px-6 py-3 font-semibold text-bosque transition-all duration-300 hover:-translate-y-0.5 hover:bg-bosque hover:text-white md:w-auto"
          >
            Consultar
            <span className="sr-only">, se abre en WhatsApp</span>
          </a>
        </article>
      </div>
    </div>
  </div>
);

export default ServiciosContenido;
