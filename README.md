# IABOT 4.0

Sitio público de IABOT: talleres de robótica, programación y diseño para chicos y jóvenes, sedes y propuestas para instituciones.

## Desarrollo

Requisitos: Node.js 22.13 o superior y pnpm 11.25.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Abrir http://localhost:3000.

## Validación y publicación

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Next.js genera el sitio estático en `out/`. Publicar esa carpeta en un proveedor con soporte para rutas de directorio y `404.html`. No requiere un servidor Node.js en producción. `pnpm dev` inicia el servidor para desarrollo.

La versión de evaluación tiene la indexación deshabilitada en `app/layout.tsx` y `app/robots.ts`. Antes de la publicación definitiva, revisar esa configuración, definir el dominio y agregar canonical y sitemap. Confirmar también edades, sedes, disponibilidad y datos de contacto con IABOT. No hay dominio de producción acoplado al código.

## Organización

- `app/`: rutas, metadatos y estilos globales. La portada compone las secciones.
- `components/home/`: hero, talleres, metodología, testimonio, sedes, instituciones, preguntas y contacto.
- `components/site/`: navegación, footer, filtros, formulario y presentación compartida de programas.
- `components/ui/`: controles accesibles reutilizables.
- `lib/content.ts`: contenido tipado de talleres, sedes y contacto.
- `public/`: fotografías WebP y fuentes locales.

Las páginas de talleres y sedes se generan desde el contenido, sin duplicar layouts. Los componentes son de servidor salvo donde necesitan interacción. Las imágenes tienen dimensiones explícitas y variantes responsive; las fuentes se sirven localmente.

## Contacto

El formulario valida los datos y abre WhatsApp con un mensaje preparado. La persona revisa y envía el mensaje desde WhatsApp. El sitio no almacena consultas ni simula envíos a un servidor.

## Recursos

Las fotografías y el logo pertenecen al material de IABOT. El contenido fue tomado del sitio institucional y debe mantenerse actualizado por sus responsables. Los paquetes de terceros conservan sus propias licencias.
