# SEO Technical Audit – Landing Page

## Objetivo
Simular una auditoría técnica enfocada en rastreabilidad, indexación y rendimiento web.

## Implementaciones Técnicas

- Estructura en HTML5
- Meta description y canonical 
- Datos estructurados con JSON-LD (Schema.org)
- robots.txt para control de rastreo
- sitemap.xml para facilitar indexación
- Carga optimizada de JavaScript usando "defer" (respeta el DOM)
- Simulación de contenido dinámico (CSR)

## Consideraciones SEO

El uso de defer evita bloqueo del renderizado.
Se añadió canonical para evitar problemas de contenido duplicado.

## Próximas mejoras

- Implementar SSR con framework moderno
- Optimizar imágenes y lazy loading
- Medición de Core Web Vitals con Lighthouse