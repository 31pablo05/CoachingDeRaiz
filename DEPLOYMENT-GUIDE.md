# 🚀 INSTRUCCIONES DE DEPLOYMENT - Vercel

## 📋 Pre-requisitos

Antes de hacer el deploy, asegúrate de que:

- [x] Todos los archivos están guardados
- [x] No hay errores en el código
- [x] Las optimizaciones SEO están implementadas
- [x] Los archivos sitemap.xml y robots.txt están en /public

---

## 🌐 Método 1: Deploy Automático desde GitHub (Recomendado)

### Paso 1: Commitear Cambios

```bash
# Ver archivos modificados
git status

# Agregar todos los cambios
git add .

# Commitear con mensaje descriptivo
git commit -m "SEO Optimization Complete - Add meta tags, Schema.org, sitemap, and semantic structure"

# Push a GitHub
git push origin main
```

### Paso 2: Vercel Detecta Cambios Automáticamente

Si ya tienes el sitio conectado a Vercel:
- ✅ Vercel detectará el push automáticamente
- ✅ Iniciará el build en ~2 minutos
- ✅ El sitio se actualizará automáticamente

### Paso 3: Verificar Deployment

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Busca tu proyecto "CoachingDeRaiz"
3. Verás el nuevo deployment en progreso
4. Cuando termine, verás: ✅ **"Ready"**
5. Haz clic en "Visit" para ver el sitio actualizado

---

## 🔄 Método 2: Deploy Manual desde CLI

Si prefieres hacerlo desde la terminal:

```bash
# Instalar Vercel CLI (si no lo tienes)
npm install -g vercel

# Login en Vercel
vercel login

# Deploy a producción
vercel --prod

# Sigue las instrucciones en pantalla
```

---

## ✅ Verificación Post-Deployment

Después de que el deploy esté completo, verifica que todo funcione:

### 1. Verificar Sitio Principal
```
https://coachingderaiz.vercel.app/
```
- [ ] El sitio carga correctamente
- [ ] No hay errores en consola (F12)
- [ ] Las animaciones funcionan
- [ ] El diseño se ve bien

### 2. Verificar Sitemap
```
https://coachingderaiz.vercel.app/sitemap.xml
```
- [ ] El sitemap se ve correctamente
- [ ] Muestra todas las URLs
- [ ] Formato XML válido

### 3. Verificar Robots.txt
```
https://coachingderaiz.vercel.app/robots.txt
```
- [ ] El robots.txt se muestra
- [ ] Contiene la referencia al sitemap

### 4. Verificar Meta Tags

1. Haz clic derecho en el sitio
2. Selecciona "Ver código fuente" o "View Source"
3. Busca (Ctrl+F):
   - [ ] `<meta name="description"` - Debe tener ~160 caracteres
   - [ ] `<meta property="og:title"` - Para Facebook/LinkedIn
   - [ ] `<script type="application/ld+json">` - Schema.org
   - [ ] `<link rel="canonical"` - URL canónica

### 5. Verificar Imágenes

Navega por el sitio y verifica:
- [ ] La foto de Lucía carga correctamente
- [ ] Las imágenes de servicios funcionan
- [ ] El carrusel de presentaciones funciona
- [ ] El zoom/modal de imágenes funciona

### 6. Verificar Formularios y Botones

- [ ] Botón WhatsApp flotante funciona
- [ ] Formulario de contacto envía a WhatsApp
- [ ] Todos los CTAs redirigen correctamente
- [ ] Links de Instagram y LinkedIn funcionan

### 7. Verificar Responsive

Prueba el sitio en diferentes dispositivos:
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)

**Tip:** Usa las DevTools de Chrome (F12 → Toggle Device Toolbar)

---

## 🔍 Herramientas de Validación Online

### Validar SEO y Performance

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Ingresa: `https://coachingderaiz.vercel.app`
   - Objetivo: Score > 90 en mobile y desktop

2. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Ingresa: `https://coachingderaiz.vercel.app`
   - Verifica que los schemas JSON-LD sean válidos

3. **XML Sitemap Validator**
   - URL: https://www.xml-sitemaps.com/validate-xml-sitemap.html
   - Ingresa: `https://coachingderaiz.vercel.app/sitemap.xml`
   - Debe mostrar: ✅ "Valid sitemap"

4. **SEO Site Checkup**
   - URL: https://seositecheckup.com/
   - Ingresa: `https://coachingderaiz.vercel.app`
   - Objetivo: Score > 80/100

5. **Meta Tags Checker**
   - URL: https://metatags.io/
   - Ingresa: `https://coachingderaiz.vercel.app`
   - Verifica cómo se ve al compartir en redes sociales

---

## 🐛 Solución de Problemas Comunes

### Problema: "sitemap.xml no se encuentra"

**Causa:** El archivo no está en /public o Vercel no lo está sirviendo

**Solución:**
```bash
# Verifica que el archivo esté en la ubicación correcta
ls -la public/

# Debe mostrar:
# public/sitemap.xml
# public/robots.txt

# Si no está, muévelo:
mv sitemap.xml public/sitemap.xml

# Commit y push de nuevo
git add public/sitemap.xml
git commit -m "Fix sitemap location"
git push
```

### Problema: "Las meta tags no aparecen"

**Causa:** Cache del navegador o CDN

**Solución:**
```bash
# Limpia cache del navegador
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)

# O usa modo incógnito:
Ctrl + Shift + N (Chrome)
Ctrl + Shift + P (Firefox)
```

### Problema: "Las imágenes no cargan"

**Causa:** Rutas incorrectas o archivos faltantes

**Solución:**
```bash
# Verifica que las imágenes estén en /public
ls -la public/imagenes/
ls -la public/logos/

# Las rutas en el código deben ser:
# /imagenes/lucia3.png (correcto)
# ./imagenes/lucia3.png (incorrecto)
# ../imagenes/lucia3.png (incorrecto)
```

### Problema: "Error 404 en rutas"

**Causa:** Configuración de Vercel para SPA (Single Page Application)

**Solución:**
Vercel debería detectar automáticamente que es una SPA de React. Si no:

Crea un archivo `vercel.json` en la raíz:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 📊 Monitoreo Post-Deployment

### Primeras 24 horas
- [ ] Verificar que el sitio esté accesible
- [ ] Probar todos los links y botones
- [ ] Revisar Google Search Console (si ya está verificado)

### Primera semana
- [ ] Verificar en Google Search Console el estado de indexación
- [ ] Revisar Google Analytics (si está configurado)
- [ ] Compartir en redes sociales

### Primer mes
- [ ] Monitorear tráfico orgánico
- [ ] Revisar keywords que están generando tráfico
- [ ] Analizar comportamiento de usuarios

---

## 🎯 Siguiente Paso: Google Search Console

Una vez que el deployment esté verificado y funcionando:

1. **Ir a Google Search Console**
   - URL: https://search.google.com/search-console
   - Seguir la guía: [GOOGLE-SEARCH-CONSOLE-GUIDE.md](./GOOGLE-SEARCH-CONSOLE-GUIDE.md)

2. **Verificar la propiedad**
   - Agregar meta tag de verificación
   - Hacer commit y push
   - Verificar en Google

3. **Enviar sitemap**
   - En Google Search Console → Sitemaps
   - Agregar: `sitemap.xml`
   - Submit

---

## 📝 Checklist Final de Deployment

Marca cada ítem:

### Pre-Deployment
- [x] Código sin errores
- [x] Optimizaciones SEO implementadas
- [x] Sitemap y robots.txt en /public
- [x] Imágenes optimizadas
- [x] Meta tags completos

### Deployment
- [ ] Git commit realizado
- [ ] Push a GitHub exitoso
- [ ] Build de Vercel completado
- [ ] Sitio accesible en producción

### Post-Deployment
- [ ] Sitio principal funciona
- [ ] Sitemap accesible
- [ ] Robots.txt accesible
- [ ] Meta tags visibles en código fuente
- [ ] Imágenes cargan correctamente
- [ ] WhatsApp y formularios funcionan
- [ ] Responsive en mobile/tablet/desktop

### Validación
- [ ] Google PageSpeed Insights (score > 90)
- [ ] Google Rich Results Test (schemas válidos)
- [ ] XML Sitemap Validator (válido)
- [ ] SEO Site Checkup (score > 80)
- [ ] Meta Tags preview correcto

### Google Search Console
- [ ] Propiedad verificada
- [ ] Sitemap enviado
- [ ] Indexación solicitada
- [ ] Alertas configuradas

---

## 🎉 ¡Deployment Completo!

Si todos los checks están marcados, el sitio está listo y optimizado.

**Próximos pasos:**
1. Configurar Google Analytics
2. Crear contenido de blog
3. Compartir en redes sociales
4. Monitorear resultados

---

## 📞 Contacto y Soporte

**Desarrollador:** Pablo Proboste  
**Cliente:** Lucía Vallejo - Coaching de Raíz  
**Sitio:** https://coachingderaiz.vercel.app/

---

**Fecha:** 28 de Noviembre 2025  
**Versión:** 2.0 (SEO Optimized)
