# 🔍 Guía Paso a Paso: Google Search Console

## 📌 Introducción

Esta guía te ayudará a configurar Google Search Console para que tu sitio aparezca en los resultados de búsqueda de Google.

**Tiempo estimado:** 30 minutos  
**Nivel de dificultad:** Principiante  
**Requisitos:** Cuenta de Google, acceso al sitio en Vercel

---

## 🎯 Paso 1: Crear Cuenta en Google Search Console

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Inicia sesión con tu cuenta de Google (usa la cuenta profesional)
3. Haz clic en **"Agregar propiedad"** o **"Add property"**

---

## 🌐 Paso 2: Agregar tu Propiedad

### Opción A: Prefijo de URL (Recomendado para este sitio)

1. Selecciona **"Prefijo de URL"** (URL prefix)
2. Ingresa: `https://coachingderaiz.vercel.app`
3. Haz clic en **"Continuar"**

### ¿Por qué Prefijo de URL?
- Más fácil de verificar
- Ideal para sitios single-page
- No requiere acceso a DNS

---

## ✅ Paso 3: Verificar la Propiedad

Google te mostrará varios métodos de verificación. **Usa el método de Etiqueta HTML** (es el más simple):

### Método: Etiqueta HTML

1. Google te dará un código como este:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXX" />
   ```

2. **Copia ese código completo**

3. **Agregar el código al sitio:**
   
   a) Abre el archivo `index.html` del proyecto
   
   b) Busca esta línea (está después de los otros meta tags):
   ```html
   <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
   ```
   
   c) **Pega tu código de verificación justo debajo**, quedando así:
   ```html
   <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
   <meta name="google-site-verification" content="TU-CODIGO-AQUI" />
   <meta name="language" content="Spanish" />
   ```

4. **Guardar cambios y hacer deploy:**
   
   ```bash
   # Desde la terminal en la carpeta del proyecto:
   git add index.html
   git commit -m "Add Google Search Console verification"
   git push
   ```
   
   **O si usas Vercel directamente:**
   - Simplemente guarda el archivo
   - Vercel detectará el cambio y hará deploy automático
   - Espera 2-3 minutos

5. **Verificar en Google:**
   - Vuelve a Google Search Console
   - Haz clic en **"Verificar"**
   - Si todo está bien, verás: ✅ **"Propiedad verificada"**

---

## 📄 Paso 4: Enviar el Sitemap

Una vez verificada la propiedad:

1. En el menú lateral izquierdo, busca **"Sitemaps"**
2. Haz clic en **"Sitemaps"**
3. En el campo "Agregar un nuevo sitemap", escribe:
   ```
   sitemap.xml
   ```
4. Haz clic en **"Enviar"**

### ¿Qué esperar?
- Estado: **"Éxito"** (puede tardar unos minutos)
- Google procesará las 10 URLs de tu sitio
- En 1-7 días verás estadísticas de indexación

---

## 🔎 Paso 5: Solicitar Indexación Manual (Opcional pero Recomendado)

Para acelerar el proceso de aparecer en Google:

1. En el menú lateral, busca **"Inspección de URLs"** (o la barra de búsqueda arriba)
2. Ingresa tu URL principal: `https://coachingderaiz.vercel.app`
3. Espera a que Google analice (30 segundos aprox)
4. Si dice "La URL no está en Google", haz clic en **"Solicitar indexación"**
5. Espera (puede tardar 1-2 minutos)
6. Verás: ✅ **"Se solicitó la indexación"**

### Repite para URLs importantes:
- `https://coachingderaiz.vercel.app/#servicios`
- `https://coachingderaiz.vercel.app/#sobre-mi`
- `https://coachingderaiz.vercel.app/#contacto`

---

## 📊 Paso 6: Configurar Google Analytics 4 (Opcional)

Para saber cuántas personas visitan tu sitio:

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una propiedad nueva:
   - Nombre: **Coaching de Raíz**
   - URL: `https://coachingderaiz.vercel.app`
   - Categoría: **Business Services**
   - Zona horaria: **Argentina**

3. Google te dará un código como:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

4. **Agregar a index.html:**
   
   a) Abre `index.html`
   
   b) Pega el código **justo antes de `</head>`**:
   ```html
   <!-- Google Analytics 4 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   
   <title>Coaching de Raíz - Lucía Vallejo | Coach Ontológica Empresarial</title>
   </head>
   ```

5. Guarda, commitea y haz push
6. En 24-48 horas empezarás a ver datos en Google Analytics

---

## 🎯 Paso 7: Configurar Bing Webmaster Tools (Bonus)

Bing es el segundo buscador más usado (después de Google):

1. Ve a [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Inicia sesión con tu cuenta Microsoft/Gmail
3. Opción rápida: **"Importar desde Google Search Console"**
   - Autoriza la conexión
   - Bing importará toda la configuración
4. ¡Listo! Tu sitio también estará optimizado para Bing

---

## 📈 Paso 8: Monitorear Resultados

### Primeros 7 días:
- Google empezará a indexar tu sitio
- Aparecerás en búsquedas de tu marca: "Coaching de Raíz", "Lucía Vallejo Coach"

### Primeros 30 días:
- Empezarás a aparecer en búsquedas relacionadas
- Verás tráfico orgánico en Google Analytics
- Google Search Console mostrará impresiones y clics

### Primeros 90 días:
- Posicionamiento consolidado
- Aparición en búsquedas locales
- Leads orgánicos desde Google

---

## 🔔 Configurar Alertas (Recomendado)

1. En Google Search Console, ve a **"Configuración"** (Settings)
2. Activa notificaciones por email para:
   - Problemas de indexación
   - Problemas de seguridad
   - Mejoras de rendimiento

---

## ⚠️ Solución de Problemas Comunes

### Problema: "No se pudo verificar la propiedad"
**Solución:**
- Verifica que el meta tag esté exactamente como Google lo dio
- Asegúrate de que el deploy en Vercel esté completo
- Limpia la caché del navegador (Ctrl + Shift + R)
- Espera 10 minutos y vuelve a intentar

### Problema: "El sitemap no se pudo leer"
**Solución:**
- Verifica que `sitemap.xml` esté en la carpeta `public/`
- Prueba acceder directamente: `https://coachingderaiz.vercel.app/sitemap.xml`
- Si no se ve, verifica que Vercel lo esté sirviendo
- Vuelve a hacer deploy

### Problema: "La URL no está indexada"
**Solución:**
- Es normal al principio
- Solicita indexación manual
- Espera 1-7 días
- Asegúrate de que `robots.txt` no esté bloqueando Google

---

## 📝 Checklist Final

Marca cada ítem cuando lo completes:

- [ ] Crear cuenta en Google Search Console
- [ ] Agregar propiedad (Prefijo de URL)
- [ ] Copiar código de verificación
- [ ] Agregar meta tag a index.html
- [ ] Hacer commit y push a Vercel
- [ ] Verificar propiedad en Google
- [ ] Enviar sitemap.xml
- [ ] Solicitar indexación de página principal
- [ ] Solicitar indexación de páginas clave
- [ ] (Opcional) Configurar Google Analytics 4
- [ ] (Opcional) Configurar Bing Webmaster Tools
- [ ] Configurar alertas por email
- [ ] Agregar link del sitio en Instagram bio
- [ ] Actualizar LinkedIn con URL del sitio

---

## 🎉 ¡Felicitaciones!

Tu sitio ahora está optimizado para aparecer en Google. En los próximos días empezarás a ver resultados.

### Próximos pasos recomendados:
1. **Crear contenido de blog** (alto impacto SEO)
2. **Compartir en redes sociales** regularmente
3. **Conseguir backlinks** de sitios de calidad
4. **Actualizar contenido** mensualmente
5. **Monitorear Google Analytics** semanalmente

---

## 📚 Recursos Adicionales

- [Documentación oficial de Google Search Console](https://support.google.com/webmasters)
- [Guía de SEO para principiantes de Google](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Centro de ayuda de Schema.org](https://schema.org/docs/gs.html)

---

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas o preguntas:
1. Revisa la [Guía completa de SEO](./SEO-GUIDE.md)
2. Consulta la [documentación de Google Search Console](https://support.google.com/webmasters)
3. Contacta al desarrollador: Pablo Proboste

---

**Última actualización:** 28 de Noviembre 2025  
**Documento:** Guía Google Search Console v1.0
