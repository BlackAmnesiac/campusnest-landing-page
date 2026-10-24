# CampusNest — Landing Page

Página de presentación de **CampusNest**, plataforma de alojamiento entre estudiantes universitarios de Lima con compatibilidad de convivencia y visitas verificadas. Es la puerta de entrada: desde aquí los botones llevan a la Web Application.

## Contenido

- Navbar, hero con buscador por distrito, métricas, "Cómo funciona", beneficios, tarjetas para buscador y anfitrión, preguntas frecuentes y footer.
- HTML, CSS y JavaScript puro (sin frameworks), diseño responsive y tema oscuro.

## Estructura

```
index.html
css/tokens.css      ← guía de estilo (variables --primary, --secondary, ...)
css/base.css        ← botones, navbar, tarjetas, formularios
css/landing.css     ← estilos propios de la landing
css/responsive.css  ← adaptación a móvil
js/main.js          ← enlaces hacia la Web Application
docs/guia-de-estilo.md
```

## Guía de estilo

Los colores se definen en `css/tokens.css` y se usan siempre con variables. Primario (`--primary`): navbar, marca y botones principales. Secundario (`--secondary`): botones secundarios, enlaces y elementos interactivos. Detalle en [docs/guia-de-estilo.md](docs/guia-de-estilo.md).

## Cómo verlo

Abrir `index.html` en el navegador. Para que los botones lleguen a la Web Application en local, clonar ambos repositorios en la misma carpeta; cuando se publique la web app, cambiar `APP_URL` en `js/main.js`.

## Enlaces

- Diseño en Figma: https://www.figma.com/design/ksTadJeMR4BF5D97usDBrn/campusname-mockups?node-id=7-248&t=dVgZtFgiDOl6nfXt-1
- Web Application: https://github.com/BlackAmnesiac/campusnest-web-app 
- Backend: https://github.com/andynary/campusnest-web-services

## Integrantes

| Nombre y apellido | Usuario de GitHub |
|---|---|
| Andy Condori | andynary |
| Austin Flores | BlackAmnesiac |
| Diego Flores | DiegoFlores-123 |
| Peter Pacherres | Peter-PachMu |

## Convención de commits

Usamos Conventional Commits, igual que en el backend: `feat(ui): add hero section`, `fix(css): ...`, `docs: ...`, `chore: ...`.
