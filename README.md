# El Sistema Ganador — Landing

Dos landings en React + Vite + TypeScript + Tailwind 4, replicando el diseño Seonex (Home Digital Marketing) adaptado al método El Sistema Ganador.

## Rutas

| Ruta | Audiencia |
|------|-----------|
| `/libro` | Empresas — beneficios del sistema y oferta del libro |
| `/directores` | Directores — convencer + test de índice de dependencia |

## Requisitos

- Node.js **>= 20** recomendado (Tailwind 4 y React Router 7)
- npm

## Desarrollo

```bash
# Desde la raíz de sistema-ganador-landing/
bash run.sh

# O con npm
npm start
```

- Libro: http://localhost:5173/libro
- Directores: http://localhost:5173/directores

Si un puerto queda bloqueado:

```bash
bash kill-dev.sh
```

## Build

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  data/           # Copy por landing (libro, directores)
  components/
    layout/       # Header, Footer, Layout
    sections/     # Secciones replicando Seonex
    ui/           # Button, Marquee
  pages/          # LibroPage, DirectoresPage
public/images/    # Assets del template Seonex
```
