# Próximos pasos con Vercel: Analytics, SEO y actualizaciones

> **Nota:** El sitio en producción está en **Vercel**, no en Netlify.  
> URL actual: **https://mediterraneo-real-estate.vercel.app/**

El proyecto está conectado a GitHub; cada `git push` a `main` actualiza Vercel automáticamente.

---

## 1. URL del sitio en el proyecto

La URL de Vercel ya está en canonical, Open Graph, `sitemap.xml`, `robots.txt` y JSON-LD.

Si más adelante añades un **dominio propio** en Vercel, sustituye en todo el proyecto:

**Buscar:** `https://mediterraneo-real-estate.vercel.app`  
**Reemplazar por:** tu dominio final (ej. `https://www.tudominio.com`)

Archivos: todos los `.html`, `sitemap.xml`, `robots.txt`.

---

## 2. Google Analytics (GA4)

1. [analytics.google.com](https://analytics.google.com) → **Admin** → tu propiedad.
2. **Flujos de datos** → edita el flujo web y pon la URL de Vercel.
3. El ID `G-HPLTVZCX7P` ya está en los HTML; no hace falta cambiarlo si es el mismo.

### Ver el rendimiento
- **Tiempo real**: visitas al instante.
- **Participación** → **Páginas y pantallas**: páginas más vistas.
- **Participación** → **Eventos**: clics en CTAs y formularios.

---

## 3. Google Search Console (SEO)

1. [search.google.com/search-console](https://search.google.com/search-console) → **Añadir propiedad**.
2. URL: `https://mediterraneo-real-estate.vercel.app`
3. Verifica (etiqueta HTML en `index.html` si Google te lo pide).
4. **Sitemaps** → envía: `https://mediterraneo-real-estate.vercel.app/sitemap.xml`

Si tenías la propiedad de Netlify, puedes dejarla o eliminarla cuando Vercel sea la única versión pública.

---

## 4. Publicar cambios

```bash
git add .
git commit -m "Actualizar URLs a Vercel"
git push
```

Vercel redespliega en unos segundos. No hace falta subir archivos a mano.

---

## 5. Netlify (opcional)

Si ya no usas Netlify, despublica el sitio antiguo o configura una **redirección 301** a Vercel para evitar contenido duplicado en Google.

---

## Resumen rápido

| Tarea | Dónde |
|-------|--------|
| Ver el sitio en vivo | https://mediterraneo-real-estate.vercel.app/ |
| Actualizar la web | `git push` → Vercel |
| Analytics | analytics.google.com |
| SEO / indexación | search.google.com/search-console + sitemap |
