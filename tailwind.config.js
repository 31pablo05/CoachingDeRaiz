/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        // ============================================================
        // Sistema de diseño "Coaching de Raíz" (landing nueva)
        // Todos los tokens apuntan a las variables CSS definidas en
        // src/styles/global.css (:root) para poder usar opacidad
        // (ej. bg-terracota/20) en cualquier lado del proyecto.
        // ============================================================
        bosque: {
          DEFAULT: 'rgb(var(--color-bosque) / <alpha-value>)', // #3E5B52
          dark: 'rgb(var(--color-bosque-dark) / <alpha-value>)', // #2C433C
          darker: 'rgb(var(--color-bosque-darker) / <alpha-value>)', // #1F312B
        },
        terracota: {
          DEFAULT: 'rgb(var(--color-terracota) / <alpha-value>)', // #C1662E
          dark: 'rgb(var(--color-terracota-dark) / <alpha-value>)', // #A6521F
          light: 'rgb(var(--color-terracota-light) / <alpha-value>)', // tinte claro para overlays sutiles
        },
        naranja: 'rgb(var(--color-naranja) / <alpha-value>)', // #E2672C
        crema: {
          DEFAULT: 'rgb(var(--color-crema) / <alpha-value>)', // #F4EFE3
          dark: 'rgb(var(--color-crema-dark) / <alpha-value>)', // #EAE1CC
        },
        papel: 'rgb(var(--color-papel) / <alpha-value>)', // #FBF8F1
        celeste: 'rgb(var(--color-celeste) / <alpha-value>)', // #DFF4FB
        tinta: {
          DEFAULT: 'rgb(var(--color-tinta) / <alpha-value>)', // #26302C
          soft: 'rgb(var(--color-tinta-soft) / <alpha-value>)', // #5C6660
        },

        // ------------------------------------------------------------
        // Alias de compatibilidad: tokens "viejos" (primary, secondary,
        // accent, neutral) reapuntados a la paleta nueva para que todo
        // el sitio adopte los colores sin tener que tocar cada
        // componente en este paso. Se van a ir reemplazando por los
        // tokens de arriba (bosque, terracota, crema, papel, tinta...)
        // en los próximos prompts, componente por componente.
        // ------------------------------------------------------------
        primary: {
          DEFAULT: 'rgb(var(--color-bosque) / <alpha-value>)',
          dark: 'rgb(var(--color-bosque-dark) / <alpha-value>)',
          deeper: 'rgb(var(--color-bosque-darker) / <alpha-value>)',
        },
        secondary: {
          light: 'rgb(var(--color-terracota-light) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-terracota) / <alpha-value>)',
          medium: 'rgb(var(--color-terracota) / <alpha-value>)',
          green: 'rgb(var(--color-terracota-dark) / <alpha-value>)',
          text: 'rgb(var(--color-tinta-soft) / <alpha-value>)',
        },
        accent: {
          lime: 'rgb(var(--color-naranja) / <alpha-value>)',
        },
        neutral: {
          cream: 'rgb(var(--color-papel) / <alpha-value>)',
          beige: 'rgb(var(--color-crema) / <alpha-value>)',
          yellow: 'rgb(var(--color-crema) / <alpha-value>)',
          gray: 'rgb(var(--color-tinta-soft) / <alpha-value>)',
          greenGray: 'rgb(var(--color-bosque) / <alpha-value>)',
        },
      },
      fontFamily: {
        // Títulos: Fraunces (serif). Texto, botones y navegación: Poppins.
        heading: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Tamaños fluidos para títulos grandes
        display: ['clamp(2.75rem, 1.9rem + 3.4vw, 4.75rem)', { lineHeight: '1.04' }], // 44px -> 76px (hero)
        h1: ['clamp(2.5rem, 1.6rem + 3.5vw, 4rem)', { lineHeight: '1.08' }], // 40px -> 64px
        h2: ['clamp(1.875rem, 1.5rem + 1.6vw, 2.75rem)', { lineHeight: '1.15' }], // 30px -> 44px
      },
      borderRadius: {
        card: '22px',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgb(var(--color-tinta) / 0.14)',
        'soft-lg': '0 16px 40px -14px rgb(var(--color-tinta) / 0.18)',
        terracota: '0 12px 24px -8px rgb(var(--color-terracota) / 0.45)',
      },
      maxWidth: {
        container: '1180px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
